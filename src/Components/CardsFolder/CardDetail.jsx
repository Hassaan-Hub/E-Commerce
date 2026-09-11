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
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 min-w-0">
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, overflow: 'hidden' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
            <CardContent sx={{ flex: '1 0 auto', minWidth: 0 }}>
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
            sx={{ width: { xs: '100%', sm: 151 }, height: { xs: 220, sm: 'auto' }, objectFit: 'contain' }}
            image={course.image}
            alt={course.title}
          />
        </Card>
      </div>
    </>
  )
}

export default CardDetail