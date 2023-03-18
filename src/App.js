import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import alexa from './images/alexa.png'
import cortana from './images/cortana.png'
import siri from './images/siri.png'

function App() {
  return (
    <div>
      <header
        style={{
          backgroundColor: 'violet',
          padding: '20px',
          color: 'white',
          fontSize: '2rem',
        }}
      >
        <h1>Personal Digital Assistants</h1>
      </header>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title='Alexa' handle='@alexa99' image={alexa} />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Cortana'
                handle='@cortana32'
                image={cortana}
              />
            </div>
            <div className='column is-4'>
              <ProfileCard title='Siri' handle='@siri01' image={siri} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
