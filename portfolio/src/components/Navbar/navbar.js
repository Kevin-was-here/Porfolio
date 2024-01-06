import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon'; //! Change to own icon

const Navbar = () => {

    return (
        <AppBar className="AppBar">
            <Toolbar>
                <IconButton size="large" edge='start' color='inherit' aria-label="logo">
                        <CatchingPokemon />
                </IconButton>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                    Home
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Projects</Button>  
                    <Button color='inherit'>Blog</Button>
                    <Button color='inherit'>Contact Me</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
 
export default Navbar;