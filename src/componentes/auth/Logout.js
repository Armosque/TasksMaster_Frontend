import { Button, Container, Box, Typography, Grid } from '@mui/material';
import axios from 'axios';
import img from '../../img/logout.webp';
import { useNavigate } from 'react-router-dom';
import { BtnMisTareas } from '../botonMisTareas/BtnMisTareas';

export const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('authToken');
            
            // Enviar el token en el encabezado para autenticación
            await axios.post('http://localhost:8000/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Logout exitoso');

            // Elimina el token de localStorage después de un cierre de sesión exitoso
            localStorage.removeItem('authToken');
            
            // Redirige al usuario a la página de inicio de sesión
            navigate('/login');
        } catch (error) {
            console.error('Error durante el logout:', error);
            alert('Error durante el cierre de sesión. Por favor, inténtalo de nuevo.');
        }
    };
   
    return (
        <>
        <BtnMisTareas/>
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    alignItems: 'center',
                    mt: 8,
                }}
            >
                <Grid container spacing={3} alignItems="center" mb={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={img}
                            alt="Logout"
                            sx={{
                                width: '100%',
                                borderRadius: '8px',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} mt={4}>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                            <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
                                ¿Seguro que deseas cerrar sesión?
                            </Typography>
                            <Button
                                onClick={handleLogout}
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ fontSize: 16 }}
                            >
                                Cerrar sesión
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>
    );
};
