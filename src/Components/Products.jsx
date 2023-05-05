import React from 'react'
import {popularProducts} from '../../src/data'
import { Box, Button, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Image } from '@mui/icons-material';
import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const StyledBox=styled("div")({
  
   margin:"10px",
   position:"absolute",
   top:"50%",
   left:"40%"
 


    
    
  })
export const Products = ({option}) => {
  return (
    <Box sx={{ flexGrow: 1 ,position:"relative",mt:2}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
   
      {popularProducts.map((item)=>{
        return (<Grid  item xs={2} sm={4} md={4} key={item.id} sx={{position:"relative"}}>

        <img style={{height:"80%",width:"100%",objectFit:"cover"}} src={item.img} alt="" srcset="" />
        <StyledBox >
        <Typography variant='h3'>
           {item.title}
        </Typography>
        <Button variant='contained' sx={{display:"block"}}>
         {option||"show more"}
        </Button>
      
    
     
   
        

       </StyledBox>
        </Grid>)
        

      })


      }

    </Grid>
   
  </Box>
  )
}
