import { Box, Button } from '@mui/material';

export const BtnMisTareas = () => {

    const handleMisTareas=()=>{
        window.location.href = '/tasks';
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            mt: 2,  
            mr: 20   
        }}>
            <Button variant="contained" color="primary"  onClick={handleMisTareas}>
                Mis Tareas
            </Button>
        </Box>
    )
}
