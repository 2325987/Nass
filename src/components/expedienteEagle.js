const recursos = [
  {
    id: 'mission-overview',
    nombre: 'NASA — Apollo 11 Mission Overview',
    enlace: 'https://www.nasa.gov/history/apollo-11-mission-overview/',
    es: { resumen: 'Historia de la misión, tripulación, cronología, aterrizaje y características generales de Eagle.' },
    en: { resumen: 'Mission history, crew, timeline, landing, and an overview of Eagle.' },
  },
  {
    id: 'surface-journal',
    nombre: 'NASA — Apollo 11 Lunar Surface Journal',
    enlace: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/a11.summary.html',
    es: { resumen: 'Relato detallado del descenso, el aterrizaje, las actividades de Armstrong y Aldrin y el regreso a la órbita lunar.' },
    en: { resumen: 'A detailed account of the descent, landing, Armstrong and Aldrin’s activities, and the return to lunar orbit.' },
  },
  {
    id: 'press-kit',
    nombre: 'NASA — Apollo 11 Press Kit',
    enlace: 'https://solarsystem.nasa.gov/system/downloadable_items/2920_Apollo_11.pdf',
    es: { resumen: 'Documento técnico con información sobre la nave, sus etapas, sistemas, instrumentos y características del módulo lunar.' },
    en: { resumen: 'A technical document covering the spacecraft, its stages, systems, instruments, and lunar module features.' },
  },
];

