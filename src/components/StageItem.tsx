import { FaLock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

interface StageItemProps {
  icon: React.ReactNode;
  title: string;
  completed: boolean;
  position: 'left' | 'right';
  isLast?: boolean;
}

const StageItem: React.FC<StageItemProps> = ({ icon, title, completed, position, isLast = false }) => {
  return (
    <div className={`flex items-center w-full ${position === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Icon Circle with Vertical Line */}
      <div className={`flex-shrink-0 relative ${position === 'right' ? 'ml-4' : 'mr-4'}`}>
        <div className={`flex h-12 w-12 rounded-full bg-white items-center justify-center
          ${completed ? 'ring-4 ring-green-600' : 'ring-4 ring-red-600'}`}>
          {icon}
        </div>
        {/* Vertical connecting line */}
        {!isLast && (
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-[52px] w-0.5 h-[30px] bg-gray-300 ${completed ? 'bg-green-600' : 'bg-red-600'} ${isLast ? 'hidden' : ''}`} />
        )}
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