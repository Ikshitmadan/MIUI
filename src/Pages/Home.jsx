import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Products } from '../Components/Products'
import { Slider } from '../Components/Slider'

export const Home = () => {
    return (
      <div>
        
          <Slider/>
          <Products/>
      </div>
    )
  }
