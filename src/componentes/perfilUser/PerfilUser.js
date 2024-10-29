import { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import {BtnMisTareas} from '../botonMisTareas/BtnMisTareas';

export const PerfilUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.log('Token no encontrado');  // Podrías redirigir a la página de login si no hay token
            return;
        }
        fetchUserData(token);
    }, []);

    const fetchUserData = async (token) => {
        try {
            const response = await axios.get('http://localhost:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setName(response.data.name);
            setEmail(response.data.email);
        } catch (error) {
            console.error('Error al cargar los datos del usuario:', error);
            setSnackbarMessage('Error al cargar los datos del usuario');
            setError(true);
            setOpenSnackbar(true);
        }
    };

    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setSnackbarMessage('Las contraseñas no coinciden');
            setError(true);
            setOpenSnackbar(true);
            return;
        }

        const formData = {
            name: name,
            email: email,
        };
        if (password) formData.password = password;

        const token = localStorage.getItem('authToken');
        try {
            await axios.put('http://localhost:8000/api/user', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSnackbarMessage('Perfil actualizado exitosamente');
            setError(false);
            setOpenSnackbar(true);
            window.location.href='/login'

        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            setSnackbarMessage('Error al actualizar el perfil');
            setError(true);
            setOpenSnackbar(true);
        }
    };

    return (
        <>
        <BtnMisTareas/>
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Mi Perfil
                </Typography>

                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleUpdateProfile}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Nueva Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Confirmar Nueva Contraseña"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Actualizar Perfil
                    </Button>
                </Box>

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
        </Container>
        </>
    );
};


