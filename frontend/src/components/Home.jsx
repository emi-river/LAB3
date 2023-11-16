import "../index.css";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="background-icon">
        <div className="flex-container">
          <div className="login">
            <h1 className="motto">This is Social Tea</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <Link className="align-right" to="/forgotpassword">
              Forgot password?
            </Link>
            <div className="flex-links">
              <Link className="button" to="/">
                Sign in
              </Link>
              <Link className="button" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
