import { FaUser } from 'react-icons/fa';
import Badges from './Badges';

interface ResumeProps {
  title?: string;
  playerName?: string;
}

const Resume = ({ 
  title = "League of Farmers", 
  playerName = "Liwaisi Student" 
}: ResumeProps) => {
  return (
    <div className='bg-cyan-900 font-roboto'>
      <h2 className="font-roboto text-white text-4xl font-light items-center justify-center text-center">{title}</h2>
      <div className="text-white w-full flex flex-row items-start py-2">
        <div className="flex flex-col items-start pl-2.5 min-w-[60px]">
          <FaUser className="text-2xl mb-1" />
          <span className="text-xs font-medium">{playerName}</span>
        </div>
        
        <Badges />
      </div>
    </div>
  );
};

export default Resume; 