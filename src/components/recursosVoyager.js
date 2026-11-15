const nasaVoyager = 'https://science.nasa.gov/mission/voyager/';
const imagenesNASA = 'https://assets.science.nasa.gov/';

export const recursosVoyager = [
  {
    id: 'voyager-1',
    nivel: 5,
    nombre: 'NASA — Voyager 1',
    temas: ['estrella'],
    enlace: nasaVoyager + 'voyager-1/',
    imagen: imagenesNASA + 'content/dam/science/missions/voyager/images/1_Voyager_artist_concept.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg',
    es: {
      resumen: 'Historia, características, descubrimientos, fotografías y estado de la misión.',
      alt: 'Ilustración de la sonda Voyager en el espacio',
    },
    en: {
      resumen: 'Mission history, spacecraft features, discoveries, photos, and current status.',
      alt: 'Illustration of the Voyager spacecraft in space',
    },
  },
  {
    id: 'voyager-resumen-mision',
    nivel: 5,
    nombre: 'NASA — Mission Overview',
    temas: ['estrella'],
    enlace: nasaVoyager + 'mission-overview/',
    imagen: imagenesNASA + 'dynamicimage/assets/science/psd/photojournal/pia/pia00/pia00014/PIA00014.jpg?w=895',
    es: {
      resumen: 'Contexto histórico, objetivos originales, exploración planetaria y evolución de las misiones Voyager.',
      alt: 'Fotografía de la Gran Mancha Roja de Júpiter tomada por Voyager 1',
    },
    en: {
      resumen: 'Historical context, original goals, planetary exploration, and how the Voyager missions evolved.',
      alt: 'Voyager 1 photograph of Jupiter’s Great Red Spot',
    },
  },
  {
    id: 'voyager-mision-interestelar',
    nivel: 5,
    nombre: 'NASA — Interstellar Mission',
    temas: ['estrella'],
    enlace: nasaVoyager + 'interstellar-mission/',
    imagen: imagenesNASA + 'dynamicimage/assets/science/psd/photojournal/pia/pia17/pia17462/PIA17462.jpg?fit=clip&h=864&w=1536',
    es: {
      resumen: 'Explicación de la misión interestelar, sus objetivos científicos y el estudio del espacio más allá de la heliosfera.',
      alt: 'Ilustración de Voyager 1 entrando en el espacio interestelar',
    },
    en: {
      resumen: 'An explanation of the interstellar mission, its scientific goals, and the study of space beyond the heliosphere.',
      alt: 'Illustration of Voyager 1 entering interstellar space',
    },
  },
];
