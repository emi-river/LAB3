import '../index.css'
import Post from './PostTimeline'
import PostCreation from './PostCreation'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import profileImage1 from '../assets/profileImage1.jpg'
import profileImage2 from '../assets/profileImage2.jpg'
import profileImage3 from '../assets/profileImage3.jpg'
import postImage1 from '../assets/postImage1.jpg'
import postImage2 from '../assets/postImage2.jpg'
import postImage3 from '../assets/postImage3.jpg'

const PostsWall = () => {
  const [userData, setUserData] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/api/person/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result)
      })
  }, [id])
  const posts = [
    {
      postId: 1,
      userId: 1,
      username: 'hejsan',
      description: 'Paraply',
      profileImage: profileImage1,
      postedImage: postImage1,
      uploadTime: '2 min ago'
    },
    {
      postId: 2,
      userId: 2,
      username: 'svejsan',
      description: 'Lampa',
      profileImage: profileImage2,
      postedImage: postImage2,
      uploadTime: '6 min ago'
    },
    {
      postId: 3,
      userId: 3,
      username: 'example',
      description: 'Zen zone',
      profileImage: profileImage3,
      postedImage: postImage3,
      uploadTime: '10 min ago'
    }
  ]

  return (
    <>
      <Navbar posts={posts} />
      <div className="posts">
        <PostCreation posts={posts} userData={userData} />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  )
}

export default PostsWall
