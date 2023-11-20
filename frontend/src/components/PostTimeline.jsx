import "./PostTimeline.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Posts = ({ post }) => {
  return (
    <div className="post">
      <div className="post-container">
        <div className="user-container">
          <div className="user-info">
            <img className="profile-img" src={post.profileImage} alt="" />
            <div className="user-details">
              <span className="username">{post.username}</span>
              <span className="post-upload">{post.uploadTime}</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="post-description">{post.description}</p>
          <img className="posted-image" src={post.postedImage} alt="" />
        </div>
        <div className="info">
          <div className="action-icons">
            <FontAwesomeIcon className="icon" icon={faHeart} />
            <FontAwesomeIcon className="icon" icon={faCommentDots} />
          </div>
        </div>
      </div>
    </div>
  );
};

Posts.propTypes = {
  post: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    uploadTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    postedImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
