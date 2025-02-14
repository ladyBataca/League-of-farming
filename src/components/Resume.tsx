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
    <div className='bg-slate-900'>
      <h1 className="text-white text-4xl font-extralight items-center justify-center text-center tracking-wide">{title}</h1>
      <div className="text-white w-full flex flex-row items-start py-2">
        <div className="flex flex-col items-start pl-2.5 min-w-[60px]">
          <div className="rounded-full bg-blue-500 p-2 mb-1">
            <FaUser className="h-8 w-8 text-2xl" />
          </div>
          <span className="text-xs w-full font-medium text-center block">
            {playerName}
          </span>
        </div>
        
        <Badges />
      </div>
    </div>
  );
};

export default Resume; 