import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Item } from './Item'
import {sliderItems} from '../../src/data'
export const Slider = () => {

    const items = [
        { id: 0, img: 'https://images.pexels.com/photos/3024242/pexels-photo-3024242.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 1, img: 'https://images.pexels.com/photos/3198951/pexels-photo-3198951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 2, img: 'https://images.pexels.com/photos/1096738/pexels-photo-1096738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 3, img: 'https://images.pexels.com/photos/1291129/pexels-photo-1291129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 4, img: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 5, img: 'https://images.pexels.com/photos/712176/pexels-photo-712176.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 6, img: 'https://images.pexels.com/photos/3517718/pexels-photo-3517718.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 7, img: 'https://images.pexels.com/photos/596787/pexels-photo-596787.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 8, img: 'https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { id: 9, img: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
      ];
  return (
    <Carousel sx={{backgroundColor:"lightblue"}} indicators={true} navButtonsAlwaysInVisible
    indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-80px",
          position: "relative"
        }
      }}	>
    {
        sliderItems.map( (item, i) => <Item key={item.id} item={item} /> )
    }
</Carousel>
  )
}
