import { TextField, Button, Container, Box, Typography, Link } from '@mui/material';
import {useState} from 'react'
import axios from 'axios'



export const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, email, password, confirmPassword)
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                email,
                password})
            console.log(response.data)
            window.location.href = '/login'
            
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Please check your credentials.');
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
                    Registrate
                </Typography>
                <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    autoComplete="Name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
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
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    autoComplete="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2, fontSize: 18 }}
                    >
                    Sign Up
                    </Button>
                    <Box textAlign="center" mb={4}>
                        <Link href="/login" variant="h6" sx={{textDecoration: "none"}}>
                            {"Ya tienes cuenta? Login"}
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

    

