import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cardsContext } from '../../Context/CardsContextProvider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import NotFound from '../../Pages/NotFound';
import Navbar2 from '../NavbarFolder/Navbar2';

const CardDetail = ({ children }) => {

  const { id } = useParams()

  const { cardsData } = useContext(cardsContext);

  const dataId = cardsData?.data || [];
  console.log(dataId);

  const navigate = useNavigate();

  const course = dataId.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return (
      <section className="not-found-inline">
        <NotFound />
      </section>
    );
  }
  const theme = useTheme();

  return (
    <>
    <Navbar2 />
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {course.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'text.secondary' }}
            >
              {course.price}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={course.image}
          alt="Live from space album cover"
        />
      </Card>
    </>
  )
}

export default CardDetail