import React from 'react'

const ProfileCard = props => {
  return (
    <div>
      <h1>The Title is {props.title}</h1>
      <h2>The handle is {props.handle}</h2>
    </div>
  )
}

export default ProfileCard
