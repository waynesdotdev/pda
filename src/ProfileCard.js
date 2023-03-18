import React from 'react'

const ProfileCard = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.handle}</h2>
    </div>
  )
}

export default ProfileCard
