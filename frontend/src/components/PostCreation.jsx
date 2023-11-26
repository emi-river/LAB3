import './PostCreation.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import ImageAddModal from './ImageAddModal.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const PostCreation = ({ posts, userData }) => {
  const [showModal, setShowModal] = useState(false)

  const handleCameraClick = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <p className="username">
        {userData && userData.length > 0 ? userData[0].username : 'USERNAME'}
      </p>
      <div className="post-creation">
        <div className="post-creation-container">
          <Link to="/profile">
            <img
              className="profile-img-post-creation"
              src={posts[0].profileImage}
              alt=""
            />
          </Link>
          <input
            className="post-input"
            type="text"
            placeholder="Anything you want to say?"
          />
          <div className="add-photo" onClick={handleCameraClick}>
            <FontAwesomeIcon className="icon-post-creation" icon={faCamera} />
          </div>
        </div>
      </div>
      {showModal && <ImageAddModal closeModal={closeModal} />}
    </>
  )
}

PostCreation.propTypes = {
  posts: PropTypes.shape({
    profileImage: PropTypes.string.isRequired
  }).isRequired,
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      profileImage: PropTypes.string.isRequired
    })
  ).isRequired
}

export default PostCreation
