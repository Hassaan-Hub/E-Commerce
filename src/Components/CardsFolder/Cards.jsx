import React, { useContext } from 'react'
import "./Cards.css"
import { cardsContext } from '../../Context/CardsContextProvider';
import { CartContext } from '../../Context/CartContextProvider';
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavbarFolder/Navbar';

const Cards = ({ children }) => {

  const { cardsData } = useContext(cardsContext)
  const { addToCart } = useContext(CartContext)

  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 px-4 justify-items-center'>
        {cardsData.data?.map((val, idx) => (
          <Card key={val.id} sx={{ width: '100%', maxWidth: 320, minWidth: 0, paddingBottom: 6, position: "relative" }} className='card'>
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ objectFit: "contain", height: 240 }}
              image={val.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                $ {val.price}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {val.description.slice(0, 150)}
              </Typography>
              <Rating className='absolute mt-5' name="read-only" value={val.rating.rate} readOnly />
            </CardContent>
            <CardActions className='absolute bottom-2 '>
              <Button variant="contained" className='cart-btn'
                onClick={() => {
                  addToCart(val);
                }}
              >Add to Cart</Button>
              <Button variant="outlined" onClick={() => {
                navigate(`/cardDetail/${val.id}`);
              }} className='detail-btn'>View Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Cards