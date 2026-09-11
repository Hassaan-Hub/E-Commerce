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
    <div className="min-w-0">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-6 px-4 min-w-0">
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
            <Card key={item.id} sx={{ mb: 2, p: 1 }}>
              <div className="flex items-center gap-3">
                <CardMedia
                  component="img"
                  sx={{ width: { xs: 56, md: 90 }, height: { xs: 56, md: 90 }, objectFit: 'contain', borderRadius: 1 }}
                  image={item.image}
                />
                <CardContent sx={{ flex: 1, minWidth: 0, p: 0 }}>
                  <Typography variant="subtitle1" noWrap sx={{ textOverflow: 'ellipsis' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    $ {item.price}
                  </Typography>
                </CardContent>
              </div>
              <div className="flex items-center justify-between mt-2">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton size="small" onClick={() => decrease(item.id)}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography sx={{ minWidth: 28, textAlign: 'center' }}>{item.quantity}</Typography>
                  <IconButton size="small" onClick={() => increase(item.id)}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="subtitle1">
                  $ {(item.price * item.quantity).toFixed(2)}
                </Typography>
                <IconButton color="error" size="small" onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            </Card>
          ))
        )}
        {cartItems.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, flexWrap: 'wrap', gap: 2 }}>
            <Button variant="outlined" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="h5">
                Total: $ {total.toFixed(2)}
              </Typography>
              <Button variant="contained" onClick={() => navigate('/checkout')}>
                Check Out
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </div>
  )
}

export default AddToCart