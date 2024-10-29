import { AppBar, styled, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemButton, Link } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import img from "../../img/Designer (1).jpeg";

export const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    });

    const MenuBox = styled(Box)({
        display: 'flex',
        gap: 30,
        cursor: 'pointer',
        justifyContent: 'flex-end',  
        flexGrow: 1, 
    });

    const MenuItems = [
        { Name: "Home", link: "/" },
        { Name: "Login", link: "/login" },
        
    ];

    const handleClickLink = (link) => {
        setOpenMenu(false);
        window.location.href = link;
    };

    return (
        <>
            <AppBar sx={{ backgroundColor: 'black' }} position="sticky" elevation={0}>
                <StyledToolbar>
                    {/* Logo de la aplicación */}
                    <img
                        src={img}
                        alt="Organizador de Tareas"
                        style={{ width: '40px', height: "auto", marginRight: '16px' }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/" sx={{ textDecoration: "none" }}>
                            <Typography
                                variant="h5"
                                color="white"
                                textAlign="left"
                            >
                                Tasks Master
                            </Typography>
                        </Link>
                    </Box>

                    {/* Menú de enlaces alineados a la derecha */}
                    <MenuBox sx={{ display: { xs: "none", md: "flex" } }}>
                        {MenuItems.map((item) => (
                            <Typography
                                variant="h6"
                                key={item.Name}
                                onClick={() => handleClickLink(item.link)}
                                sx={{ color: "white", cursor: "pointer" }}
                            >
                                {item.Name}
                            </Typography>
                        ))}
                    </MenuBox>

                    {/* Icono de menú para dispositivos móviles */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <MenuIcon
                            sx={{ cursor: "pointer", color: "white" }}
                            onClick={() => setOpenMenu(!openMenu)}
                        />
                    </Box>
                </StyledToolbar>

                {/* Drawer para dispositivos móviles */}
                <Drawer
                    anchor="top"
                    open={openMenu}
                    onClose={() => setOpenMenu(!openMenu)}
                >
                    <List>
                        {MenuItems.map((item) => (
                            <ListItem key={item.Name} onClick={() => handleClickLink(item.link)}>
                                <ListItemButton>
                                    <Typography variant="h6">
                                        {item.Name}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
        </>
    );
};
