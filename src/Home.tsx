import './Home.css'
import Resume from './components/Resume'
import StageList from './components/StageList'

// Define sample stages data
const stages = [
  // Categoría Amor (7 títulos)
  {
    id: 1,
    icon: "💚",
    title: "El amor a la Naturaleza",
    completed: true
  },
  {
    id: 2,
    icon: "💚",
    title: "Sembrando Amor",
    completed: true
  },
  {
    id: 3,
    icon: "💚",
    title: "Raíces de Cariño",
    completed: true
  },
  {
    id: 4,
    icon: "💚",
    title: "Flores de Ternura",
    completed: true
  },
  {
    id: 5,
    icon: "💚",
    title: "Amor que Germina",
    completed: true
  },
  {
    id: 6,
    icon: "💚",
    title: "Corazón Verde",
    completed: true
  },
  {
    id: 7,
    icon: "💚",
    title: "Latido de la Tierra",
    completed: false
  },

  // Categoría Sol (4 títulos)
  {
    id: 8,
    icon: "☀️",
    title: "El sol, el Dios de nuestros ancestros",
    completed: false
  },
  {
    id: 9,
    icon: "☀️",
    title: "Luz Vital del Campo",
    completed: false
  },
  {
    id: 10,
    icon: "☀️",
    title: "Rayos de Innovación",
    completed: false
  },
  {
    id: 11,
    icon: "☀️",
    title: "Brillo que Alimenta",
    completed: false
  },

  // Categoría Abono (2 títulos)
  {
    id: 12,
    icon: "🌱",
    title: "Elixir de la Fertilidad",
    completed: false
  },
  {
    id: 13,
    icon: "🌱",
    title: "Fertilizando el Futuro",
    completed: false
  },

  // Categoría Agua (6 títulos)
  {
    id: 14,
    icon: "💧",
    title: "Ríos de Vida",
    completed: false
  },
  {
    id: 15,
    icon: "💧",
    title: "La Danza del Agua",
    completed: false
  },
  {
    id: 16,
    icon: "💧",
    title: "Lluvia que Renueva",
    completed: false
  },
  {
    id: 17,
    icon: "💧",
    title: "Fuente de Inspiración",
    completed: false
  },
  {
    id: 18,
    icon: "💧",
    title: "Cascada de Innovación",
    completed: false
  },
  {
    id: 19,
    icon: "💧",
    title: "Oasis Verde",
    completed: false
  }
];


function Home() {
  return (
    <>
      <Resume 
        title="League of Farmers" 
        playerName="Alma" 
      />
      <div className="h-full">
        <StageList stages={stages} />
      </div>
    </>

  )
}

export default Home 