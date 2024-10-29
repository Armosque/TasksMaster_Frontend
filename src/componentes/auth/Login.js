import { TextField, Button, Container, Box, Typography, Link } from '@mui/material';
import {useState} from 'react'
import axios from 'axios'


export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            })
            const token = response.data.jwt;
            localStorage.setItem('authToken', token);
            console.log('Inicio de sesión exitoso:', response.data);
            window.location.href = '/tasks';
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
            alert('Error durante el inicio de sesión. Verifica tus credenciales.');
        }
    }
    
    return (
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
                    Login
                </Typography>
                <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2, fontSize: 18 }}
                    >
                    Sign In
                    </Button>
                    <Box textAlign="center" mb={4}>
                    <Link href="/register" variant="h6" sx={{textDecoration: "none"}} >
                        {"No tienes cuenta? Registrate"}
                    </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
