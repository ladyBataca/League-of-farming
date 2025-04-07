import './Home.css'
import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import Resume from './components/Resume'
import StageList, { UIStage } from './components/StageList'
import { useNavigate } from 'react-router-dom'
import { getStages, mapIconType } from './utils/stagesManager';

function Home() {
  const [currentStage] = useState(() => {
    const savedStage = localStorage.getItem('currentStage')
    return savedStage ? parseInt(savedStage, 10) : 0
  })
  const [stages, setStages] = useState<UIStage[]>([])
  const [allStagesCompleted, setAllStagesCompleted] = useState(false)
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
    
    // Check if all stages are completed
    const completed = stagesData.stages.every(stage => stage.completed);
    setAllStagesCompleted(completed);
    
    setStages(formattedStages);
  }, [navigate])

  const handleViewDiploma = () => {
    navigate('/diploma');
  };

  return (
    <>
      <Resume 
        title="Liga De Huerteros" 
        playerName={localStorage.getItem('playerName') || 'Player'} 
      />
      <div className="h-full bg-gray-200">
        {stages.length > 0 && <StageList stages={stages} currentStage={currentStage} />}
        
        {/* Diploma button - only shown when all stages are completed */}
        {allStagesCompleted && (
          <div className="flex justify-center py-6">
            <button
              onClick={handleViewDiploma}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors flex items-center gap-2"
            >
              <span>🎓</span> Ver mi Diploma
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Home