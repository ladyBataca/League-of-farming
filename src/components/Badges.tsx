import { FaHeart, FaSun, FaSeedling, FaWater } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getBadgeCounts, BadgeCounts } from '../utils/stagesManager';

interface BadgeItem {
  label: string;
  icon: React.ReactNode;
  total: number;
  filled: number;
  color: string;
}

interface BadgesProps {
  items?: BadgeItem[];
}

const Badges = ({ items }: BadgesProps) => {
  const [badgeItems, setBadgeItems] = useState<BadgeItem[]>(items || defaultBadges);

  useEffect(() => {
    // Get badge counts from local storage
    const badgeCounts = getBadgeCounts();
    
    // Update badge items with counts from local storage
    const updatedBadges = [
      {
        label: "Amor",
        icon: <FaHeart />,
        total: badgeCounts.amor.total,
        filled: badgeCounts.amor.completed,
        color: "text-red-500"
      },
      {
        label: "Sol",
        icon: <FaSun />,
        total: badgeCounts.sol.total,
        filled: badgeCounts.sol.completed,
        color: "text-yellow-500"
      },
      {
        label: "Abono",
        icon: <FaSeedling />,
        total: badgeCounts.abono.total,
        filled: badgeCounts.abono.completed,
        color: "text-green-500"
      },
      {
        label: "Agua",
        icon: <FaWater />,
        total: badgeCounts.agua.total,
        filled: badgeCounts.agua.completed,
        color: "text-blue-400"
      }
    ];
    
    setBadgeItems(updatedBadges);
  }, [items]);
  return (
    <ul className="list-none p-0 w-full pt-1.5 pl-4">
      {badgeItems.map((item, idx) => (
        <li key={idx} className="flex items-center font-light">
          <span className="min-w-[80px] text-xl">{item.label}:</span>
          <div className="flex gap-1.5">
            {[...Array(item.total)].map((_, index) => (
              <span
                key={index}
                className={index < item.filled ? item.color : "text-gray-500"}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

const defaultBadges: BadgeItem[] = [
  {
    label: "Amor",
    icon: <FaHeart />,
    total: 7,
    filled: 4,
    color: "text-red-500"
  },
  {
    label: "Sol",
    icon: <FaSun />,
    total: 4,
    filled: 2,
    color: "text-yellow-500"
  },
  {
    label: "Abono",
    icon: <FaSeedling />,
    total: 2,
    filled: 1,
    color: "text-green-500"
  },
  {
    label: "Agua",
    icon: <FaWater />,
    total: 6,
    filled: 3,
    color: "text-blue-400"
  }
];

export default Badges; 