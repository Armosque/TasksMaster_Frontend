import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import img from "../../img/landing1.jpg";

export const Home = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 8 }} alignItems="center" justifyContent="center">
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}  alignItems="center" justifyContent="center">
                        <Typography variant="h4" component="h2" gutterBottom   justifyContent="center" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.5rem' } }}>
                            Organiza tus tareas de forma eficiente
                        </Typography>
                        <Typography variant="h6" color="textSecondary" align="justify" paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            Con TaskMaster, podrás gestionar y priorizar tus tareas de una manera simple y efectiva. ¡Alcanza tus objetivos más rápido!
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ mt: 2 }}
                            href="/register"
                        >
                            ¡Comienza ahora!
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                            <img
                                src={img} 
                                alt="Organizador de Tareas"
                                style={{ width: '100%', height: 'auto' }} 
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            
            <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Funcionalidades Clave
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Box textAlign="center">
                            <AddCircleOutlineIcon fontSize="large" color="primary" />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.2rem' } }}>Crear Tareas</Typography>
                            <Typography color="textSecondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Agrega nuevas tareas de forma rápida y sencilla para mantener el control.</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Box textAlign="center">
                            <ListAltIcon fontSize="large" color="primary" />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.2rem' } }}>Gestiona tus Tareas</Typography>
                            <Typography color="textSecondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Modifica o elimina tareas fácilmente para mantenerte al día.</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Box textAlign="center">
                            <CheckCircleOutlineIcon fontSize="large" color="primary" />
                            <Typography variant="h6" sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.2rem' } }}>Completa tus Tareas</Typography>
                            <Typography color="textSecondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Marca las tareas como completadas y mide tu productividad.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
