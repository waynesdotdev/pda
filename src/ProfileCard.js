const ProfileCard = ({ title, handle, image }) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt={title} />
      </div>
      <h1>The Title is {title}</h1>
      <h2>The handle is {handle}</h2>
    </div>
  )
}

export default ProfileCard
