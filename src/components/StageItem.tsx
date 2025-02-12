import { FaLock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

interface StageItemProps {
  icon: React.ReactNode;
  title: string;
  completed: boolean;
  position: 'left' | 'right';
}

const StageItem: React.FC<StageItemProps> = ({ icon, title, completed, position }) => {
  return (
    <div className={`flex items-center w-full ${position === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Icon Circle */}
      <div className={`flex-shrink-0 ${position === 'right' ? 'ml-4' : 'mr-4'}`}>
        <div className={`flex h-12 w-12 rounded-full bg-white items-center justify-center
          ${completed ? 'ring-4 ring-gray-300' : 'ring-4 ring-green-500'}`}>
          {icon}
        </div>
      </div>
      
      {/* Content Card */}
      <div className="flex-grow">
        <div className={`bg-white rounded-lg shadow-md p-4 w-full`}>
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <p className="flex items-center gap-2 text-black">
            {completed ? 
              <FaCheck className="text-green-600" size={16} /> : 
              <FaLock className="text-red-600" size={16} />
            }
            {completed ? 'Completed' : 'Locked'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StageItem; 