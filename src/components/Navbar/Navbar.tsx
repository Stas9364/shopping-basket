import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Avatar, Menu, MenuItem} from "@mui/material";
import {useAuthState} from "react-firebase-hooks/auth";
import {NavLink} from "react-router-dom";
import {theme, useAppDispatch, useAppSelector} from "../../utils";
import {logoutAC} from "../../Pages/Login/authAction";
import {auth} from "../../firebase/firebase";
import { ThemeProvider } from '@mui/material/styles';
import {cartSelector} from "../../Pages";




export function Navbar() {
    const dispatch = useAppDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [user] = useAuthState(auth);
    const img = user?.photoURL as string;

    const logout = async () => {
        await auth.signOut();
        setAnchorEl(null);
        dispatch(logoutAC());
    };

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toCard = () => {
        dispatch(logoutAC());
    };

    const goodsQuantity = useAppSelector(cartSelector);

    return (
        <Box sx={{flexGrow: 1}}>
            <ThemeProvider theme={theme}>
            <AppBar position="static"  color={"secondary"}>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="open drawer"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>

                    <Typography
                        color={'#005267'}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        STORE
                    </Typography>

                    {/*<NavLink to={'/create-product'}> Create</NavLink>*/}

                    <Box sx={{flexGrow: 1}}/>
                    {user && <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <NavLink to={'/card'}
                                 style={{
                                     textDecoration: 'none',
                                     position: 'absolute',
                                     right: '70px',
                                     top: '10px',
                                     color: '#005267'
                                 }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                                        onClick={toCard}
                            >
                                <Badge badgeContent={goodsQuantity.length} color={"error"}>
                                    <ShoppingCartIcon/>
                                </Badge>
                            </IconButton>
                        </NavLink>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            color="inherit"
                        >
                            <Avatar alt='user name' src={img}/>
                        </IconButton>
                    </Box>}
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
    );
}