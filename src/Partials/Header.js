import React from 'react'

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Container,
    Button,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import AdbIcon from '@mui/icons-material/Adb'

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const navigate = useNavigate()

    const categories = [
        { label: 'Electronics', route: '/electronics' },
        { label: 'Clothes Man', route: '/clothesMan' },
        { label: 'Clothes Women', route: '/clothesWomen' },
        { label: 'Jewelry', route: '/jewelry' },
    ]
    
    const handleMenuClick = route => {
        navigate(route)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MULTI THINGS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            HOME
                        </Button>
                        <Button
                            onClick={(event) => setAnchorElUser(event.currentTarget)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            CATEGORY
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {categories.map((category) => (
                                <MenuItem key={category.route} onClick={() => handleMenuClick(category.route)}>
                                    {category.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
