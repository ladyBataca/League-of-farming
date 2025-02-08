import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';
import { FaTint } from 'react-icons/fa';

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
      <div className=" text-white w-full flex flex-row items-start py-2">
        <div className="flex flex-col items-start pl-2.5 min-w-[60px]">
          <FaUser className="text-2xl mb-1" />
          <span className="text-xs font-medium">{playerName}</span>
        </div>
        
        <ul className="list-none p-0 w-full pt-1.5 pl-2">
          <li className="flex items-center mb-4 gap-3">
            <span className="min-w-[80px] text-xl">Amor:</span>
            <div className="flex gap-1.5">
              {[...Array(6)].map((_, index) => (
                <span key={index} className={index < 4 ? "text-red-500" : "text-white"}>
                  <FaHeart />
                </span>
              ))}
            </div>
          </li>

          <li className="flex items-center mb-4 gap-3">
            <span className="min-w-[80px] text-xl">Sol:</span>
            <div className="flex gap-1.5">
              {[...Array(4)].map((_, index) => (
                <span key={index} className={index < 2 ? "text-yellow-500" : "text-white"}>
                  <FaSun />
                </span>
              ))}
            </div>
          </li>

          <li className="flex items-center mb-4 gap-3">
            <span className="min-w-[80px] text-xl">Abono:</span>
            <div className="flex gap-1.5">
              {[...Array(2)].map((_, index) => (
                <span key={index} className={index < 1 ? "text-green-500" : "text-white"}>
                  <FaLeaf />
                </span>
              ))}
            </div>
          </li>

          <li className="flex items-center mb-4 gap-3">
            <span className="min-w-[80px] text-xl">Agua:</span>
            <div className="flex gap-1.5">
              {[...Array(6)].map((_, index) => (
                <span key={index} className={index < 3 ? "text-blue-400" : "text-white"}>
                  <FaTint />
                </span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume; 