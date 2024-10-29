import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Snackbar, Alert, MenuItem } from '@mui/material';
import axios from 'axios';
import {BtnMisTareas} from '../botonMisTareas/BtnMisTareas';

export const TaskDetails = () => {
    let { taskId } = useParams(); // Obtener el ID de la tarea desde la URL
    const navigate = useNavigate();
    const [task, setTask] = useState({ title: '', description: '', status: 'pending' });
    const [error, setError] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Cargar detalles de la tarea al montar el componente
    useEffect(() => {
        const fetchTaskDetails = async () => {
            const token = localStorage.getItem('authToken');
            try {
                const response = await axios.get(`http://localhost:8000/api/tasks/${taskId}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTask(response.data);
            } catch (error) {
                console.error('Error al cargar la tarea:', error);
                setSnackbarMessage('Error al cargar la tarea');
                setError(true);
                setOpenSnackbar(true);
            }
        };
        fetchTaskDetails();
    }, [taskId]);

    // Actualizar tarea
    const handleUpdate = async () => {
        const token = localStorage.getItem('authToken');
        try {
            await axios.put(`http://localhost:8000/api/tasks/${taskId}/`, task, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSnackbarMessage('Tarea actualizada exitosamente');
            setError(false);
            setOpenSnackbar(true);
            navigate('/tasks');
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
            setSnackbarMessage('Error al actualizar la tarea');
            setError(true);
            setOpenSnackbar(true);
        }
    };

    // Eliminar tarea
    const handleDelete = async () => {
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`http://localhost:8000/api/tasks/${taskId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSnackbarMessage('Tarea eliminada exitosamente');
            setError(false);
            setOpenSnackbar(true);
            navigate('/tasks'); // Redirige a la lista de tareas después de eliminar
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
            setSnackbarMessage('Error al eliminar la tarea');
            setError(true);
            setOpenSnackbar(true);
        }
    };

    // Manejar cambios en los campos de texto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    return (
        <>
        <BtnMisTareas/>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                bgcolor: 'white',
                borderRadius: '8px',
                boxShadow: 3,
                mb: 6,
                mt: 8,
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Detalles de la Tarea
            </Typography>
            <TextField
                label="Título"
                name="title"
                value={task.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                label="Descripción"
                name="description"
                value={task.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
            />
            <TextField
                label="Estado"
                name="status"
                value={task.status}
                onChange={handleChange}
                fullWidth
                margin="normal"
                select
                variant="outlined"
            >
                <MenuItem value="pending">Pendiente</MenuItem>
                <MenuItem value="in_progress">En Progreso</MenuItem>
                <MenuItem value="completed">Completada</MenuItem>
            </TextField>
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ flex: 1, mr: 1 }}>
                    Actualizar
                </Button>
                <Button variant="contained" color="secondary" onClick={handleDelete} sx={{ flex: 1, ml: 1 }}>
                    Eliminar
                </Button>
            </Box>

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
        </Box>
        </>
    );
};
