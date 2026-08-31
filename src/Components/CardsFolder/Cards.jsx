import React, { useContext } from 'react'
import "./Cards.css"
import { cardsContext } from '../../Context/CardsContextProvider';
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cards = ({ children }) => {

  const { cardsData } = useContext(cardsContext)
  console.log(cardsData.data);

  const navigate = useNavigate();


  return (
    <div className='flex flex-wrap justify-evenly mt-5'>
      {cardsData.data?.map((val, idx) => (
          <Card key={val.id} sx={{ maxWidth: 300, paddingBottom: 6, position: "relative" }}>
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
              <Button variant="contained" className='cart-btn'>Add to Cart</Button>
              <Button variant="outlined" onClick={()=>{
                navigate(`/cardDetail/${val.id}`);
              }} className='detail-btn'>View Details</Button>
            </CardActions>
          </Card>
      ))}
    </div>
  )
}

export default Cards