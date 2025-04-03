import stagesData from '../data/stages.json';

export interface QuizOption {
  texto: string;
  es_correcta: boolean;
}

export interface Quiz {
  pregunta: string;
  opciones: QuizOption[];
}

export interface Stage {
  titulo: string;
  tipo_insignia: 'agua' | 'sol' | 'abono' | 'amor';
  descripcion: string;
  instrucciones: string;
  palabra_magica: string;
  quiz: Quiz;
  // Additional UI state properties
  completed?: boolean;
  id?: number;
}

export interface StagesData {
  stages: Stage[];
}

const STORAGE_KEY = 'league_of_farming_stages';

export const getStages = (): StagesData => {
  // Try to get stages from local storage
  const storedStages = localStorage.getItem(STORAGE_KEY);
  
  if (storedStages) {
    try {
      return JSON.parse(storedStages) as StagesData;
    } catch (e) {
      console.error('Error parsing stored stages:', e);
      // If there's an error parsing, fall back to the default data
    }
  }
  
  // If no stored stages or error parsing, use the default data and store it
  const defaultStages = stagesData as { stages: Array<Omit<Stage, 'id' | 'completed'>> };
  
  // Add UI state properties to each stage
  const enhancedStages: StagesData = {
    stages: defaultStages.stages.map((stage, index) => ({
      ...stage,
      tipo_insignia: stage.tipo_insignia as 'agua' | 'sol' | 'abono' | 'amor',
      id: index + 1,
      completed: false
    }))
  };
  
  // Store the enhanced stages in local storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(enhancedStages));
  
  return enhancedStages;
};

export const updateStages = (stages: StagesData): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stages));
};

export const mapIconType = (tipo_insignia: string): string => {
  switch (tipo_insignia) {
    case 'agua':
      return 'water';
    case 'sol':
      return 'sun';
    case 'abono':
      return 'seed';
    case 'amor':
      return 'love';
    default:
      return 'love';
  }
};

export interface BadgeCounts {
  agua: { total: number; completed: number };
  sol: { total: number; completed: number };
  abono: { total: number; completed: number };
  amor: { total: number; completed: number };
}

export const getBadgeCounts = (): BadgeCounts => {
  const { stages } = getStages();
  
  // Inicializar conteos
  const counts: BadgeCounts = {
    agua: { total: 0, completed: 0 },
    sol: { total: 0, completed: 0 },
    abono: { total: 0, completed: 0 },
    amor: { total: 0, completed: 0 }
  };
  
  // Contar etapas por tipo_insignia
  stages.forEach(stage => {
    const type = stage.tipo_insignia;
    
    // Verificar si el tipo es válido antes de acceder a counts
    if (counts[type]) {
      counts[type].total += 1;
      
      if (stage.completed) {
        counts[type].completed += 1;
      }
    } else {
      console.warn(`Tipo de insignia no válido: ${type}`);
    }
  });
  
  return counts;
};
