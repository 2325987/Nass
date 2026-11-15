const resumenEs = 'Vehículo eléctrico lunar diseñado para transportar a dos astronautas, herramientas, equipos científicos y muestras, facilitando la exploración de mayores distancias sobre la Luna.';
const resumenEn = 'An electric lunar vehicle designed to carry two astronauts, tools, scientific equipment, and samples so crews could explore farther across the Moon.';

const recursos = [
  {
    id: 'lrv-historia',
    nombre: 'NASA — The Apollo Lunar Roving Vehicle',
    enlace: 'https://www.nasa.gov/history/alsj/a15/a15lrvoverview.html',
    es: { resumen: 'Historia, desarrollo, características, funcionamiento y participación del vehículo en las misiones Apollo 15, 16 y 17.' },
    en: { resumen: 'History, development, features, operation, and use of the vehicle on Apollo 15, 16, and 17.' },
  },
  {
    id: 'lrv-misiones',
    nombre: 'NASA — Apollo 15, 16 and 17',
    enlace: 'https://science.nasa.gov/moon/',
    es: { resumen: 'Información sobre la exploración lunar, incluidas las misiones Apollo que utilizaron el Lunar Roving Vehicle.' },
    en: { resumen: 'Information about lunar exploration, including the Apollo missions that used the Lunar Roving Vehicle.' },
  },
  {
    id: 'lrv-tecnica',
    nombre: 'NASA — Lunar Roving Vehicle: Technical Information',
    enlace: 'https://ntrs.nasa.gov/search?q=Lunar%20Roving%20Vehicle',
    es: { resumen: 'Búsqueda de documentos técnicos sobre el diseño, los sistemas eléctricos, las ruedas y las capacidades del vehículo.' },
    en: { resumen: 'Search for technical documents on vehicle design, electrical systems, wheels, and capabilities.' },
  },
];

