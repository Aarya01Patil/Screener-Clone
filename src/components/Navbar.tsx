import React from 'react';
import { AppBar, Toolbar, Box, InputBase, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/">
                        <img 
                            src={`${process.env.PUBLIC_URL}/ScreenerLogo.svg`} 
                            alt="Screener.in" 
                            style={{ height: '30px', marginRight: '20px' }}
                        />
                    </Link>
                    <Button color="inherit" component={Link} to="/">FEED</Button>
                    <Button color="inherit" component={Link} to="/screens">SCREENS</Button>
                    <Button color="inherit">
                        TOOLS
                        <span style={{ marginLeft: '4px' }}>▼</span>
                    </Button>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ 
                        position: 'relative',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '4px',
                        marginRight: '16px'
                    }}>
                        <SearchIcon sx={{ 
                            position: 'absolute',
                            left: '8px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#666'
                        }} />
                        <InputBase
                            placeholder="Search for a company"
                            sx={{
                                pl: '36px',
                                pr: '12px',
                                py: '6px',
                                width: '250px'
                            }}
                        />
                    </Box>
                    <Button
                        sx={{
                            textTransform: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Avatar sx={{ width: 24, height: 24, marginRight: 1 }} />
                        LOGIN
                        <span style={{ marginLeft: '4px' }}>▼</span>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar; 