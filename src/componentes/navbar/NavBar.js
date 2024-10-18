import {AppBar, styled, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemButton, Link} from '@mui/material'
import { useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)


    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })
    const MenuBox = styled(Box)({
        display: 'flex',
        gap: 30,
        cursor: 'pointer'
    })
    const MenuItems = [
        {Name: "Inicio", link:"/"},
        {Name: "Login", link:"/login"},
        {Name: "Logout", link:"/logout"}
    ]
    const handleClickLink = (link)=>{
        setOpenMenu(false)
        window.location.href = link
    }
 
    return (
    <>

    <AppBar sx={{ backgroundColor: 'black' }} position ="sticky" elevation={0}>
        <StyledToolbar>
            <Box flex={{xs:25, md:1}}>
                <Link href="http://localhost:3000/" sx={{textDecoration:"none"}}>
                    <Typography 
                        variant="h4" 
                        color= {"white"} 
                        textAlign={{xs: "center", md: "left"}} >
                        Tasks Master 
                    </Typography>
                </Link>
            </Box>
        
            <MenuBox flex={1}  sx={{display: {xs: "none", md:"flex"}}}>
            
                {MenuItems.map((item) => (
                    <Typography variant="h6"  key={item.name} onClick ={()=>handleClickLink(item.link)}>
                        {item.Name}
                    </Typography>
                    
                    ))}
            
            </MenuBox>
            
            <Box flex={1} ml={10}>
                
                
                
                            <MenuIcon 
                                sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }} 
                                onClick={() => setOpenMenu(!openMenu)} 
                            />
                        

            </Box>
        
        </StyledToolbar>
        <Drawer
            anchor={"top"}
            open={openMenu}
            onClose={() => setOpenMenu(!openMenu)}>
            <List>
                <ListItem>
                {MenuItems.map((item) => (
                    <ListItemButton  key={item.name} onClick ={()=>handleClickLink(item.link)}>
                        {item.Name
                    }</ListItemButton>
                ))}
                </ListItem>
                        <ListItemButton>
                            <Typography variant="h6" color={"tomato"}>Login</Typography>
                        </ListItemButton>       
                    
            </List>
        </Drawer>
    </AppBar>
    <Box sx={{display:"flex", justifyContent: "center", flexDirection: {xs: "column", md: "row"}}}>

    </Box>
    </>
        
    )
}
