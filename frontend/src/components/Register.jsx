import "../index.css";
import "./Register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div>
        <div className="background-icon">
          <div className="flex-container">
            <div className="register">
              <h1>Register</h1>
              <input type="text" placeholder="Username" required />
              <input type="text" placeholder="Email" required />
              <input type="text" placeholder="Password" required />
              <input type="text" placeholder="Confirm password" required />
              <p>
                When you become a member, you agree to our{" "}
                <Link to="/terms">terms</Link> and{" "}
                <Link to="/condition">condition of use</Link>.
              </p>
              <p>
                Read our privacy policy <Link to="/policy">here</Link>
              </p>
              {/* - - ska vara en ny sida med info */}
              <div className="linkContainer">
                <Link className="button" to="/postwall">
                  Sign Up
                </Link>
                <Link className="button" to="/">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
