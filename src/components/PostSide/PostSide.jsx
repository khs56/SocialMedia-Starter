import React from 'react'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
import './PostSide.css'

export const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  )
}
