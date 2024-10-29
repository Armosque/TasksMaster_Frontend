import React, { useEffect, useState, useCallback } from 'react';
import { Container, Box, Typography, Button, Grid, Snackbar, Alert, Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    // Definir fetchTasks con useCallback para evitar recreación en cada render
    // Modificación en fetchTasks
const fetchTasks = useCallback(async (status = '') => {
    const token = localStorage.getItem('authToken');
    if (!token) {
        setSnackbarMessage('No se encontró el token de autenticación');
        setError(true);
        setOpenSnackbar(true);
        return;
    }

    try {
        // Corrige la URL para que el parámetro de consulta se agregue correctamente
        const url = `http://localhost:8000/api/tasks${status ? `?status=${status}` : ''}`;
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setTasks(response.data); // Actualiza el estado de tareas con los datos filtrados
    } catch (error) {
        console.error('Error al cargar las tareas:', error);
        if (error.response && error.response.status === 403) {
            setSnackbarMessage('Sesión expirada. Por favor, inicia sesión de nuevo.');
            setError(true);
            setOpenSnackbar(true);
            localStorage.removeItem('authToken');
            navigate('/login');
        } else {
            const errorMsg = error.response?.data?.detail || 'Error al cargar las tareas';
            setSnackbarMessage(errorMsg);
            setError(true);
            setOpenSnackbar(true);
        }
    }
}, [navigate]);


    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);
    
    const handleCreateTask = () => {
        navigate('/createTask');
    };

    const handleLogout = () => {
        navigate('/logout');
    };

    const handleFilterStatus = (status) => {
        fetchTasks(status); // Llama a fetchTasks con el estado seleccionado
        setAnchorEl(null);  // Cierra el menú después de seleccionar el filtro
    };

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handlePerfilUser=()=>{
        navigate('/profile');
    }
    return (
        <Container maxWidth="md" mb={6} >
            <Box display="flex" justifyContent="center" alignItems="center" mt={4}  gap={2}>
                <Typography variant="h4">Mis Tareas</Typography>
                <Button variant="contained" color="primary" onClick={handleCreateTask}>
                    Crear Tarea
                </Button>
                <Button variant="contained" color="primary" onClick={handleOpenMenu}>
                    Filtrar por Estado
                </Button>
                <Button variant="contained" color="primary" onClick={handleLogout}>
                    Logout
                </Button>
                
                {/* Menú de filtro por estado */}
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                    <MenuItem onClick={() => handleFilterStatus('pending')}>Pendiente</MenuItem>
                    <MenuItem onClick={() => handleFilterStatus('in_progress')}>En Progreso</MenuItem>
                    <MenuItem onClick={() => handleFilterStatus('completed')}>Completada</MenuItem>
                    <MenuItem onClick={() => handleFilterStatus('')}>Mostrar Todas</MenuItem>
                </Menu>
                <Button variant="contained" color="primary" onClick={handlePerfilUser}>
                    Perfil
                </Button>
            </Box>

            {/* Lista de Tareas */}
            <Grid container spacing={2} mb={6} mt={4}>
                {tasks.map((task) => (
                    <Grid item xs={12} key={task.id}>
                        <Link to={`/tasks/${task.id}`} style={{ textDecoration: "none" }}>
                            <Box
                                p={2}
                                border="1px solid #ddd"
                                borderRadius="8px"
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography variant="h6">{task.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {task.status === 'pending' && 'Pendiente'}
                                    {task.status === 'in_progress' && 'En Progreso'}
                                    {task.status === 'completed' && 'Completada'}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            {/* Alerta de Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={error ? 'error' : 'success'}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};
