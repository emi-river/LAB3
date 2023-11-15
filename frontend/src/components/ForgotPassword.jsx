import "../index.css";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <>
      <div className="background-icon">
        <div className="flex-container">
          <div className="reset-password">
            <h2>Forgot your password?</h2>
            <p>
              Enter your email below to recive your password reset instructions
            </p>
            <input type="email" placeholder="Email" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
