import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🦄 Unicorn Cafe
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/menu">
            Menu
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar