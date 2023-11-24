import './Condition.css'
import { Link } from 'react-router-dom'

function Condition() {
  return (
    <>
      <div className="container">
        <h1>Condition of Use for Social Tea</h1>
        <p>
          <span>Last updated</span>: November 23, 2023
        </p>
        <p>
          Welcome to a community, where you can share your interests and express
          your feelings. We strive to offer a positive and safe experience for
          you. Having that said we want to clarify our expectations and
          limitations. Please review our, Conditions of Use, for a full
          understanding.
        </p>
        <h3>Registration</h3>
        <p>
          To take advantage of the platforms features, you must register and
          create a account by entering a username, a valid email and a safe
          password.
        </p>
        <h3>User behaviour</h3>
        <p>
          Respect other users. Avoid posting content that may be perceived as
          offensive or inappropriate. Here at Social Tea, we promote a positive
          and inclusive environment.
        </p>
        <h3>Personal Information</h3>
        <p>
          We protect your privacy. All personal information is processed
          according to our <Link to="/policy">privacy policy</Link>
        </p>
        <h3>Shared Content</h3>
        <p>
          You retain ownership of the content you share. Avoid abusing
          trademarks and respect the right of others.
        </p>
        <h3>Safety</h3>
        <p>
          Protect you account by keeping your login credentials secure. Report
          any security incidents immediately.
        </p>
        <h3>Platform Rights</h3>
        <p>
          We reserve the right to remove content that violates these terms and
          to terminate or suspend accounts for violations.
        </p>
        <h3>Updates to Conditions of Use</h3>
        <p>
          The Conditions of Use are subject to change over time. The ongoing use
          of the platform following any modifications is regarded as acceptance.
        </p>
      </div>
    </>
  )
}

export default Condition
