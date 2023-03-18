const ProfileCard = ({ title, handle, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>The Title is {title}</h1>
      <h2>The handle is {handle}</h2>
    </div>
  )
}

export default ProfileCard
