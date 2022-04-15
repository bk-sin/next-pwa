import React from "react"

const Postcard = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} width={100} />
    </div>
  )
}

export default Postcard
