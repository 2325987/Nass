const resumenEs = 'Rover de la NASA que exploró Marte, estudió sus rocas y su suelo y encontró evidencias de agua líquida en el pasado.';
const resumenEn = 'NASA rover that explored Mars, studied its rocks and soil, and found evidence of liquid water in the past.';

const recursos = [
  {
    id: 'opportunity-nasa',
    nombre: 'NASA — Opportunity',
    enlace: 'https://science.nasa.gov/mission/mer-opportunity/',
    es: { resumen: 'Historia, características, objetivos científicos, descubrimientos, fotografías y estado de la misión.' },
    en: { resumen: 'Mission history, rover features, scientific goals, discoveries, photographs, and mission status.' },
  },
  {
    id: 'opportunity-jpl',
    nombre: 'NASA JPL — Opportunity Rover',
    enlace: 'https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer/',
    es: { resumen: 'Información sobre el desarrollo del rover, sus instrumentos, recorrido, descubrimientos y final de misión.' },
    en: { resumen: 'Rover development, instruments, travels, discoveries, and the end of the mission.' },
  },
  {
    id: 'opportunity-informe',
    nombre: 'NASA — Mars Exploration Rover Opportunity End of Mission Report',
    enlace: 'https://ntrs.nasa.gov/citations/20200000214',
    es: { resumen: 'Informe técnico sobre el funcionamiento del rover, sus resultados, los problemas que llevaron al final de la misión y los intentos de recuperar la comunicación.' },
    en: { resumen: 'Technical report on rover operations, results, the events that ended the mission, and attempts to restore communication.' },
  },
];

