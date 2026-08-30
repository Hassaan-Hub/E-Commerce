import axios from 'axios';
import React, { Children, createContext, useEffect, useState } from 'react'

export const cardsContext = createContext();

const CardsContextProvider = (props) => {

  const [cardsData, setCardsData] = useState({})

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(response => {
        setCardsData(response)
      })
      .then(data => console.log(data));
  }, [])

  return (
    <cardsContext.Provider value={{ cardsData, setCardsData }}>
      {props.children}
    </cardsContext.Provider>
  )
}

export default CardsContextProvider