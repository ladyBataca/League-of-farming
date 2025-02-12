import './Home.css'
import Resume from './components/Resume'
import StageList from './components/StageList'

// Define sample stages data
const stages = [
  {
    id: 1,
    icon: "🥕",
    title: "Carrot Farm",
    completed: true
  },
  {
    id: 2,
    icon: "🥔",
    title: "Potato Fields",
    completed: false
  },
  {
    id: 3,
    icon: "🌽",
    title: "Corn Maze",
    completed: false
  },
  {
    id: 4,
    icon: "🌾",
    title: "Rice Paddies",
    completed: false
  }
]

function Home() {
  return (
    <>
      <Resume 
        title="League of Farmers" 
        playerName="Alma" 
      />
      <div className="h-full">
        <StageList stages={stages} />
      </div>
    </>

  )
}

export default Home 