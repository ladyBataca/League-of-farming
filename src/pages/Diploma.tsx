import { IoHomeSharp, IoDownloadOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
const awardImageUrl = '/images/award.png';

const Diploma = () => {
  const navigate = useNavigate();
  const diplomaRef = useRef<HTMLDivElement>(null);

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
            Alma
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