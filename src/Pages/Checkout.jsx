import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardMedia, Divider, TextField, Typography } from '@mui/material'
import { CartContext } from '../Context/CartContextProvider'
import Navbar2 from '../Components/NavbarFolder/Navbar2'

const Checkout = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully!')
    navigate('/')
  }

  return (
    <div>
      <Navbar2 />
      <div className="max-w-5xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">

        {/* Left - User Details Form */}
        <Card sx={{ p: 3, minWidth: 0 }}>
          <Typography variant="h5" gutterBottom>User Details</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Full Name" name="name" required fullWidth />
            <TextField label="Email" name="email" type="email" required fullWidth />
            <TextField label="Phone Number" name="phone" type="tel" required fullWidth />
            <TextField label="Address" name="address" required fullWidth multiline rows={2} />
            <TextField label="City" name="city" required fullWidth />
            <TextField label="Postal Code" name="postal" required fullWidth />
            <TextField label="Message (optional)" name="message" fullWidth multiline rows={2} />
            <Button variant="contained" type="submit">Place Order — $ {total.toFixed(2)}</Button>
          </Box>
        </Card>

        {/* Right - Order Summary */}
        <Card sx={{ p: 3, minWidth: 0 }}>
          <Typography variant="h5" gutterBottom>Order Summary</Typography>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 mb-3 min-w-0">
              <CardMedia component="img" sx={{ width: 50, height: 50, objectFit: 'contain', flexShrink: 0 }} image={item.image} />
              <div className="flex-1 min-w-0">
                <Typography variant="body2" noWrap sx={{ textOverflow: 'ellipsis' }}>{item.title}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.quantity} × $ {item.price}
                </Typography>
              </div>
              <Typography variant="body2">${ (item.price * item.quantity).toFixed(2) }</Typography>
            </div>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Total: $ {total.toFixed(2)}</Typography>
        </Card>
      </div>
    </div>
  )
}

export default Checkout