import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardDetail from '../Components/CardsFolder/CardDetail'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import AddToCart from '../Pages/AddToCart'
import Checkout from '../Pages/Checkout'

const ComRout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtocart' element={<AddToCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cardDetail/:id' element={<CardDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default ComRout