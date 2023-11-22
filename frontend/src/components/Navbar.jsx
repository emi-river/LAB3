import '../index.css'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="left-side">
          <Link to="#">
            <h1>Social Tea</h1>
          </Link>
        </div>
        <div className="right-side">
          <Link to="/settings/:id">
            <h3>Settings</h3>
          </Link>
          <Link to="/">
            <h3>Sign out</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
