import { FaHeart, FaSun, FaLeaf, FaTint } from 'react-icons/fa';

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

const Badges = ({ items = defaultBadges }: BadgesProps) => {
  return (
    <ul className="list-none p-0 w-full pt-1.5 pl-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center font-light">
          <span className="min-w-[80px] text-xl">{item.label}:</span>
          <div className="flex gap-1.5">
            {[...Array(item.total)].map((_, index) => (
              <span
                key={index}
                className={index < item.filled ? item.color : "text-white"}
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
    icon: <FaLeaf />,
    total: 2,
    filled: 1,
    color: "text-green-500"
  },
  {
    label: "Agua",
    icon: <FaTint />,
    total: 6,
    filled: 3,
    color: "text-blue-400"
  }
];

export default Badges; 