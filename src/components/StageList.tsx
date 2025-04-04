import StageItem from "./StageItem";

// Using the UI-specific stage interface
export interface UIStage {
  id: number;
  iconType: string;
  title: string;
  completed: boolean;
}

interface StageListProps {
  stages: UIStage[];
  currentStage: number;
}

const StageList: React.FC<StageListProps> = ({ stages, currentStage }) => {
  console.log(`Current stage: ${currentStage} `);
  return (
    <div className="w-full px-2">
      <div className="flex flex-col space-y-4 py-4 pb-2">
        {stages.map((stage, index) => (
          <StageItem
            key={stage.title}
            iconType={stage.iconType}
            title={stage.title}
            completed={stage.completed}
            position={index % 2 === 0 ? 'right' : 'left'}
            currentStage={currentStage}
            index={index}
            isLast={index === stages.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default StageList; 