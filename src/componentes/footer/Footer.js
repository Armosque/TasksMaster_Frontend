import { Box, Stack, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', py: 4, textAlign: 'center' }}>
            {/* Sección de Iconos de Redes Sociales */}
            <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
                <IconButton component="a" href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
                    <FacebookIcon fontSize="medium" />
                </IconButton>
                <IconButton component="a" href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
                    <TwitterIcon fontSize="medium" />
                </IconButton>
                <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
                    <InstagramIcon fontSize="medium" />
                </IconButton>
                <IconButton component="a" href="https://www.linkedin.com/in/ana-mosquera-lozano" target="_blank" sx={{ color: 'white' }}>
                    <LinkedInIcon fontSize="medium" />
                </IconButton>
                <IconButton component="a" href="https://youtube.com" target="_blank" sx={{ color: 'white' }}>
                    <YouTubeIcon fontSize="medium" />
                </IconButton>
            </Stack>

            {/* Enlaces de Navegación */}
            <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
                <Link href="/" underline="none" color="white" sx={{ '&:hover': { color: 'grey.500' } }}>
                    Home
                </Link>
                <Link href="/news" underline="none" color="white" sx={{ '&:hover': { color: 'grey.500' } }}>
                    News
                </Link>
                <Link href="/about" underline="none" color="white" sx={{ '&:hover': { color: 'grey.500' } }}>
                    About
                </Link>
                <Link href="/contact" underline="none" color="white" sx={{ '&:hover': { color: 'grey.500' } }}>
                    Contact Us
                </Link>
                <Link href="/team" underline="none" color="white" sx={{ '&:hover': { color: 'grey.500' } }}>
                    Our Team
                </Link>
            </Stack>

            {/* Copyright */}
            <Typography variant="body2" color="grey.500">
                ©2024 - Designed by AML Solutions
            </Typography>
        </Box>
    );
};
