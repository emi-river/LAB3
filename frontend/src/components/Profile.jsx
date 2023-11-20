import "../index.css";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="username">
        <h1>USERNAME</h1>
      </div>
      <div className="box">
        <div className="profileContainer">
          <img src="profile.png" alt="Profile picture" />
          <p>BIO</p>
          <Link to="/">
            <img src="Setting-icon.png" alt="Setting Icon" />
          </Link>
          <Link to="/">Edit Profile</Link>
        </div>
        <div className="postContainer">
          <img className="post" src="Rectangle.png" alt="Rectangle" />
          <img className="post" src="Rectangle.png" alt="Rectangle" />
          <img className="post" src="Rectangle.png" alt="Rectangle" />
          <img className="post" src="Rectangle.png" alt="Rectangle" />
          <img className="post" src="Rectangle.png" alt="Rectangle" />
          <img className="post" src="Rectangle.png" alt="Rectangle" />
        </div>
      </div>
    </>
  );
}

export default Profile;
