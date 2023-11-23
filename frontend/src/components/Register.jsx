import '../index.css'
import './Register.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [userId, setUserId] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const nav = useNavigate()

  useEffect(() => {
    fetch('/api/person')
      .then((response) => response.json())
      .then((result) => {
        setUserId(result)
        console.log(result)
      })
  }, [])
  const addPerson = (e) => {
    e.preventDefault()
    const values = {
      user,
      email,
      password
    }
    if (password !== confirmPassword) {
      setPasswordsMatch(false)
      return
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
        setConfirmPassword('')
        setPasswordsMatch(true)
        nav(`/postwall/${userId}`)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
    setPasswordsMatch(true)
  }

  return (
    <>
      <div>
        <div className="background-icon">
          <div className="flex-container">
            <div className="register">
              <h1>Register</h1>
              <form onSubmit={addPerson} method="POST">
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
                {!passwordsMatch && (
                  <p className="error-text">Passwords do not match.</p>
                )}
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm password"
                  onChange={handleConfirmPasswordChange}
                  value={confirmPassword}
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
                <Link className="button" onClick={addPerson}>
                  Create
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
