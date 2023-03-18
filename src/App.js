import ProfileCard from './ProfileCard'
import alexa from './images/alexa.png'
import cortana from './images/cortana.png'
import siri from './images/siri.png'

function App() {
  return (
    <div>
      <header style={{ backgroundColor: 'violet', padding: '20px' }}>
        <h1>Personal Digital Assistants</h1>
      </header>
      <ProfileCard title='Alexa' handle='@alexa99' image={alexa} />
      <ProfileCard title='Cortana' handle='@cortana32' image={cortana} />
      <ProfileCard title='Siri' handle='@siri01' image={siri} />
    </div>
  )
}

export default App
