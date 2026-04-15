export const languages = {
  es: 'ES',
  en: 'EN',
  ca: 'CA',
} as const

export type Lang = keyof typeof languages
export const defaultLang: Lang = 'es'

export const translations = {
  es: {
    // Nav
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',

    // Hero
    'hero.role': 'Desarrollador Full Stack',
    'hero.description': 'Tres años desarrollando software — desde freelance con aplicaciones que siguen en producción, hasta un año en empresa trabajando en equipo en entornos profesionales. Me especializo en arquitecturas limpias y microservicios con',
    'hero.description.end': 'protegiendo la lógica de negocio de los detalles de infraestructura. A medio año de graduarme en Ingeniería Informática.',
    'hero.contact': 'Contáctame',

    // Sections
    'section.projects': 'Proyectos',
    'section.experience': 'Experiencia',
    'section.skills': 'Habilidades',

    // Project buttons
    'project.code': 'Código',
    'project.view': 'Ver',
    'project.design': 'Diseño',

    // Experience
    'experience.current': 'Actualmente',

    // Footer
    'footer.rights': '© 2025 David Denis Baque Pincay',

    // Projects
    'project.takeorder.description': 'App de gestión para restaurantes que sincroniza en tiempo real comandas, pagos y comunicación entre cocina y camareros, optimizando el servicio.',
    'project.neby.description': 'App para comunidades que fomenta la colaboración entre vecinos mediante una recompensa virtual y retos, mejorando la convivencia y el apoyo mutuo.',
    'project.portfolio.description': 'Portfolio desarrollado con Astro y TypeScript, diseñado previamente en Figma y posteriormente maquetado y programado con estas tecnologías.',

    // Experience
    'exp.farmaconnect.position': 'Desarrollador Full Stack',
    'exp.farmaconnect.description': 'Empecé desarrollando y manteniendo una plataforma web que digitaliza farmacias con cartelería digital, contenido en tiempo real y dispositivos IoT. Actualmente diseño y desarrollo en Go la arquitectura de una plataforma de orquestación de etiquetas electrónicas (ESL) a gran escala.',
    'exp.farmaconnect.company': 'FarmaConnect (Empresa)',
    'exp.neby.position': 'Desarrollador Backend',
    'exp.neby.description': 'Durante más de 5 meses, trabajé en un equipo de 8 personas en el desarrollo de una aplicación para el intercambio de servicios entre vecinos. Gestioné el backend y desarrollé la arquitectura, endpoints y base de datos, utilizando C++ y PostgreSQL para manejar múltiples peticiones concurrentes con técnicas como connection pooling.',
    'exp.neby.company': 'Neby (Universidad)',
    'exp.takeorder.position': 'Desarrollador Full Stack',
    'exp.takeorder.description': 'En dos meses, desarrollé de manera individual una aplicación para gestionar pedidos, pagos y mesas en restaurantes. Conseguí que dos restaurantes la implementaran, actualmente en uno de ellos lleva operando hasta día de hoy, demostrando su eficacia en la optimización de operaciones diarias.',
    'exp.takeorder.company': 'TakeOrder (Freelance)',

    // Skills
    'skill.ui': 'UI/UX',
    'skill.ui.desc': 'Figma, Whimsical',
    'skill.frontend': 'Frontend',
    'skill.frontend.desc': 'HTML, CSS, React, Astro, JavaScript',
    'skill.backend': 'Backend',
    'skill.backend.desc': 'Node Js, Express, TypeScript',
    'skill.database': 'Database',
    'skill.database.desc': 'MongoDB, MySQL, PostgreSQL',
    'skill.cloud': 'Cloud',
    'skill.cloud.desc': 'AWS EC2, Raspberry Pi',
    'skill.other': 'Other',
    'skill.other.desc': 'Docker, Testing, Linux',
  },

  en: {
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',

    'hero.role': 'Full Stack Developer',
    'hero.description': 'Three years building software — from freelance with apps still running in production, to a year working in company teams in professional environments. I specialize in clean architectures and microservices with',
    'hero.description.end': 'protecting business logic from infrastructure details. Six months away from graduating in Computer Engineering.',
    'hero.contact': 'Contact me',

    'section.projects': 'Projects',
    'section.experience': 'Experience',
    'section.skills': 'Skills',

    'project.code': 'Code',
    'project.view': 'View',
    'project.design': 'Design',

    'experience.current': 'Currently',

    'footer.rights': '© 2025 David Denis Baque Pincay',

    'project.takeorder.description': 'Restaurant management app that synchronizes orders, payments and kitchen-waiter communication in real time, optimizing the service.',
    'project.neby.description': 'Community app that encourages collaboration between neighbors through virtual rewards and challenges, improving coexistence and mutual support.',
    'project.portfolio.description': 'Portfolio built with Astro and TypeScript, previously designed in Figma and then developed with these technologies.',

    'exp.farmaconnect.position': 'Full Stack Developer',
    'exp.farmaconnect.description': 'Started developing and maintaining a web platform that digitizes pharmacies with digital signage, real-time content and IoT devices. Currently designing and developing in Go the architecture of a large-scale electronic shelf label (ESL) orchestration platform.',
    'exp.farmaconnect.company': 'FarmaConnect (Company)',
    'exp.neby.position': 'Backend Developer',
    'exp.neby.description': 'For over 5 months, I worked in a team of 8 people developing an application for exchanging services between neighbors. I managed the backend and developed the architecture, endpoints and database, using C++ and PostgreSQL to handle multiple concurrent requests with techniques like connection pooling.',
    'exp.neby.company': 'Neby (University)',
    'exp.takeorder.position': 'Full Stack Developer',
    'exp.takeorder.description': 'In two months, I individually developed an application to manage orders, payments and tables in restaurants. Two restaurants adopted it, and one of them is still using it to this day, proving its effectiveness in optimizing daily operations.',
    'exp.takeorder.company': 'TakeOrder (Freelance)',

    'skill.ui': 'UI/UX',
    'skill.ui.desc': 'Figma, Whimsical',
    'skill.frontend': 'Frontend',
    'skill.frontend.desc': 'HTML, CSS, React, Astro, JavaScript',
    'skill.backend': 'Backend',
    'skill.backend.desc': 'Node Js, Express, TypeScript',
    'skill.database': 'Database',
    'skill.database.desc': 'MongoDB, MySQL, PostgreSQL',
    'skill.cloud': 'Cloud',
    'skill.cloud.desc': 'AWS EC2, Raspberry Pi',
    'skill.other': 'Other',
    'skill.other.desc': 'Docker, Testing, Linux',
  },

  ca: {
    'nav.projects': 'Projectes',
    'nav.experience': 'Experiència',
    'nav.skills': 'Habilitats',

    'hero.role': 'Desenvolupador Full Stack',
    'hero.description': "Tres anys desenvolupant software — des de freelance amb aplicacions que segueixen en producció, fins a un any en empresa treballant en equip en entorns professionals. M'especialitzo en arquitectures netes i microserveis amb",
    'hero.description.end': "protegint la lògica de negoci dels detalls d'infraestructura. A mig any de graduar-me en Enginyeria Informàtica.",
    'hero.contact': "Contacta'm",

    'section.projects': 'Projectes',
    'section.experience': 'Experiència',
    'section.skills': 'Habilitats',

    'project.code': 'Codi',
    'project.view': 'Veure',
    'project.design': 'Disseny',

    'experience.current': 'Actualment',

    'footer.rights': '© 2025 David Denis Baque Pincay',

    'project.takeorder.description': "App de gestió per a restaurants que sincronitza en temps real comandes, pagaments i comunicació entre cuina i cambrers, optimitzant el servei.",
    'project.neby.description': "App per a comunitats que fomenta la col·laboració entre veïns mitjançant una recompensa virtual i reptes, millorant la convivència i el suport mutu.",
    'project.portfolio.description': "Portfolio desenvolupat amb Astro i TypeScript, dissenyat prèviament a Figma i posteriorment maquetat i programat amb aquestes tecnologies.",

    'exp.farmaconnect.position': 'Desenvolupador Full Stack',
    'exp.farmaconnect.description': "Vaig començar desenvolupant i mantenint una plataforma web que digitalitza farmàcies amb cartelleria digital, contingut en temps real i dispositius IoT. Actualment dissenyo i desenvolupo en Go l'arquitectura d'una plataforma d'orquestració d'etiquetes electròniques (ESL) a gran escala.",
    'exp.farmaconnect.company': 'FarmaConnect (Empresa)',
    'exp.neby.position': 'Desenvolupador Backend',
    'exp.neby.description': "Durant més de 5 mesos, vaig treballar en un equip de 8 persones en el desenvolupament d'una aplicació per a l'intercanvi de serveis entre veïns. Vaig gestionar el backend i vaig desenvolupar l'arquitectura, endpoints i base de dades, utilitzant C++ i PostgreSQL per gestionar múltiples peticions concurrents amb tècniques com connection pooling.",
    'exp.neby.company': 'Neby (Universitat)',
    'exp.takeorder.position': 'Desenvolupador Full Stack',
    'exp.takeorder.description': "En dos mesos, vaig desenvolupar de manera individual una aplicació per gestionar comandes, pagaments i taules en restaurants. Vaig aconseguir que dos restaurants la implementessin, actualment en un d'ells porta operant fins avui, demostrant la seva eficàcia en l'optimització d'operacions diàries.",
    'exp.takeorder.company': 'TakeOrder (Freelance)',

    'skill.ui': 'UI/UX',
    'skill.ui.desc': 'Figma, Whimsical',
    'skill.frontend': 'Frontend',
    'skill.frontend.desc': 'HTML, CSS, React, Astro, JavaScript',
    'skill.backend': 'Backend',
    'skill.backend.desc': 'Node Js, Express, TypeScript',
    'skill.database': 'Base de dades',
    'skill.database.desc': 'MongoDB, MySQL, PostgreSQL',
    'skill.cloud': 'Cloud',
    'skill.cloud.desc': 'AWS EC2, Raspberry Pi',
    'skill.other': 'Altres',
    'skill.other.desc': 'Docker, Testing, Linux',
  },
} as const