const niveles = {
  es: {
    publico: 'Para público general y estudiantes',
    ficha: [
      ['Nombre', 'Módulo Lunar Eagle (LM-5).'],
      ['¿Qué era y para qué servía?', 'Era el módulo lunar de la misión Apollo 11. Fue diseñado para transportar a dos astronautas desde la órbita lunar hasta la superficie de la Luna y, posteriormente, devolverlos a la órbita para reunirse con el módulo de mando Columbia.'],
      ['¿Dónde estuvo y dónde está?', 'Aterrizó en el Mar de la Tranquilidad, en la Luna. Su etapa de descenso permanece allí. La etapa de ascenso despegó de la superficie y se reunió con Columbia; posteriormente fue separada, y su destino final no está establecido con certeza.'],
      ['Año de lanzamiento y uso', [
        '16 de julio de 1969: lanzamiento de Apollo 11.',
        '20 de julio de 1969: Eagle aterrizó en la Luna.',
        '21 de julio de 1969: la etapa de ascenso despegó de la superficie lunar.',
      ]],
      ['Estado actual', 'Misión finalizada. La etapa de descenso permanece en la Luna; la etapa de ascenso ya no se encuentra en servicio y su destino final es incierto.'],
      ['Dato sorprendente', 'Durante el descenso, Neil Armstrong tomó el control manual del módulo para evitar un cráter rodeado de grandes rocas. Tuvo que buscar una zona más segura para aterrizar.'],
      ['Frase', '«Eagle llevó a los primeros seres humanos hasta la superficie lunar y los devolvió a la órbita, convirtiéndose en una pieza fundamental de uno de los mayores logros de la humanidad».'],
    ],
    lectura: [
      {
        titulo: 'Contexto histórico: ¿por qué se creó?',
        parrafos: [
          'Durante la década de 1960, Estados Unidos desarrolló el programa Apollo con el objetivo de llevar astronautas a la Luna y traerlos de regreso a la Tierra. Para lograrlo, la NASA necesitaba una nave capaz de descender desde la órbita lunar, aterrizar sobre la superficie y despegar nuevamente.',
          'El Módulo Lunar fue desarrollado para cumplir esa función. Eagle fue el módulo utilizado en Apollo 11, la misión que consiguió el primer alunizaje tripulado.',
        ],
      },
      {
        titulo: '¿Qué problema buscaba resolver?',
        introduccion: 'Las naves espaciales convencionales no estaban diseñadas para aterrizar en la Luna y volver a despegar desde allí. Por eso, se necesitaba un vehículo especializado que pudiera:',
        listas: [{ puntos: [
          'Transportar astronautas desde la órbita lunar hasta la superficie.',
          'Permitirles salir y realizar actividades científicas.',
          'Protegerlos durante el descenso y la estancia lunar.',
          'Despegar nuevamente y regresar a la órbita lunar.',
        ] }],
        parrafos: ['El módulo lunar hizo posible que los astronautas exploraran directamente la superficie sin tener que aterrizar toda la nave Apollo.'],
      },
      {
        titulo: '¿Quién lo desarrolló y qué misión lo utilizó?',
        introduccion: 'El Módulo Lunar fue desarrollado por Grumman Aircraft Engineering Corporation para la NASA. Eagle fue utilizado durante Apollo 11, misión lanzada el 16 de julio de 1969 desde el Centro Espacial Kennedy.',
        listas: [{ titulo: 'Tripulación', puntos: [
          'Neil Armstrong: comandante de la misión y primer ser humano en caminar sobre la Luna.',
          'Buzz Aldrin: piloto del módulo lunar y segundo ser humano en caminar sobre la Luna.',
          'Michael Collins: piloto del módulo de mando Columbia, que permaneció en órbita lunar.',
        ] }],
      },
      {
        titulo: '¿Cómo funcionaba?',
        listas: [
          { titulo: 'Secciones principales', puntos: [
            'Etapa de descenso: contenía el motor utilizado para frenar y aterrizar, las patas de aterrizaje y los equipos necesarios para permanecer sobre la superficie.',
            'Etapa de ascenso: contenía la cabina de los astronautas y el motor que permitió despegar de la Luna y regresar a la órbita.',
          ] },
          { titulo: 'Secuencia de vuelo', ordenada: true, puntos: [
            'Eagle se separó de Columbia mientras ambas naves se encontraban en órbita lunar.',
            'La etapa de descenso utilizó su motor para reducir la velocidad y aproximarse a la superficie.',
            'Armstrong y Aldrin aterrizaron en el Mar de la Tranquilidad.',
            'Después de completar sus actividades, los astronautas despegaron utilizando la etapa de ascenso.',
            'Eagle se reunió con Columbia y los astronautas regresaron al módulo de mando.',
          ] },
        ],
      },
      {
        titulo: '¿Qué logró y qué resultados obtuvo?',
        introduccion: 'Eagle hizo posible el primer alunizaje tripulado de la historia, el 20 de julio de 1969.',
        listas: [{ puntos: [
          'Neil Armstrong y Buzz Aldrin pudieron caminar sobre la Luna.',
          'Se realizaron actividades extravehiculares y experimentos.',
          'Se recolectaron aproximadamente 21,5 kg de muestras lunares.',
          'Los astronautas pudieron regresar a Columbia para continuar el viaje de vuelta a la Tierra.',
        ] }],
        parrafos: ['Su éxito demostró que era posible transportar seres humanos hasta la superficie lunar y devolverlos a la órbita.'],
      },
      {
        titulo: '¿Cuánto tiempo funcionó y qué ocurrió al terminar?',
        parrafos: [
          'Eagle funcionó durante la fase lunar de Apollo 11, desde su separación de Columbia hasta el regreso de los astronautas al módulo de mando.',
          'Después del despegue lunar, la etapa de ascenso se reunió con Columbia. Los astronautas transfirieron las muestras y el equipo necesario, y posteriormente la etapa de ascenso fue separada.',
          'La etapa de descenso permaneció en la superficie lunar, donde todavía se encuentra.',
        ],
      },
      {
        titulo: '¿Qué queda actualmente?',
        parrafos: [
          'La etapa de descenso de Eagle permanece en el lugar de aterrizaje de Apollo 11, en el Mar de la Tranquilidad.',
          'Sus restos forman parte del patrimonio histórico de la exploración espacial. La etapa de ascenso dejó de estar en servicio después de cumplir su función, pero su destino final no está confirmado con precisión.',
        ],
      },
      {
        titulo: 'Glosario',
        definiciones: [
          ['Módulo lunar', 'Nave diseñada para transportar astronautas entre la órbita lunar y la superficie de la Luna.'],
          ['Órbita lunar', 'Trayectoria que sigue una nave alrededor de la Luna.'],
          ['Etapa de descenso', 'Sección del módulo que permite frenar y aterrizar.'],
          ['Etapa de ascenso', 'Sección que permite despegar de la superficie lunar.'],
          ['Actividad extravehicular (EVA)', 'Actividad realizada por un astronauta fuera de su nave espacial.'],
        ],
      },
    ],
  },
  en: {
    publico: 'For general readers and students',
    ficha: [
      ['Name', 'Eagle Lunar Module (LM-5).'],
      ['What was it and what did it do?', 'It was the Apollo 11 lunar module, designed to carry two astronauts from lunar orbit to the Moon’s surface and return them to orbit to rendezvous with the command module Columbia.'],
      ['Where did it land and where is it now?', 'Eagle landed in the Sea of Tranquility. Its descent stage remains there. The ascent stage lifted off, docked with Columbia, and was later jettisoned. Its ultimate fate is uncertain.'],
      ['Launch and mission dates', [
        'July 16, 1969: Apollo 11 launched.',
        'July 20, 1969: Eagle landed on the Moon.',
        'July 21, 1969: The ascent stage lifted off from the lunar surface.',
      ]],
      ['Current status', 'The mission is complete. The descent stage remains on the Moon. The ascent stage is out of service and its fate is uncertain.'],
      ['Surprising fact', 'During descent, Neil Armstrong took manual control to avoid a crater surrounded by large rocks and find a safer landing spot.'],
      ['Quote', '“Eagle carried the first humans to the lunar surface and returned them to orbit, playing a vital role in one of humanity’s greatest achievements.”'],
    ],
    lectura: [
      {
        titulo: 'Why was it created?',
        parrafos: [
          'During the 1960s, the United States developed the Apollo program to land astronauts on the Moon and bring them safely back to Earth. NASA needed a spacecraft that could descend from lunar orbit, land, and lift off again.',
          'The lunar module was developed for that purpose. Eagle was the module used on Apollo 11, the first crewed Moon landing.',
        ],
      },
      {
        titulo: 'What problem did it solve?',
        introduccion: 'Conventional spacecraft were not built to land on the Moon and lift off again. A dedicated vehicle would:',
        listas: [{ puntos: [
          'Carry astronauts from lunar orbit to the surface.',
          'Allow astronauts to leave the cabin and carry out scientific work.',
          'Protect the crew during descent and their stay on the Moon.',
          'Lift off and return to lunar orbit.',
        ] }],
        parrafos: ['The module let astronauts explore the lunar surface without landing the entire Apollo spacecraft.'],
      },
      {
        titulo: 'Who built it and which mission used it?',
        introduccion: 'Grumman Aircraft Engineering Corporation developed the lunar module for NASA. Eagle flew on Apollo 11, which launched on July 16, 1969, from Kennedy Space Center.',
        listas: [{ titulo: 'Crew', puntos: [
          'Neil Armstrong: mission commander and the first person to walk on the Moon.',
          'Buzz Aldrin: lunar module pilot and the second person to walk on the Moon.',
          'Michael Collins: pilot of the command module Columbia, which stayed in lunar orbit.',
        ] }],
      },
      {
        titulo: 'How did it work?',
        listas: [
          { titulo: 'Main sections', puntos: [
            'Descent stage: housed the engine for braking and landing, the landing legs, and equipment for the surface stay.',
            'Ascent stage: housed the crew cabin and the engine for lifting off and returning to orbit.',
          ] },
          { titulo: 'Flight sequence', ordenada: true, puntos: [
            'Eagle separated from Columbia in lunar orbit.',
            'The descent engine slowed Eagle as it approached the surface.',
            'Armstrong and Aldrin landed in the Sea of Tranquility.',
            'After completing their surface activities, the astronauts lifted off in the ascent stage.',
            'Eagle rendezvoused with Columbia, and the astronauts returned to the command module.',
          ] },
        ],
      },
      {
        titulo: 'What did it accomplish?',
        introduccion: 'Eagle made the first crewed Moon landing possible on July 20, 1969.',
        listas: [{ puntos: [
          'Neil Armstrong and Buzz Aldrin walked on the Moon.',
          'The astronauts carried out extravehicular activities and experiments.',
          'They collected about 21.5 kg of lunar samples.',
          'The crew returned to Columbia to continue the trip back to Earth.',
        ] }],
        parrafos: ['The mission demonstrated that astronauts could land on the Moon and return to lunar orbit.'],
      },
      {
        titulo: 'How long did it operate and what happened afterward?',
        parrafos: [
          'Eagle operated during the lunar phase of Apollo 11, from its separation from Columbia until the astronauts returned to the command module.',
          'After liftoff, the ascent stage docked with Columbia. The crew transferred samples and equipment before jettisoning the ascent stage.',
          'The descent stage remained on the lunar surface, where it is still located.',
        ],
      },
      {
        titulo: 'What remains today?',
        parrafos: [
          'The descent stage remains at the Apollo 11 landing site in the Sea of Tranquility.',
          'It is part of the historical heritage of space exploration. The ascent stage went out of service after completing its mission, and its ultimate fate is uncertain.',
        ],
      },
      {
        titulo: 'Glossary',
        definiciones: [
          ['Lunar module', 'A spacecraft designed to carry astronauts between lunar orbit and the surface of the Moon.'],
          ['Lunar orbit', 'The path a spacecraft follows around the Moon.'],
          ['Descent stage', 'The section of the lunar module used to slow down and land.'],
          ['Ascent stage', 'The section that lifts off from the lunar surface.'],
          ['Extravehicular activity (EVA)', 'An activity an astronaut performs outside a spacecraft.'],
        ],
      },
    ],
  },
};

export const expedienteEagle = {
  id: 'modulo-lunar-eagle',
  nombre: 'Módulo Lunar Eagle (LM-5)',
  estado: 'completada',
  temas: ['luna'],
  imagen: `${import.meta.env.BASE_URL}imagenes/misiones/modulo-lunar-eagle.jpg`,
  recursos,
  niveles,
  es: {
    resumen: 'Módulo lunar de Apollo 11 que llevó a Neil Armstrong y Buzz Aldrin a la superficie de la Luna en 1969.',
    alt: 'Módulo Lunar Eagle en la superficie de la Luna (NASA, AS11-40-5927)',
    tituloRecursos: 'Seguir explorando',
    subtituloRecursos: 'Fuentes para profundizar',
  },
  en: {
    nombre: 'Eagle Lunar Module (LM-5)',
    resumen: 'The Apollo 11 lunar module that carried Neil Armstrong and Buzz Aldrin to the Moon’s surface in 1969.',
    alt: 'Eagle Lunar Module on the Moon’s surface (NASA, AS11-40-5927)',
    tituloRecursos: 'Keep exploring',
    subtituloRecursos: 'Further reading',
  },
};
