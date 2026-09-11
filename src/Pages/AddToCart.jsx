import { useContext } from 'react'
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/NavbarFolder/Navbar'
import { CartContext } from '../Context/CartContextProvider'

const AddToCart = () => {
  const { cartItems, increase, decrease, removeFromCart } = useContext(CartContext)
  const navigate = useNavigate()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <Typography variant="h4" gutterBottom>Your Cart</Typography>
        {cartItems.length === 0 ? (
          <Box className="text-center mt-10">
            <Typography variant="h6" gutterBottom>Your cart is empty</Typography>
            <Button variant="contained" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </Box>
        ) : (
          cartItems.map((item) => (
            <Card key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
              <CardMedia
                component="img"
                sx={{ width: { xs: 60, md: 90 }, height: { xs: 60, md: 90 }, objectFit: 'contain', mr: 2 }}
                image={item.image}
              />
              <CardContent sx={{ flex: 1 }} className="!py-2">
                <Typography variant="subtitle1" className="line-clamp-2">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  $ {item.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                <IconButton size="small" onClick={() => decrease(item.id)}>
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ minWidth: 30, textAlign: 'center' }}>{item.quantity}</Typography>
                <IconButton size="small" onClick={() => increase(item.id)}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="subtitle1" sx={{ minWidth: 90, textAlign: 'right' }}>
                $ {(item.price * item.quantity).toFixed(2)}
              </Typography>
              <IconButton color="error" sx={{ ml: 1 }} onClick={() => removeFromCart(item.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Card>
          ))
        )}
        {cartItems.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Button variant="outlined" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
            <Typography variant="h5">
              Total: $ {total.toFixed(2)}
            </Typography>
          </Box>
        )}
      </div>
    </div>
  )
}

export default AddToCart