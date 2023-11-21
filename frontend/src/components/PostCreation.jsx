import "./PostCreation.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const PostCreation = ({ posts }) => {
  return (
    <div className="post-creation">
      <div className="post-creation-container">
        <img
          className="profile-img-post-creation"
          src={posts[0].profileImage}
          alt=""
        />
        <input
          className="post-input"
          type="text"
          placeholder="Anything you want to say?"
        />
        <div className="add-photo">
          <FontAwesomeIcon className="icon-post-creation" icon={faCamera} />
        </div>
      </div>
    </div>
  );
};

PostCreation.propTypes = {
  posts: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCreation;
