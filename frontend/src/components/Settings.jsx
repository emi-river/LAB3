import './Settings.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Settings() {
  const [personDetails, setPersonDetails] = useState(null)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [updateMessage, setUpdateMessage] = useState(false)
  const [deleteMessage, setDeleteMessage] = useState(false)
  const { id } = useParams()
  const back = useNavigate()

  useEffect(() => {
    fetch(`/api/person/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setPersonDetails(result)
      })
  }, [id])

  function updateDetails() {
    fetch(`/api/person/${id}`, {
      body: JSON.stringify({
        username: userName,
        email: email,
        password: password,
        bio: bio
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    }).then(() => {
      setUpdateMessage(true)
    })
  }

  function deleteDetails() {
    fetch(`/api/person/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setDeleteMessage(true)
    })
  }

  const goBack = () => {
    back(-1)
  }

  return (
    <div className="container">
      <h1 className="align-center">Settings</h1>
      {personDetails &&
        personDetails.map((personDetail, index) => {
          return (
            <div className="settings" key={index}>
              <label>
                Username
                <input
                  defaultValue={personDetail.username}
                  onChange={(event) => setUserName(event.target.value)}
                  placeholder="Username"
                />
              </label>
              <label>
                Email
                <input
                  defaultValue={personDetail.email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </label>
              <label>
                Password
                <input
                  defaultValue={personDetail.password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </label>
              <label>
                Bio
                <input
                  defaultValue={personDetail.bio}
                  onChange={(event) => setBio(event.target.value)}
                  placeholder="Bio text"
                />
              </label>
              <div className="setting-buttons">
                <button onClick={updateDetails}>Update</button>
                <button onClick={deleteDetails}>Delete</button>
              </div>
              <button onClick={goBack}>Go back!</button>
              {updateMessage && <p>Your settings has been updated!</p>}
              {deleteMessage && <p>Your account has been deleted!</p>}
            </div>
          )
        })}
    </div>
  )
}

export default Settings
