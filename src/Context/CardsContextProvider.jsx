import axios from 'axios';
import React, { Children, createContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const cardsContext = createContext();

const CardsContextProvider = (props) => {

  const [cardsData, setCardsData] = useState({})
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category")
    if (!category || category === "all") {
      axios('https://fakestoreapi.com/products')
        .then(response => {
          setCardsData(response)
        })
        .then(data => console.log(data));
    }
  }, [searchParams])

  useEffect(() => {
    const category = searchParams.get("category")
    if (category && category !== 'all') {
      axios(`https://fakestoreapi.com/products/category/${category}`)
        .then(response => {
          setCardsData(response)
        })
        .then(data => console.log(data));
    }
  }, [searchParams])


  return (
    <cardsContext.Provider value={{ cardsData, setCardsData }}>
      {props.children}
    </cardsContext.Provider>
  )
}

export default CardsContextProvider