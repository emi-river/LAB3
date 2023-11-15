import "../index.css";
import "../App.css";
import "./Register.css";
function Register() {
  return (
    <>
      <div>
        <div className="background-icon">
          <div className="flex-container">
            <div className="register">
              <h1>Register</h1>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Confirm password" />
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
