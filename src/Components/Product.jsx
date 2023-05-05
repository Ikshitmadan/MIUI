import styled from '@emotion/styled'
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


const Container=styled("div")({
 padding:"10px",
 minHeight:"100vh",
 display:"flex",
 alignItems:"center",
 gap:"1rem",

})

const LeftContainer= styled("div")({
flex:"1"
})

const RightContainer =styled("div")({
    flex:"1",
 
    
})

const ColorDiv=styled("div")({
    display:"flex",
    alignItems:"center",
    gap:"5px"
})
const Heading = styled('h1')`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;
const Circle=styled("span")(({ bg }) => ({
    height:"40px",
    width:"40px",
    borderRadius:"50%",
    backgroundColor:bg
   
}))

const Image=styled("img")({
maxWidth:"100%",
border:"2px solid black"

})

const OptionDiv=styled("div")({
    display:"flex",
    alignItems:"center",
    gap:"1rem"
})

const SizeContainer=styled("div")({
    display:"flex",
    alignItems:"center",
    gap:"5px",
    marginTop:"10px"
})
const Btn=styled(Button)({
    border:"1px solid green",
  borderRadius:"5px"
})
const AddBtn=styled("div")({
    display:"flex",
    alignItems:"center",
    gap:"5px"
})

export const Product = () => {
    
    const [value,setvalue]=useState(1);
    const [age,setage]=useState('');
    const handleChange = (event) => {
        setage(event.target.value+"");
      };
     
  return (
    <Container>
    <LeftContainer>
   <Image src='https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600'>
   </Image>
    </LeftContainer>
    <RightContainer>
        <Typography variant='h2' component='span'>
            Denim JumpSuit
        </Typography>
        <Typography variant='h5' component='div'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic id ducimus at culpa facere quod rem nostrum natus vitae porro ad, doloribus accusantium sed ut quia minus repellendus fugiat aliquid, odio illum. Totam, ducimus sunt suscipit provident molestiae magni illo similique quas, veniam sit iure!
        </Typography>
        <Typography sx={{alignContent:"center",mt:1}} variant='h4' component='div'>
            Rs 1000
        </Typography>
        <OptionDiv>
        <ColorDiv>
        <Typography  component='span' variant='h6'>Color</Typography>
        <Circle bg='green' ></Circle>
        <Circle bg='yellow' ></Circle>
        <Circle bg='blue'></Circle>
        </ColorDiv>
        <SizeContainer>
            <Typography>
                Size
            </Typography>
            <FormControl >
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
        sx={{width:{xs:"50px",md:"100px",outline:"none"}}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Size"
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem value={"S"}>S</MenuItem>
          <MenuItem value={"M"}>M</MenuItem>
          <MenuItem value={"L"}>L</MenuItem>
        </Select>
      </FormControl>

        </SizeContainer>
        </OptionDiv>
        <OptionDiv style={{marginTop:"10px"}}>
            <Btn variant='outline'>Buy Now</Btn>

            <AddBtn>
            <IconButton onclick={()=>setvalue(value+1)} >
               <AddIcon />
              </IconButton >
          
            <TextField id="outlined-basic" label="1"
            variant="outlined"
            value={value} 
             sx={{width:"50px"}} />

            </AddBtn>
            <IconButton onclick={()=>value>1&&setvalue(value-1)}>
            <RemoveIcon />

            </IconButton>
           
        </OptionDiv>

    </RightContainer>

    </Container>
  )
}
