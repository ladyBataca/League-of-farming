import './Home.css'
import Resume from './components/Resume'

function Home() {
  return (
    <div className="min-h-screen bg-red-100">
      <Resume 
        title="League of Farmers" 
        playerName="Alma" 
      />
    </div>
  )
}

export default Home 