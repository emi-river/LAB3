import './PostTimeline.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Posts = ({ post }) => {
  return (
    <div className="post-timeline">
      <div className="post-container">
        <div className="user-container">
          <div className="user-info-timeline">
            <Link to={`/profile/${post.userId}`}>
              <img
                className="profile-img-timeline"
                src={post.profileImage}
                alt=""
              />
            </Link>
            <div className="user-details-timeline">
              <span className="username-timeline">{post.username}</span>
              <span className="post-upload">{post.uploadTime}</span>
            </div>
          </div>
        </div>
        <div className="content-timeline">
          <p className="post-description-timeline">{post.description}</p>
          <img className="posted-image" src={post.postedImage} alt="" />
        </div>
        <div className="action-container">
          <div className="action-icons">
            <FontAwesomeIcon className="icon-timeline" icon={faHeart} />
            <FontAwesomeIcon className="icon-timeline" icon={faCommentDots} />
          </div>
        </div>
      </div>
    </div>
  )
}

Posts.propTypes = {
  post: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    uploadTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    postedImage: PropTypes.string.isRequired
  }).isRequired
}

export default Posts
