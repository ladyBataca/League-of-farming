import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaHeart, FaSun, FaSeedling, FaWater } from 'react-icons/fa';
import { getStages, updateStages, Stage } from '../utils/stagesManager';
import Resume from '../components/Resume';

function StageDetail() {
  const { stageId } = useParams<{ stageId: string }>();
  const navigate = useNavigate();
  const [stage, setStage] = useState<Stage | null>(null);
  const [magicWord, setMagicWord] = useState('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isStageCompleted, setIsStageCompleted] = useState(false);

  useEffect(() => {
    // Redirect to onboarding if no player name is set
    const playerName = localStorage.getItem('playerName');
    if (!playerName) {
      navigate('/onboarding');
      return;
    }

    // Load stage data
    if (stageId) {
      const stagesData = getStages();
      const stageIndex = parseInt(stageId, 10) - 1; // Convert to 0-based index
      const currentStage = parseInt(localStorage.getItem('currentStage') || '0', 10);
      
      // Check if stage exists and is accessible (completed or current)
      if (stageIndex >= 0 && stageIndex < stagesData.stages.length) {
        const stageIsCompleted = stagesData.stages[stageIndex].completed;
        const stageIsCurrent = stageIndex === currentStage;
        
        if (stageIsCompleted || stageIsCurrent) {
          setStage(stagesData.stages[stageIndex]);
          setIsStageCompleted(stagesData.stages[stageIndex].completed || false);
          
          // If stage is completed, set the correct values for review
          if (stagesData.stages[stageIndex].completed) {
            if (stagesData.stages[stageIndex].palabra_magica) {
              setMagicWord(stagesData.stages[stageIndex].palabra_magica);
            }
            if (stagesData.stages[stageIndex].quiz) {
              const correctOptionIndex = stagesData.stages[stageIndex].quiz.opciones.findIndex(option => option.es_correcta);
              if (correctOptionIndex !== -1) {
                setSelectedOption(correctOptionIndex);
              }
            }
          }
        } else {
          // Stage exists but is not accessible yet, redirect to home
          console.log('Unauthorized access to stage:', stageId);
          navigate('/');
        }
      } else {
        // Invalid stage ID, redirect to home
        console.log('Invalid stage ID:', stageId);
        navigate('/');
      }
    }
  }, [stageId, navigate]);

  // Get icon based on tipo_insignia
  const getIcon = (type: string | undefined) => {
    if (!type) return <FaHeart className="text-red-500" />;
    
    switch (type) {
      case 'amor':
        return <FaHeart className="text-red-500" />;
      case 'sol':
        return <FaSun className="text-yellow-500" />;
      case 'abono':
        return <FaSeedling className="text-green-500" />;
      case 'agua':
        return <FaWater className="text-blue-500" />;
      default:
        return <FaHeart className="text-red-500" />;
    }
  };

  const handleMagicWordSubmit = () => {
    if (!stage) return;
    
    if (magicWord.toLowerCase() === stage.palabra_magica.toLowerCase()) {
      const redirectToDiploma = markStageAsCompleted();
      setSuccess('¡Correcto! Has completado esta etapa.');
      
      if (!redirectToDiploma) {
        setTimeout(() => navigate('/'), 1500);
      }
    } else {
      setError('Palabra mágica incorrecta. Inténtalo de nuevo.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleQuizSubmit = () => {
    if (!stage || selectedOption === null) return;
    
    const isCorrect = stage.quiz.opciones[selectedOption].es_correcta;
    
    if (isCorrect) {
      const redirectToDiploma = markStageAsCompleted();
      setSuccess('¡Respuesta correcta! Has completado esta etapa.');
      
      if (!redirectToDiploma) {
        setTimeout(() => navigate('/'), 1500);
      }
    } else {
      setError('Respuesta incorrecta. Inténtalo de nuevo.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const markStageAsCompleted = () => {
    if (!stage || !stageId) return;
    
    const stagesData = getStages();
    const stageIndex = parseInt(stageId, 10) - 1;
    
    // Mark the current stage as completed
    stagesData.stages[stageIndex].completed = true;
    
    // Update the current stage in localStorage if this is the current stage
    const currentStage = parseInt(localStorage.getItem('currentStage') || '0', 10);
    if (currentStage === stageIndex) {
      // Move to the next stage if available
      if (stageIndex + 1 < stagesData.stages.length) {
        localStorage.setItem('currentStage', (stageIndex + 1).toString());
      }
    }
    
    // Save updated stages to localStorage
    updateStages(stagesData);
    
    // Check if all stages are completed
    const allStagesCompleted = stagesData.stages.every(stage => stage.completed);
    const isLastStage = stageIndex === stagesData.stages.length - 1;
    
    // If this is the last stage and all stages are completed, redirect to diploma
    if (isLastStage && allStagesCompleted) {
      setTimeout(() => navigate('/diploma'), 1500);
      return true; // Return true to indicate diploma redirect
    }
    
    return false; // No diploma redirect
  };

  const handleFinishStage = () => {
    const redirectToDiploma = markStageAsCompleted();
    
    if (!redirectToDiploma) {
      navigate('/');
    }
  };

  if (!stage) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-light text-center text-black mb-8">
            Cargando...
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Resume 
        title="League of Farmers" 
        playerName={localStorage.getItem('playerName') || 'Player'} 
      />
      <div className="flex-1 flex flex-col items-center p-4">
        <h1 className="text-3xl font-light text-center text-black dark:text-white mb-4">
          {stage.titulo}
        </h1>
        <div className="text-xl font-medium text-center text-black dark:text-white mb-4">
          <p className="text-black dark:text-white mb-4">{stage.descripcion}</p>
        </div>
        <div className="text-6xl mb-6">
          {getIcon(stage.tipo_insignia)}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-medium text-center text-black mb-4">
          Instrucciones para completar esta etapa
        </h2>
          <p className="text-black mb-4">{stage.instrucciones}</p>
          
          {stage.palabra_magica && (
            <div className="space-y-4 mt-6">
              <label htmlFor="magicWord" className="block text-sm font-medium text-gray-700">
                Ingrese la palabra mágica
              </label>
              <input
                type="text"
                id="magicWord"
                value={magicWord}
                onChange={(e) => !isStageCompleted && setMagicWord(e.target.value)}
                disabled={isStageCompleted}
                className={`w-full text-black px-4 py-2 border rounded-md ${
                  isStageCompleted 
                    ? 'bg-gray-100 border-gray-300 cursor-not-allowed' 
                    : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                }`}
                placeholder="Palabra mágica"
              />
              <button
                onClick={handleMagicWordSubmit}
                disabled={isStageCompleted}
                className={`w-full py-2 px-4 rounded-md transition-colors ${
                  isStageCompleted
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isStageCompleted ? 'Etapa completada' : 'Validar palabra mágica'}
              </button>
            </div>
          )}
          
          {!stage.palabra_magica && stage.quiz && (
            <div className="space-y-4 mt-6">
              <p className="font-medium text-black">{stage.quiz.pregunta}</p>
              <div className="space-y-2">
                {stage.quiz.opciones.map((option, index) => (
                  <div 
                    key={index}
                    className={`p-3 border rounded-md ${
                      selectedOption === index 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 dark:border-gray-600 ' + (isStageCompleted ? '' : 'hover:border-green-300')
                    } ${isStageCompleted ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
                    onClick={isStageCompleted ? undefined : () => setSelectedOption(index)}
                  >
                    <p className="text-black">{option.texto}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={handleQuizSubmit}
                disabled={selectedOption === null || isStageCompleted}
                className={`w-full py-2 px-4 rounded-md transition-colors ${
                  selectedOption === null || isStageCompleted
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isStageCompleted ? 'Etapa completada' : 'Validar respuesta'}
              </button>
            </div>
          )}
          
          {!stage.palabra_magica && !stage.quiz && (
            <button
              onClick={handleFinishStage}
              disabled={isStageCompleted}
              className={`w-full py-2 px-4 rounded-md transition-colors mt-4 ${
                isStageCompleted
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isStageCompleted ? 'Etapa completada' : 'Finalizar esta etapa'}
            </button>
          )}
          
          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md">
              {success}
            </div>
          )}
        </div>
        
        <button
          onClick={() => navigate('/')}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
        >
          Volver al inicio
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default StageDetail;
