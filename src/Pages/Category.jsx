import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Products } from '../Components/Products';
  

const CatBox=styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"

})

const Filterdiv=styled("div")({
    display:"flex",
    alignItems:"center",
    gap:"2rem"
})

export const Category = () => {
    const [age,setage]=useState('');
    const handleChange = (event) => {
        setage(event.target.value+"");
      };
    
  return (
  <Box sx={{width:"100%",padding:"10px"}}>
 <Typography variant='h3'>
    Shirts
</Typography>
<CatBox>
<Filterdiv>
   <Typography variant='h5' component='span'>
    Filter Products
   </Typography>
    <FormControl >
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
        sx={{width:{xs:"50px",md:"100px"}}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Color"
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
        sx={{width:{xs:"50px",md:"100px"}}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="M"
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
</Filterdiv>

<Filterdiv>
   
    <FormControl >
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
        sx={{width:{xs:"40px",md:"100px"}}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
</Filterdiv>
</CatBox>
<Products option="show product"/>

  </Box>
  )
}
