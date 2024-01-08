import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Container} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

const Navbar = () => {
    return (
        <AppBar className="AppBar" color=''>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton>
                        <AdbIcon className="LogoIcon" sx={{display:{xs:'none', md:'flex' }, mr:1}} />
                        <Typography variant="h6" component='div' sx={{ mr:2, display:{xs:'none', md: 'flex'},}} className="LogoText">
                            Home
                        </Typography>
                    </IconButton>

                    <Stack direction="row" spacing={2}>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Projects</Button>  
                        <Button color='inherit'>Blog</Button>
                        <Button color='inherit'>Contact Me</Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
 
export default Navbar;