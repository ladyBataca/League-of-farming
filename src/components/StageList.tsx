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
    <div className="w-full px-2">
      <div className="flex flex-col space-y-4 py-4 pb-20">
        {stages.map((stage, index) => (
          <StageItem
            key={stage.title}
            icon={stage.icon}
            title={stage.title}
            completed={stage.completed}
            position={index % 2 === 0 ? 'right' : 'left'}
            isLast={index === stages.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default StageList; 