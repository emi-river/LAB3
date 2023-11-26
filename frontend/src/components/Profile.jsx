import '../index.css'
import './Profile.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const [userData, setUserData] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/person/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result)
      })
  }, [id])

  return (
    <>
      <div className="username">
        <h1>{userData ? userData.username : 'USERNAME'}</h1>
      </div>
      <div className="profileContainer">
        <img className="profilePic" src="profile.png" alt="Profile picture" />
        <p>BIO</p>
        <Link to={`/settings/${id}`}>
          <img className="setting" src="Setting-icon.png" alt="Setting Icon" />
        </Link>
      </div>
      <div className="postContainer">
        <img className="post" src="Rectangle.png" alt="Rectangle" />
        <img className="post" src="Rectangle.png" alt="Rectangle" />
        <img className="post" src="Rectangle.png" alt="Rectangle" />
        <img className="post" src="Rectangle.png" alt="Rectangle" />
        <img className="post" src="Rectangle.png" alt="Rectangle" />
        <img className="post" src="Rectangle.png" alt="Rectangle" />
      </div>
    </>
  )
}

export default Profile
