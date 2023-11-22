import '../index.css'
import './Register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Register() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const values = {
      user,
      email,
      password
    }
    fetch('/api/person', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(() => {
        setUser('')
        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div>
        <div className="background-icon">
          <div className="flex-container">
            <div className="register">
              <h1>Register</h1>
              <form onSubmit={addPerson}>
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  placeholder="Username"
                  required
                />
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  required
                />
                <input
                  className="input"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  required
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm password"
                  required
                />
                <p className="GDPR">
                  When you become a member, you agree to our{' '}
                  <Link to="/terms">terms</Link> and{' '}
                  <Link to="/condition">condition of use</Link>.
                </p>
                <p className="GDPR">
                  Read our privacy policy <Link to="/policy">here</Link>
                </p>
              </form>
              <div className="linkContainer">
                <Link className="button" onClick={addPerson} to="/postwall">
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
  )
}

export default Register
