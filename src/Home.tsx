import './Home.css'
import { useState } from 'react'
import Footer from './components/Footer';
import Resume from './components/Resume'
import StageList from './components/StageList'

// Define sample stages data
const stages = [
  // Categoría Amor (7 títulos)
  {
    id: 1,
    iconType: "sun",
    title: "El amor a la Naturaleza",
    completed: true
  },
  {
    id: 2,
    iconType: "love",
    title: "Sembrando Amor",
    completed: true
  },
  {
    id: 3,
    iconType: "love",
    title: "Raíces de Cariño",
    completed: true
  },
  {
    id: 4,
    iconType: "seed",
    title: "Flores de Ternura",
    completed: true
  },
  {
    id: 5,
    iconType: "love",
    title: "Amor que Germina",
    completed: true
  },
  {
    id: 6,
    iconType: "love",
    title: "Corazón Verde",
    completed: true
  },
  {
    id: 7,
    iconType: "water",
    title: "Latido de la Tierra",
    completed: true
  },

  // Categoría Sol (4 títulos)
  {
    id: 8,
    iconType: "love",
    title: "Dios de nuestros ancestros",
    completed: false
  },
  {
    id: 9,
    iconType: "sun",
    title: "Luz Vital del Campo",
    completed: false
  },
  {
    id: 10,
    iconType: "sun",
    title: "Rayos de Innovación",
    completed: false
  },
  {
    id: 11,
    iconType: "sun",
    title: "Brillo que Alimenta",
    completed: false
  },

  // Categoría Abono (2 títulos)
  {
    id: 12,
    iconType: "seed",
    title: "Elixir de la Fertilidad",
    completed: false
  },
  {
    id: 13,
    iconType: "love",
    title: "Fertilizando el Futuro",
    completed: false
  },

  // Categoría Agua (6 títulos)
  {
    id: 14,
    iconType: "water",
    title: "Ríos de Vida",
    completed: false
  },
  {
    id: 15,
    iconType: "water",
    title: "La Danza del Agua",
    completed: false
  },
  {
    id: 16,
    iconType: "water",
    title: "Lluvia que Renueva",
    completed: false
  },
  {
    id: 17,
    iconType: "water",
    title: "Fuente de Inspiración",
    completed: false
  },
  {
    id: 18,
    iconType: "water",
    title: "Cascada de Innovación",
    completed: false
  },
  {
    id: 19,
    iconType: "love",
    title: "Oasis Verde",
    completed: false
  }
];


function Home() {
  const [currentStage, setCurrentStage] = useState(7)

  return (
    <>
      <Resume 
        title="League of Farmers" 
        playerName="Alma" 
      />
      <div className="h-full">
        <StageList stages={stages} currentStage={currentStage} />
      </div>
      <Footer />
    </>

  )
}

export default Home