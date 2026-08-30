import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardDetail from '../Components/CardsFolder/CardDetail'
import Home from '../Pages/Home'

const ComRout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cardDetail' element={<CardDetail />} />
      </Routes>
    </div>
  )
}

export default ComRout