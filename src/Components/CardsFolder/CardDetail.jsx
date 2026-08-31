import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cardsContext } from '../../Context/CardsContextProvider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import NotFound from '../../Pages/NotFound';

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
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={course.image}
        alt="Live from space album cover"
      />
    </Card>

  )
}

export default CardDetail