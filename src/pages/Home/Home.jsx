import React from 'react'
import { PostSide } from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/Profile/ProfileSide'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <div className="profileSide">Profile</div>
      <div className="postSide">Posts</div>
      <div className="RightSide">Right Side</div>
    </div>
  )
}

export default Home