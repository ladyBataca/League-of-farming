import { FaLock, FaCheck, FaHeart, FaSun, FaSeedling, FaWater, FaPencilAlt } from "react-icons/fa";

interface StageItemProps {
  iconType: string;
  title: string;
  completed: boolean;
  position: 'left' | 'right';
  isLast?: boolean;
  currentStage: number;
  index: number;
}

const StageItem: React.FC<StageItemProps> = ({ iconType, title, completed, position, isLast = false, currentStage, index}) => {
  const shouldBeEnabled = completed || currentStage == index;
  const getIcon = (type: string) => {    
    switch (type) {
      case 'love':
        return <FaHeart className={`${shouldBeEnabled ? 'text-red-500' : 'text-gray-500'}`} />;
      case 'sun':
        return <FaSun className={`${shouldBeEnabled ? 'text-yellow-500' : 'text-gray-500'}`} />;
      case 'seed':
        return <FaSeedling className={`${shouldBeEnabled ? 'text-green-500' : 'text-gray-500'}`} />;
      case 'water':
        return <FaWater className={`${shouldBeEnabled ? 'text-blue-500' : 'text-gray-500'}`} />;
      default:
        return <FaHeart className={`text-red-500 ${shouldBeEnabled ? 'text-green-500' : 'text-gray-500'}`} />;
    }
  };
  return (
    <div className={`flex items-center w-full ${position === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Icon Circle with Vertical Line */}
      <div className={`flex-shrink-0 relative ${position === 'right' ? 'ml-4' : 'mr-4'}`}>
        <div className={`flex h-12 w-12 rounded-full bg-white items-center justify-center
          ${shouldBeEnabled ? 'ring-4 ring-green-600' : 'ring-4 ring-gray-700 bg-gray-600'}`}>
          {getIcon(iconType)}
        </div>
        {/* Vertical connecting line */}
        {!isLast && (
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-[52px] w-0.5 h-[26px] bg-gray-300 ${shouldBeEnabled ? 'bg-green-600' : 'bg-gray-600'} ${isLast ? 'hidden' : ''}`} />
        )}
      </div>
      
      {/* Content Card */}
      <div className="flex-grow">
        <div className={`rounded-lg shadow-md p-4 w-full ${shouldBeEnabled ? 'bg-white' : 'bg-gray-600'}`}>
          <h3 className={`text-lg font-light ${shouldBeEnabled ? 'text-black' : 'text-white'}`}>{title}</h3>
          <p className={`flex items-center font-light text-xs ${shouldBeEnabled ? 'text-black' : 'text-white'}`}>
            {shouldBeEnabled ? completed ?
              <FaCheck className="text-green-600 pr-1" size={14} /> : 
              <FaPencilAlt className="text-green-600 pr-1" size={14} /> : 
              <FaLock className="text-gray-800 pr-1" size={14} />
            }
            {shouldBeEnabled ? completed ? 'Ya pasaste esta etapa!' : 'En curso' : 'Bloqueado'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StageItem; 