const niveles = {
  es: {
    ficha: [
      ['Nombre', 'Opportunity'],
      ['Designación', 'Mars Exploration Rover B (MER-B)'],
      ['¿Qué era y para qué servía?', 'Era un vehículo robótico de exploración, conocido como rover, diseñado para recorrer la superficie de Marte, estudiar sus rocas y su suelo, tomar fotografías y buscar evidencias de que en el pasado existieron condiciones favorables para la presencia de agua líquida.'],
      ['¿Dónde estuvo y dónde está?', 'Aterrizó en la región de Meridiani Planum. Su última ubicación conocida fue Perseverance Valley, dentro del cráter Endeavour, en Marte.'],
      ['Lanzamiento y llegada', ['7 de julio de 2003: lanzamiento desde la Tierra.', '25 de enero de 2004: aterrizaje en Marte.']],
      ['Estado actual', 'Misión finalizada. El rover permanece inactivo en la superficie marciana. La NASA declaró oficialmente terminada la misión el 13 de febrero de 2019.'],
      ['Dato sorprendente', 'Su misión principal estaba diseñada para durar 90 días marcianos, pero Opportunity funcionó durante casi 15 años terrestres y recorrió aproximadamente 45 kilómetros.'],
      ['Frase', '«Un pequeño explorador que desafió los límites de su misión y continuó recorriendo Marte hasta que una tormenta de polvo silenció su comunicación».'],
    ],
    publico: 'Para público general y estudiantes',
    lectura: [
      {
        titulo: 'Contexto histórico: ¿por qué se creó?',
        parrafos: [
          'A principios del siglo XXI, la NASA buscaba comprender mejor la historia geológica de Marte y determinar si el planeta había tenido agua líquida en su superficie.',
          'Para investigar estas preguntas, desarrolló dos vehículos robóticos gemelos: Spirit y Opportunity. Ambos formaron parte del programa Mars Exploration Rover.',
          'Opportunity fue diseñado para estudiar rocas, suelos y estructuras geológicas que pudieran conservar evidencias de la presencia de agua en el pasado marciano.',
        ],
      },
      {
        titulo: '¿Qué problema buscaba resolver?',
        introduccion: 'Las imágenes tomadas desde órbita y las misiones anteriores habían proporcionado información sobre Marte, pero era necesario estudiar directamente los materiales de su superficie.',
        listas: [{
          titulo: 'Preguntas de la misión',
          puntos: [
            '¿Existió agua líquida en Marte?',
            '¿Durante cuánto tiempo pudo permanecer?',
            '¿Qué características tenían los antiguos ambientes marcianos?',
            '¿Pudieron existir condiciones adecuadas para la vida microbiana?',
          ],
        }],
        parrafos: ['Su trabajo consistía en desplazarse por diferentes terrenos, fotografiar el entorno, analizar rocas y recopilar información científica.'],
      },
      {
        titulo: '¿Quién lo desarrolló y qué misión lo utilizó?',
        introduccion: 'Opportunity fue desarrollado para la NASA por un equipo de instituciones y empresas dirigido por el Jet Propulsion Laboratory (JPL). Formó parte de la misión Mars Exploration Rover, junto con Spirit.',
        listas: [{
          titulo: 'Cronología de la misión',
          puntos: [
            '7 de julio de 2003: lanzamiento a bordo de un cohete Delta II.',
            '25 de enero de 2004: aterrizaje en Meridiani Planum, Marte.',
            '2004–2018: exploración de la superficie marciana.',
            '13 de febrero de 2019: la NASA anunció oficialmente el final de la misión.',
          ],
        }],
      },
      {
        titulo: '¿Cómo funcionaba?',
        introduccion: 'Opportunity era un robot móvil equipado con cámaras, instrumentos científicos, un brazo robótico y seis ruedas.',
        listas: [{
          titulo: 'Sistemas principales',
          puntos: [
            'Energía: sus paneles solares generaban electricidad y sus baterías recargables la almacenaban.',
            'Movimiento: sus seis ruedas le permitían desplazarse sobre la superficie marciana.',
            'Comunicación: enviaba información a la Tierra mediante antenas y también podía usar orbitadores marcianos como intermediarios.',
            'Exploración: usaba cámaras para fotografiar el terreno y un brazo robótico para acercar instrumentos a las rocas.',
            'Análisis: sus instrumentos estudiaban la composición y las características de los materiales encontrados.',
          ],
        }],
        parrafos: ['El equipo en la Tierra enviaba instrucciones y recibía los datos científicos para decidir los siguientes recorridos y actividades.'],
      },
      {
        titulo: '¿Qué descubrió y qué resultados obtuvo?',
        introduccion: 'Opportunity encontró evidencias geológicas de que algunas regiones de Marte habían tenido agua líquida en el pasado.',
        listas: [{
          titulo: 'Resultados principales',
          puntos: [
            'Identificó minerales y estructuras rocosas relacionados con antiguos ambientes húmedos.',
            'Encontró evidencias de que el agua había interactuado con las rocas de Meridiani Planum.',
            'Estudió cráteres y diferentes formaciones geológicas.',
            'Tomó miles de fotografías que permitieron conocer mejor el paisaje marciano.',
            'Recorrió aproximadamente 45 kilómetros y superó ampliamente las expectativas iniciales.',
          ],
        }],
        parrafos: ['Sus descubrimientos contribuyeron a demostrar que Marte tuvo ambientes que, en determinados momentos de su historia, pudieron haber sido favorables para la vida microbiana.'],
      },
      {
        titulo: '¿Cuánto tiempo funcionó y qué ocurrió al terminar?',
        parrafos: [
          'La misión principal estaba prevista para durar 90 soles, aproximadamente 92 días terrestres. Opportunity siguió funcionando durante casi 15 años.',
          'En junio de 2018, una intensa tormenta de polvo redujo la luz solar que llegaba a sus paneles. El rover dejó de generar suficiente energía para operar y comunicarse con la Tierra.',
          'Su última comunicación se recibió el 10 de junio de 2018. La NASA y el JPL intentaron recuperar el contacto con más de mil comandos. El 13 de febrero de 2019 se declaró finalizada la misión.',
        ],
      },
      {
        titulo: '¿Qué queda actualmente?',
        parrafos: [
          'Opportunity permanece en Marte, en Perseverance Valley, dentro del cráter Endeavour.',
          'El rover ya no realiza actividades ni transmite información, pero sus instrumentos, ruedas y estructura permanecen sobre la superficie marciana.',
          'Los datos, fotografías y descubrimientos recopilados durante casi 15 años continúan siendo utilizados por investigadores para estudiar la historia geológica del planeta.',
        ],
      },
      {
        titulo: 'Glosario',
        definiciones: [
          ['Rover', 'Vehículo robótico diseñado para desplazarse y explorar la superficie de otro cuerpo celeste.'],
          ['Sol', 'Unidad de tiempo equivalente a un día marciano.'],
          ['Panel solar', 'Dispositivo que transforma la luz del Sol en electricidad.'],
          ['Meridiani Planum', 'Región de Marte donde aterrizó Opportunity.'],
          ['Perseverance Valley', 'Zona de Marte donde se encontraba el rover durante su última etapa de exploración.'],
        ],
      },
    ],
  },
  en: {
    ficha: [
      ['Name', 'Opportunity'],
      ['Designation', 'Mars Exploration Rover B (MER-B)'],
      ['What was it used for?', 'A robotic rover that drove across Mars to study rock and soil, take photographs, and look for evidence of past conditions that could support liquid water.'],
      ['Where was it, and where is it now?', 'It landed in Meridiani Planum. Its last known location was Perseverance Valley, inside Endeavour crater on Mars.'],
      ['Launch and arrival', ['July 7, 2003: Launch from Earth.', 'January 25, 2004: Landing on Mars.']],
      ['Current status', 'The rover is inactive on Mars. NASA officially ended the mission on February 13, 2019.'],
      ['Surprising fact', 'Designed for 90 Martian days, it operated for nearly 15 Earth years and traveled about 45 kilometers.'],
      ['Quote', '“A small explorer that pushed the limits of its mission and kept traveling across Mars until a dust storm silenced it.”'],
    ],
    publico: 'For general readers and students',
    lectura: [
      {
        titulo: 'Historical context: Why was it created?',
        parrafos: [
          'In the early 2000s, NASA wanted to learn more about Mars’s geological history and determine whether liquid water had existed on its surface.',
          'NASA developed the twin rovers Spirit and Opportunity for the Mars Exploration Rover program. Opportunity studied rocks, soils, and geological features that could preserve signs of ancient water.',
        ],
      },
      {
        titulo: 'What problem did it aim to solve?',
        introduccion: 'Orbital images and earlier missions provided information about Mars. Scientists needed direct measurements of surface materials.',
        listas: [{
          titulo: 'Mission questions',
          puntos: [
            'Did liquid water exist on Mars?',
            'How long might it have persisted?',
            'What were ancient Martian environments like?',
            'Could any of those environments have supported microbial life?',
          ],
        }],
        parrafos: ['Opportunity crossed different terrain, photographed its surroundings, analyzed rocks, and collected scientific data.'],
      },
      {
        titulo: 'Who developed it, and which mission used it?',
        introduccion: 'NASA’s Jet Propulsion Laboratory (JPL) led the team of institutions and companies behind Opportunity. It was part of the Mars Exploration Rover mission alongside Spirit.',
        listas: [{
          titulo: 'Mission timeline',
          puntos: [
            'July 7, 2003: Launched aboard a Delta II rocket.',
            'January 25, 2004: Landed at Meridiani Planum, Mars.',
            '2004–2018: Explored the Martian surface.',
            'February 13, 2019: NASA announced the end of the mission.',
          ],
        }],
      },
      {
        titulo: 'How did it work?',
        introduccion: 'Opportunity was a six-wheeled robot equipped with cameras, scientific instruments, and a robotic arm.',
        listas: [{
          titulo: 'Main systems',
          puntos: [
            'Power: Solar panels generated electricity, and rechargeable batteries stored it.',
            'Mobility: Six wheels moved it across the Martian surface.',
            'Communications: Antennas sent information directly to Earth or via Mars orbiters.',
            'Exploration: Cameras photographed the terrain, and a robotic arm placed instruments near rocks.',
            'Analysis: Instruments studied the composition and properties of the materials it found.',
          ],
        }],
        parrafos: ['The team on Earth sent instructions and used the scientific data to plan future drives and activities.'],
      },
      {
        titulo: 'What did it discover?',
        introduccion: 'Opportunity found geological evidence that some regions of Mars once had liquid water.',
        listas: [{
          titulo: 'Main results',
          puntos: [
            'Identified minerals and rock structures associated with ancient wet environments.',
            'Found evidence that water had interacted with rocks at Meridiani Planum.',
            'Studied craters and other geological formations.',
            'Took thousands of photographs of the Martian landscape.',
            'Traveled about 45 kilometers, far exceeding the mission’s original expectations.',
          ],
        }],
        parrafos: ['These discoveries helped show that some Martian environments may once have been favorable for microbial life.'],
      },
      {
        titulo: 'How long did it operate, and what happened afterward?',
        parrafos: [
          'The primary mission was planned for 90 sols, about 92 Earth days. Opportunity operated for nearly 15 years.',
          'In June 2018, a severe dust storm reduced the sunlight reaching its solar panels. The rover could no longer produce enough power to operate or communicate with Earth.',
          'Its last communication was received on June 10, 2018. NASA and JPL sent more than a thousand commands in attempts to restore contact. The mission ended on February 13, 2019.',
        ],
      },
      {
        titulo: 'What remains today?',
        parrafos: [
          'Opportunity remains in Perseverance Valley, inside Endeavour crater on Mars.',
          'The rover no longer operates or transmits. Its instruments, wheels, and structure remain on the Martian surface.',
          'Researchers continue to use its data, photographs, and discoveries to study the planet’s geological history.',
        ],
      },
      {
        titulo: 'Glossary',
        definiciones: [
          ['Rover', 'A robotic vehicle designed to move across and explore the surface of another celestial body.'],
          ['Sol', 'One Martian day.'],
          ['Solar panel', 'A device that converts sunlight into electricity.'],
          ['Meridiani Planum', 'The region of Mars where Opportunity landed.'],
          ['Perseverance Valley', 'The location of the rover during its final period of exploration.'],
        ],
      },
    ],
  },
};

export const expedienteOpportunity = {
  id: 'opportunity',
  nombre: 'Opportunity — MER-B',
  estado: 'completada',
  temas: ['marte'],
  imagen: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/imagesmer20100126PIA04413-16.jpg',
  recursos,
  niveles,
  es: { resumen: resumenEs, alt: 'Ilustración de un rover Mars Exploration Rover en Marte', tituloRecursos: 'Seguir explorando', subtituloRecursos: 'Fuentes para profundizar' },
  en: { resumen: resumenEn, alt: 'Illustration of a Mars Exploration Rover on Mars', tituloRecursos: 'Keep exploring', subtituloRecursos: 'Sources for further reading' },
};
