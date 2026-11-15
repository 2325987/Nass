// El índice actual indica la última etapa alcanzada según las fichas de NASA.
export const etapasMisionesNASA = {
  'artemis-i': {
    actual: 2,
    es: [
      ['Despegue', 'El cohete SLS despegó el 16 de noviembre de 2022 con Orion a bordo.'],
      ['Vuelo lunar', 'Orion orbitó la Luna y los maniquíes registraron datos del entorno espacial.'],
      ['Regreso a la Tierra', 'La cápsula amerizó el 11 de diciembre de 2022 y completó el vuelo de prueba.'],
    ],
    en: [
      ['Launch', 'SLS lifted off on November 16, 2022, carrying Orion.'],
      ['Lunar flight', 'Orion orbited the Moon while instrumented mannequins collected flight data.'],
      ['Return to Earth', 'Orion splashed down on December 11, 2022, completing the test flight.'],
    ],
  },
  'artemis-ii': {
    actual: 3,
    es: [
      ['Despegue', 'Cuatro astronautas despegaron el 1 de abril de 2026.'],
      ['Pruebas cerca de la Tierra', 'La tripulación probó el soporte vital y el pilotaje manual de Orion.'],
      ['Sobrevuelo lunar', 'La nave pasó por el lado lejano de la Luna y siguió una trayectoria de retorno libre.'],
      ['Amerizaje', 'Orion regresó al Pacífico el 10 de abril de 2026 con sus cuatro astronautas.'],
    ],
    en: [
      ['Launch', 'Four astronauts lifted off on April 1, 2026.'],
      ['Tests near Earth', 'The crew tested Orion’s life support and manual piloting.'],
      ['Lunar flyby', 'Orion passed the far side of the Moon and followed a free-return trajectory.'],
      ['Splashdown', 'Orion and its four astronauts returned to the Pacific on April 10, 2026.'],
    ],
  },
  'artemis-iii': {
    actual: 0,
    es: [
      ['Preparación del cohete', 'La etapa central del SLS se trasladó en abril de 2026 para continuar la preparación.'],
      ['Lanzamiento a órbita terrestre', 'La NASA prevé lanzar Orion y su tripulación en 2027.'],
      ['Pruebas de acoplamiento', 'Orion ensayará el acercamiento y el acoplamiento con vehículos de aterrizaje lunar.'],
    ],
    en: [
      ['Rocket preparation', 'The SLS core stage was moved in April 2026 for further preparation.'],
      ['Launch to Earth orbit', 'NASA plans to launch Orion and its crew in 2027.'],
      ['Docking tests', 'Orion will practice rendezvous and docking with lunar landers.'],
    ],
  },
  'artemis-iv': {
    actual: 0,
    es: [
      ['Planificación', 'La NASA prevé realizar el primer alunizaje tripulado del programa en 2028.'],
      ['Viaje hacia la Luna', 'El cohete SLS lanzará a la tripulación a bordo de Orion.'],
      ['Descenso lunar', 'La tripulación pasará a un módulo comercial para descender a la superficie.'],
    ],
    en: [
      ['Planning', 'NASA is targeting 2028 for the program’s first crewed lunar landing.'],
      ['Journey to the Moon', 'SLS will launch the crew aboard Orion.'],
      ['Lunar descent', 'The crew will transfer to a commercial lander to reach the surface.'],
    ],
  },
  roman: {
    actual: 1,
    es: [
      ['Lanzamiento', 'El telescopio despegó el 30 de agosto de 2026.'],
      ['Verificación de instrumentos', 'La NASA comprueba el instrumento de campo amplio y el coronógrafo.'],
      ['Observaciones científicas', 'Roman estudiará la energía oscura, los exoplanetas y otros fenómenos del universo.'],
    ],
    en: [
      ['Launch', 'The telescope lifted off on August 30, 2026.'],
      ['Instrument checks', 'NASA is checking the Wide Field Instrument and coronagraph.'],
      ['Science observations', 'Roman will study dark energy, exoplanets, and other phenomena.'],
    ],
  },
  'neo-surveyor': {
    actual: 0,
    es: [
      ['Preparación del telescopio', 'La NASA prepara el observatorio y su sistema de detección infrarroja.'],
      ['Lanzamiento', 'La fecha más temprana prevista es septiembre de 2027.'],
      ['Búsqueda de asteroides y cometas', 'El telescopio detectará el calor de objetos cercanos a la Tierra.'],
    ],
    en: [
      ['Telescope preparation', 'NASA is preparing the observatory and its infrared detection system.'],
      ['Launch', 'The earliest planned launch date is September 2027.'],
      ['Asteroid and comet survey', 'The telescope will detect heat from objects near Earth.'],
    ],
  },
  dragonfly: {
    actual: 0,
    es: [
      ['Desarrollo de la aeronave', 'La misión prepara una aeronave de rotores diseñada para volar en la atmósfera de Titán.'],
      ['Lanzamiento', 'La fecha más temprana prevista es julio de 2028.'],
      ['Llegada a Titán', 'La NASA estima la llegada para finales de 2034.'],
      ['Exploración', 'Dragonfly volará a distintos lugares para estudiar la química y habitabilidad de Titán.'],
    ],
    en: [
      ['Rotorcraft development', 'The mission is preparing a rotorcraft designed to fly in Titan’s atmosphere.'],
      ['Launch', 'The earliest planned launch date is July 2028.'],
      ['Arrival at Titan', 'NASA expects arrival in late 2034.'],
      ['Exploration', 'Dragonfly will fly to several locations to study Titan’s chemistry and habitability.'],
    ],
  },
};

export function buscarMisiones(misiones, consulta) {
  const normalizar = texto => texto
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/\bartemisa\b/g, 'artemis')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const termino = normalizar(consulta);
  if (!termino) return misiones;

  const exacta = misiones.find(mision => normalizar(mision.nombre) === termino);
  if (exacta) return [exacta];

  const palabras = termino.split(' ');
  return misiones.filter(mision => palabras.every(palabra =>
    normalizar(mision.nombre).split(' ').some(nombre => nombre.startsWith(palabra))
  ));
}
