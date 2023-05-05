import { AppBar, Box, Toolbar, Typography,InputBase } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import styled from '@emotion/styled';
import { MessageOutlined, Pets, Search, ShoppingBagOutlined } from '@mui/icons-material';
import { theme } from '../../src/theme';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const StyledBox=styled(Box)({
  display:"flex",
  gap:"1rem",
  alignItems:"center"
})


const SearchIconWrapper = styled(InputBase)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "30vw",
  margin:"2px",
  borderRadius:"5px",
  [theme.breakpoints.up('xs')]: {
    width:"50vw"
  },
  // [theme.breakpoints.up('md')]: {
  //   width:"50vw"
  // },
  
}));

export const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [open,Setopen] =useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    Setopen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    Setopen(false);
  };
  return (
    <Box sx={{backgroundColor:"blue",flexGrow:"1",}}>
    <AppBar position='sticky'>
      <Toolbar sx={{justifyContent:"space-between"}}>
        <StyledBox sx={{display:"flex",gap:"1rem"}}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { xs: 'block', sm: 'none' },mr:2 }}
             onClick={(e)=>handleClick(e)}
          >
            <MenuIcon />
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
        <MenuItem onClick={handleClose}>Register</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <MenuItem onClick={handleClose}>Cart</MenuItem>
      </Menu>
        <Typography sx={{fontWeight:"500px",fontSize:"22px"}} component="span">
          Mango
        </Typography>
      
       
          <SearchIconWrapper placeholder='  Search ..'>
            
        
          </SearchIconWrapper>
          
          
          </StyledBox>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } ,gap:"1rem"}}
>
            <Typography component="a" sx={{cursor:"pointer"}}>
              Register
            </Typography>
            <Typography component="a" sx={{cursor:"pointer"}}>
              Sign in
            </Typography>
            <ShoppingBagOutlined/>
          </Box>
      </Toolbar>
    </AppBar>
    
    </Box>
  )
}

