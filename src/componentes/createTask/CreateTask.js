import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import {BtnMisTareas} from '../botonMisTareas/BtnMisTareas';

export const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState(false);

    const statusOptions = [
        { value: 'pending', label: 'Pendiente' },
        { value: 'in_progress', label: 'En Progreso' },
        { value: 'completed', label: 'Completada' },
    ];
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setError(true);
            setSnackbarMessage('El título es obligatorio');
            setOpenSnackbar(true);
            return;
        }

        // Obtén el token JWT de localStorage
        const token = localStorage.getItem('authToken');
        if (!token) {
            setSnackbarMessage('No se encontró el token de autenticación');
            setError(true);
            setOpenSnackbar(true);
            return;
        }

        try {
            await axios.post(
                'http://localhost:8000/api/tasks/',
                { title, description, status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agrega el token en el encabezado
                    },
                }
            );

            setTitle('');
            setDescription('');
            setStatus('pending');
            setSnackbarMessage('Tarea creada exitosamente');
            setError(false);
            setOpenSnackbar(true);
            window.location.href = '/tasks';
        } catch (error) {
            console.error('Error al crear la tarea:', error);
            const errorMsg = error.response?.data?.detail || 'Error al crear la tarea';
            setSnackbarMessage(errorMsg);
            setError(true);
            setOpenSnackbar(true);
        }
    };
   
    return (
        <>
        <BtnMisTareas/>
        <Box
            component="form"
            onSubmit={handleSubmit}
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
                Crear Nueva Tarea
            </Typography>
            <TextField
                label="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
                margin="normal"
                error={error && !title}
                helperText={error && !title ? 'El título es obligatorio' : ''}
            />
            <TextField
                label="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <TextField
                select
                label="Estado"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
                margin="normal"
            >
                {statusOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Crear Tarea
            </Button>

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
