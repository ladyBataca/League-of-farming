import StageItem from "./StageItem";

interface Stage {
  icon: React.ReactNode;
  title: string;
  completed: boolean;
}

interface StageListProps {
  stages: Stage[];
}

const StageList: React.FC<StageListProps> = ({ stages }) => {
  return (
    <div className="w-full px-2 border-2 border-gray-300 rounded-lg">
      <div className="flex flex-col space-y-4 py-4">
        {stages.map((stage, index) => (
          <StageItem
            key={stage.title}
            icon={stage.icon}
            title={stage.title}
            completed={stage.completed}
            position={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </div>
  );
};

export default StageList; 