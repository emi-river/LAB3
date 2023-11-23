import '../index.css'
import './Navbar.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar({ post }) {
  const userId = post?.userId || ''

  return (
    <>
      <div className="navbar-container">
        <div className="left-side">
          <Link to="#">
            <h1>Social Tea</h1>
          </Link>
        </div>
        <div className="right-side">
          <Link to={`/profile/${userId}`}>
            <h3>Profile</h3>
          </Link>
          <Link to="/">
            <h3>Sign out</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

Navbar.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired
  }).isRequired
}

export default Navbar
