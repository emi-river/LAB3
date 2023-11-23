import './Settings.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Settings() {
  const [personDetails, setPersonDetails] = useState(null)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [updateMessage, setUpdateMessage] = useState(false)
  const [deleteMessage, setDeleteMessage] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/person/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setPersonDetails(result)
      })
  }, [id])

  function updateDetails() {
    fetch(`/person/${id}`, {
      body: JSON.stringify({
        username: userName,
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    })
      .then((response) => response)
      .then(() => {
        setUpdateMessage(true)
      })
  }

  function deleteDetails() {
    fetch(`/person/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response)
      .then(() => {
        setDeleteMessage(true)
      })
  }

  return (
    <div className="container">
      <h1 className="align-center">Settings</h1>
      {personDetails &&
        personDetails.map((personDetail, index) => {
          return (
            <div className="settings" key={index}>
              <input
                defaultValue={personDetail.username}
                onChange={(event) => setUserName(event.target.value)}
                placeholder="Username"
              />
              <input
                defaultValue={personDetail.email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                defaultValue={personDetail.password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
              />
              <div className="setting-buttons">
                <button onClick={updateDetails}>Update</button>
                <button onClick={deleteDetails}>Delete</button>
              </div>
              {updateMessage && <p>Your settings has been updated!</p>}
              {deleteMessage && <p>Your account has been deleted!</p>}
            </div>
          )
        })}
    </div>
  )
}

export default Settings
