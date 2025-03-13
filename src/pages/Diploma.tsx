import { IoHomeSharp, IoDownloadOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { useRef, useEffect, useState } from 'react';
import { getStages } from '../utils/stagesManager';
const awardImageUrl = '/images/award.png';

const Diploma = () => {
  const navigate = useNavigate();
  const diplomaRef = useRef<HTMLDivElement>(null);
  const [allStagesCompleted, setAllStagesCompleted] = useState(false);
  const [playerName, setPlayerName] = useState('');

  // Check if all stages are completed
  useEffect(() => {
    // Get player name
    const name = localStorage.getItem('playerName');
    if (!name) {
      navigate('/onboarding');
      return;
    }
    setPlayerName(name);

    // Check if all stages are completed
    const stagesData = getStages();
    const completed = stagesData.stages.every(stage => stage.completed);
    
    if (!completed) {
      console.log('Not all stages are completed. Redirecting to home.');
      navigate('/');
      return;
    }
    
    setAllStagesCompleted(true);
  }, [navigate]);

  const downloadDiploma = async () => {
    if (diplomaRef.current) {
      const canvas = await html2canvas(diplomaRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'diploma-huertics.png';
      link.click();
    }
  };

  // Only render the diploma if all stages are completed
  if (!allStagesCompleted) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Cargando...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-2 flex justify-center">
      {/* Diploma Frame */}
      <div 
        ref={diplomaRef}
        className="relative w-full bg-white p-2 rounded-lg shadow-2xl border-8 border-green-800"
      >
        {/* Header */}
        <div className="text-center mb-1">
          <h1 className="text-4xl font-light text-green-800 tracking-wide">
            Liwaisi Tech y Rincón Verde
          </h1>
          <img 
            src={awardImageUrl}
            alt="Award" 
            className="w-40 h-40 mx-auto mb-1"
          />
        </div>

        {/* Certificate Content */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-700">
            Certifican que:
          </p>

          <h2 className="text-4xl font-light text-green-600 my-6 tracking-wide">
            {playerName}
          </h2>

          <p className="text-sm text-gray-700 tracking-wide px-4">
            Ha completado todas las etapas de sostenibilidad enseñadas en la edición #1 de
          </p>

          <h3 className="text-2xl font-light text-green-800 tracking-wide">
            Bootcamp Huertic's
          </h3>

          {/* QR Code Placeholder */}
          <div className="w-32 h-32 bg-gray-200 mx-auto my-4 flex items-center justify-center">
            <span className="text-gray-500">QR Code</span>
          </div>

          {/* Date */}
          <p className="text-sm text-gray-700 tracking-wide mt-8 mb-2">
            {new Date().toLocaleDateString('es-ES', { 
              day: 'numeric',
              month: 'long', 
              year: 'numeric' 
            }).replace(/^(\d+) de ([a-zñ]+)/, (_, day, month) => 
              `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}`
            )}
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-1 flex gap-2">
        <button
          onClick={() => navigate('/')}
          className="p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        >
          <IoHomeSharp className="text-lg" />
        </button>
        <button
          onClick={downloadDiploma}
          className="p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 transition-colors"
        >
          <IoDownloadOutline className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Diploma; 