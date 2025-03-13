import './Home.css'
import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import Resume from './components/Resume'
import StageList, { UIStage } from './components/StageList'
import { useNavigate } from 'react-router-dom'
import { getStages, mapIconType } from './utils/stagesManager';

function Home() {
  const [currentStage, setCurrentStage] = useState(() => {
    const savedStage = localStorage.getItem('currentStage')
    return savedStage ? parseInt(savedStage, 10) : 0
  })
  const [stages, setStages] = useState<UIStage[]>([])
  const navigate = useNavigate()

  // Save current stage to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentStage', currentStage.toString())
  }, [currentStage])

  // Load stages data and redirect to onboarding if no player name is set
  useEffect(() => {
    const playerName = localStorage.getItem('playerName')
    if (!playerName) {
      navigate('/onboarding')
    }
    
    // Load stages from local storage or default JSON
    const stagesData = getStages();
    
    // Transform stages to match the UI component format
    const formattedStages = stagesData.stages.map((stage, index) => ({
      id: stage.id || index + 1,
      iconType: mapIconType(stage.tipo_insignia),
      title: stage.titulo,
      completed: stage.completed || false
    }));
    
    setStages(formattedStages);
  }, [navigate])

  return (
    <>
      <Resume 
        title="League of Farmers" 
        playerName={localStorage.getItem('playerName') || 'Player'} 
      />
      <div className="h-full bg-gray-200">
        {stages.length > 0 && <StageList stages={stages} currentStage={currentStage} />}
      </div>
      <Footer />
    </>
  )
}

export default Home