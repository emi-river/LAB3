import '../index.css'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'

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
            <div className="link-container">
              <Link className="button">Send</Link>
              <Link className="button" to="/">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