const niveles = {
  es: {
    ficha: [
      ['Nombre', 'Lunar Roving Vehicle'],
      ['Siglas', 'LRV (Lunar Roving Vehicle)'],
      ['¿Qué era y para qué servía?', resumenEs],
      ['¿Dónde está?', 'Los tres vehículos utilizados permanecen en la Luna, donde fueron estacionados al finalizar las misiones Apollo 15, 16 y 17.'],
      ['Año de primer uso', '1971, durante la misión Apollo 15.'],
      ['Estado actual', 'Misiones finalizadas. Los tres vehículos permanecen inactivos en la superficie lunar.'],
      ['Dato sorprendente', 'Se construyeron cuatro vehículos destinados al vuelo lunar, pero solo tres se usaron en la Luna. El cuarto estaba previsto para una misión posterior que se canceló y se utilizó como fuente de repuestos.'],
      ['Frase', '«Las primeras ruedas de la humanidad sobre la Luna: compañeros de exploración que ampliaron los horizontes de las misiones Apollo».'],
    ],
    lectura: [
      {
        titulo: 'Contexto histórico de su creación',
        parrafos: [
          'Durante las primeras misiones Apollo, los astronautas exploraban la superficie lunar principalmente caminando. Aunque consiguieron importantes descubrimientos, sus desplazamientos estaban limitados por el tiempo disponible, el peso de sus trajes espaciales y la necesidad de permanecer cerca del módulo lunar.',
          'Para las últimas misiones Apollo, la NASA planeó estancias más prolongadas y exploraciones científicas de mayor alcance. Esto hizo necesario desarrollar un vehículo capaz de transportar astronautas y equipos por el terreno lunar.',
          'Así nació el Lunar Roving Vehicle (LRV), conocido también como Moon Buggy.',
        ],
      },
      {
        titulo: '¿Qué problema buscaba resolver?',
        parrafos: [
          'El principal desafío era ampliar la distancia que los astronautas podían recorrer durante sus actividades en la superficie lunar.',
          'Caminar largas distancias con trajes espaciales, herramientas y equipos resultaba complicado y consumía tiempo y energía.',
          'El LRV permitió transportar a dos astronautas y su equipo, facilitando la recolección de muestras, la instalación de experimentos y la exploración de regiones más alejadas del lugar de aterrizaje.',
        ],
      },
      {
        titulo: '¿Quién lo desarrolló y qué misión lo utilizó?',
        introduccion: 'El Lunar Roving Vehicle fue desarrollado para la NASA por Boeing, que estuvo a cargo del contrato principal, con Delco como uno de sus principales subcontratistas.',
        listas: [{
          titulo: 'Misiones que lo utilizaron',
          puntos: [
            'Apollo 15 (1971). Primer uso de un vehículo tripulado sobre la superficie lunar, con David Scott y James Irwin.',
            'Apollo 16 (1972). John Young y Charles Duke exploraron la región Descartes Highlands.',
            'Apollo 17 (1972). Eugene Cernan y Harrison Schmitt usaron el LRV por última vez, en Taurus-Littrow.',
          ],
        }],
        parrafos: ['Cada vehículo fue transportado plegado en el módulo lunar y desplegado después del aterrizaje.'],
      },
      {
        titulo: '¿Cómo funcionaba?',
        parrafos: [
          'El LRV era un vehículo eléctrico de cuatro ruedas diseñado para funcionar en las condiciones extremas de la Luna.',
          'Utilizaba dos baterías de 36 voltios para alimentar sus motores eléctricos, con un motor independiente en cada rueda.',
          'Los astronautas lo controlaban mediante una palanca de mando situada entre sus asientos. También contaba con sistemas de dirección, navegación y comunicación para conducirlo y mantener contacto con el módulo lunar y la Tierra.',
          'Su estructura plegable ocupaba menos espacio durante el transporte. Una vez en la Luna, los astronautas la desplegaban manualmente y preparaban los sistemas para comenzar la exploración.',
        ],
      },
      {
        titulo: '¿Qué descubrimientos o resultados consiguió?',
        introduccion: 'El LRV permitió que los astronautas llegaran a lugares que habrían sido mucho más difíciles de alcanzar caminando.',
        listas: [{
          titulo: 'Recorridos y exploraciones',
          puntos: [
            'Apollo 15 recorrió aproximadamente 27,8 km en Hadley-Apennine, donde la tripulación recogió muestras y estudió la geología lunar.',
            'Apollo 16 recorrió aproximadamente 26,7 km y exploró Descartes Highlands.',
            'Apollo 17 recorrió aproximadamente 35,9 km en Taurus-Littrow, donde la tripulación recogió muestras lunares.',
          ],
        }],
        parrafos: ['En conjunto, los tres vehículos recorrieron aproximadamente 90,4 km durante sus misiones.'],
      },
      {
        titulo: '¿Cuánto tiempo funcionó y qué ocurrió al terminar?',
        parrafos: [
          'Los LRV se diseñaron para funcionar durante las actividades de exploración de cada misión Apollo.',
          'Cada vehículo se utilizó durante tres jornadas de exploración lunar, correspondientes a las actividades extravehiculares de su misión.',
          'Al terminar el trabajo, los astronautas dejaron los vehículos en la superficie lunar. Allí concluyó su operación.',
        ],
      },
      {
        titulo: '¿Qué queda de ellos actualmente?',
        introduccion: 'Los tres vehículos utilizados permanecen en la Luna.',
        listas: [{
          titulo: 'Lugares donde quedaron',
          puntos: [
            'Apollo 15: Hadley-Apennine.',
            'Apollo 16: Descartes Highlands.',
            'Apollo 17: Taurus-Littrow.',
          ],
        }],
        parrafos: [
          'Actualmente están inactivos y expuestos al entorno lunar. Sus estructuras y componentes forman parte del legado material de las misiones Apollo.',
          'El cuarto vehículo de vuelo se utilizó como fuente de repuestos después de la cancelación de misiones posteriores.',
        ],
      },
      {
        titulo: 'Glosario',
        definiciones: [
          ['LRV', 'Abreviatura de Lunar Roving Vehicle, vehículo eléctrico diseñado para transportar astronautas sobre la superficie lunar.'],
          ['Módulo lunar', 'Nave del programa Apollo que llevaba a los astronautas desde la órbita lunar hasta la superficie y de regreso.'],
          ['Actividad extravehicular (EVA)', 'Actividad realizada por un astronauta fuera de una nave o vehículo espacial.'],
          ['Subcontratista', 'Empresa contratada por otra organización para desarrollar una parte de un proyecto.'],
          ['Batería eléctrica', 'Dispositivo que almacena energía química y la transforma en electricidad para alimentar equipos y motores.'],
        ],
      },
    ],
  },
  en: {
    ficha: [
      ['Name', 'Lunar Roving Vehicle'],
      ['Abbreviation', 'LRV (Lunar Roving Vehicle)'],
      ['What was it used for?', resumenEn],
      ['Where is it?', 'All three rovers remain on the Moon where they were parked at the end of Apollo 15, 16, and 17.'],
      ['First used', '1971, on Apollo 15.'],
      ['Current status', 'The missions are complete. The three rovers remain inactive on the lunar surface.'],
      ['Surprising fact', 'Four flight vehicles were built. Three were used on the Moon. The fourth supplied spare parts after later missions were canceled.'],
      ['Quote', '“Humanity’s first wheels on the Moon: exploration companions that broadened the horizons of the Apollo missions.”'],
    ],
    lectura: [
      {
        titulo: 'Historical context',
        parrafos: [
          'Early Apollo astronauts explored on foot. Time, heavy spacesuits, and the need to stay close to the lunar module limited their range.',
          'NASA planned longer stays and more ambitious science for the later missions. Crews needed a vehicle to carry people and equipment across lunar terrain. This led to the Lunar Roving Vehicle, also known as the Moon Buggy.',
        ],
      },
      {
        titulo: 'What problem did it solve?',
        parrafos: [
          'Walking long distances with spacesuits, tools, and scientific equipment took time and energy.',
          'By carrying two astronauts and their gear, the rover allowed crews to collect samples, set up experiments, and reach sites farther from the landing area.',
        ],
      },
      {
        titulo: 'Who developed it, and which missions used it?',
        introduccion: 'Boeing was NASA’s prime contractor, with Delco as a major subcontractor.',
        listas: [{
          titulo: 'Missions that used it',
          puntos: [
            'Apollo 15 (1971). David Scott and James Irwin made the first crewed rover trips on the Moon.',
            'Apollo 16 (1972). John Young and Charles Duke explored the Descartes Highlands.',
            'Apollo 17 (1972). Eugene Cernan and Harrison Schmitt used the last rover at Taurus-Littrow.',
          ],
        }],
        parrafos: ['Each rover traveled folded inside the lunar module. The crew deployed it after landing.'],
      },
      {
        titulo: 'How did it work?',
        parrafos: [
          'The four-wheel electric vehicle was designed for lunar conditions. Two 36-volt batteries powered independent motors, one in each wheel.',
          'Astronauts steered with a hand controller between the seats. Steering, navigation, and communications systems supported driving and contact with the lunar module and Earth.',
          'The crew unfolded the rover by hand and prepared its systems after landing.',
        ],
      },
      {
        titulo: 'What did it help accomplish?',
        introduccion: 'The rover enabled astronauts to reach sites that were difficult to reach on foot.',
        listas: [{
          titulo: 'Distances and exploration',
          puntos: [
            'Apollo 15 traveled about 27.8 km at Hadley-Apennine while collecting samples and studying lunar geology.',
            'Apollo 16 traveled about 26.7 km and explored the Descartes Highlands.',
            'Apollo 17 traveled about 35.9 km at Taurus-Littrow while collecting lunar samples.',
          ],
        }],
        parrafos: ['Together, the three rovers covered about 90.4 km.'],
      },
      {
        titulo: 'How long did it operate, and what happened afterward?',
        parrafos: [
          'Each rover was designed to support the crew’s surface exploration and was used during three lunar excursions.',
          'The astronauts left the vehicles on the Moon at the end of their work, concluding their operation.',
        ],
      },
      {
        titulo: 'What remains today?',
        introduccion: 'All three rovers remain on the lunar surface.',
        listas: [{
          titulo: 'Locations',
          puntos: ['Apollo 15: Hadley-Apennine.', 'Apollo 16: Descartes Highlands.', 'Apollo 17: Taurus-Littrow.'],
        }],
        parrafos: [
          'The inactive vehicles and their components are part of the physical legacy of the Apollo program.',
          'The fourth flight vehicle supplied spare parts after later missions were canceled.',
        ],
      },
      {
        titulo: 'Glossary',
        definiciones: [
          ['LRV', 'Short for Lunar Roving Vehicle, an electric vehicle designed to carry astronauts across the Moon.'],
          ['Lunar module', 'The Apollo spacecraft that carried astronauts from lunar orbit to the surface and back.'],
          ['Extravehicular activity (EVA)', 'Work carried out by an astronaut outside a spacecraft or vehicle.'],
          ['Subcontractor', 'A company hired by another organization to deliver part of a project.'],
          ['Electric battery', 'A device that stores chemical energy and converts it to electricity to power equipment and motors.'],
        ],
      },
    ],
  },
};

export const expedienteLRV = {
  id: 'lunar-roving-vehicle',
  nombre: 'Lunar Roving Vehicle',
  estado: 'completada',
  temas: ['luna'],
  imagen: 'https://assets.science.nasa.gov/content/dam/science/psd/lunar-science/2023/09/as15-85-11471_orig.jpg',
  recursos,
  niveles,
  es: { resumen: resumenEs, alt: 'Vehículo lunar de Apollo 15 en la superficie de la Luna' },
  en: { resumen: resumenEn, alt: 'Apollo 15 lunar rover on the surface of the Moon' },
};
