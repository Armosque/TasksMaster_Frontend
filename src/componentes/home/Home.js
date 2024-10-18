import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const Home = () => {
    return (
        <>
        {/* Sección principal */}
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Grid container spacing={4} alignItems="center">
            {/* Texto principal */}
            <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Organiza tus tareas de forma eficiente
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                Con TaskMaster, podrás gestionar y priorizar tus tareas de manera simple y efectiva. ¡Alcanza tus objetivos más rápido!
                </Typography>
                <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
                href="/signup"
                >
                ¡Comienza ahora!
                </Button>
            </Grid>

            {/* Imagen o visual representativo */}
            <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    src="/images/tasks-landing.svg" // Aquí puedes agregar la ruta de una imagen que prefieras
                    alt="Organizador de Tareas"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                </Box>
            </Grid>
            </Grid>
        </Container>

        {/* Sección de funcionalidades clave */}
        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Funcionalidades Clave
            </Typography>
            <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
                <Box textAlign="center">
                <AddCircleOutlineIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>Crear Tareas</Typography>
                <Typography color="textSecondary">Agrega nuevas tareas de forma rápida y sencilla para mantener el control.</Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Box textAlign="center">
                <ListAltIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>Gestiona tus Tareas</Typography>
                <Typography color="textSecondary">Modifica o elimina tareas fácilmente para mantenerte al día.</Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Box textAlign="center">
                <CheckCircleOutlineIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>Completa tus Tareas</Typography>
                <Typography color="textSecondary">Marca las tareas como completadas y mide tu productividad.</Typography>
                </Box>
            </Grid>
            </Grid>
        </Container>
        </>
    );
    };


