import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ marginRight: '12px' }}>
        Home
      </Link>
      <Link to="/menu" style={{ marginRight: '12px' }}>
        Menu
      </Link>
      <Link to="/cart">
        Cart
      </Link>
    </nav>
  )
}

export default Navbar