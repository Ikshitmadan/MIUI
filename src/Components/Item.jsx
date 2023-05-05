import styled from '@emotion/styled'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
const StyledBox=styled(Box)({
display:"flex",
flexDirection:"column",
justifyContent:"center",
gap:"1rem"
})
const Titlediv=styled(Typography)({
  color:"white",
  margin:"5px",
  variant:"h1"
})
export const Item = ({item}) => {
  console.log(item);
  return (
    <Box sx={{width:"100vw",height:"90vh",display:"flex"}}>
        <img src={item.img} style={{width:"60%",height:"70%"}} alt="" srcset="" />
 <StyledBox>    
<Typography variant={"h4"}>{item.title}</Typography>
<Typography variant='h3'>{item.desc}</Typography>
<Button variant='outlined'  sx={{width:"200px",alignSelf:"center"}}>Shop Now</Button>
</StyledBox>
    </Box>
  )
}
