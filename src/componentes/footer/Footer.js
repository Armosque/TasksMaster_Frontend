import { Box, Stack } from '@mui/material'

export const Footer = () => {
    return (
        <Box sx={{bgcolor:"black", height:"100px"}}
        justifyContent="center" 
        alignItems="center" >
        <container>
            <Stack direction={"row"} >
            
                <Box flex={1} color={"white"} mt={3}  align={"center"}>
                    ©2024 - AML Solutions - armosqueral@yahoo.es
                </Box>
            </Stack>
        </container>
    </Box>
    )
}
