import type { Locale } from '../i18n/config';
import type { PortfolioContent } from '../types/portfolio';

export const portfolioContent: Record<Locale, PortfolioContent> = {
	es: {
		experience: [
			{
				period: '02/2025 — actualmente',
				role: 'Desarrollador Backend / Microservicios',
				company: 'FarmaConnect / Keonex',
				bullets: [
					'Desarrollo servicios backend y microservicios para el ecosistema FarmaConnect/Keonex, conectando integraciones con ERPs de farmacia, lógica comercial y sistemas de etiquetas electrónicas ESL.',
					'Diseñé e implementé desde cero un sistema en Golang para orquestar miles de etiquetas electrónicas ESL y antenas, incorporando telemetría, métricas y trazabilidad completa de cambios de imagen.',
					'Definí entidades, casos de uso y contratos API documentados, manteniendo el dominio desacoplado de la infraestructura de comunicación y renderizado.',
					'Implementé un entorno de preproducción con Docker y despliegues automatizados mediante GitHub Actions, reduciendo riesgos sobre producción y mejorando la estabilidad de los servicios.',
				],
			},
			{
				period: '01/2024 — 06/2024',
				role: 'Desarrollador Backend',
				company: 'Neby (Universidad)',
				bullets: [
					'Coordiné la base técnica de un equipo de 8 personas, definiendo estructura backend, endpoints y modelo de datos.',
					'Desarrollé el backend en C++ e integré PostgreSQL como sistema de persistencia.',
					'Implementé pruebas unitarias con Google Test y configuré Docker para facilitar un entorno de desarrollo reproducible.',
				],
			},
			{
				period: '08/2023 — 10/2023',
				role: 'Desarrollador Full Stack',
				company: 'Take Order (Freelance)',
				bullets: [
					'Desarrollé una aplicación full stack para la gestión de pedidos en restaurante, cubriendo frontend, backend, base de datos y despliegue.',
					'Diseñé el backend en Node.js con TypeScript y una base de datos PostgreSQL para pedidos, pagos, productos y clientes.',
					'Implementé comunicación en tiempo real con WebSockets entre camareros y cocina.',
					'Por necesidades de protección de datos del cliente, monté un servidor privado en su red local para que la información no saliera de sus instalaciones.',
				],
			},
		],
		projects: [
			{
				id: 'take-order',
				name: 'TakeOrder',
				context: 'en producción',
				description:
					'App de gestión para restaurantes que sincroniza en tiempo real comandas, pagos y comunicación entre cocina y camareros, optimizando el servicio.',
				tags: ['typescript', 'react', 'express', 'postgres', 'raspberry-pi', 'aws'],
				imageAlt: 'Mockup de la aplicación TakeOrder',
			},
			{
				id: 'neby',
				name: 'Neby',
				context: 'universidad · equipo de 8',
				description:
					'App para comunidades que fomenta la colaboración entre vecinos mediante una recompensa virtual y retos, mejorando la convivencia y el apoyo mutuo.',
				tags: ['next.js', 'typescript', 'c++', 'postgres', 'docker', 'aws'],
				imageAlt: 'Mockup de la aplicación Neby',
			},
			{
				id: 'portfolio',
				name: 'Portfolio',
				context: 'este sitio',
				description:
					'Portfolio desarrollado con Astro y TypeScript, diseñado previamente en Figma y posteriormente maquetado y programado con estas tecnologías.',
				tags: ['astro', 'typescript', 'figma'],
				imageAlt: 'Mockup del portfolio personal',
			},
		],
		skills: [
			{ label: 'backend', items: ['Go', 'Node.js', 'Express', 'TypeScript'] },
			{ label: 'frontend', items: ['React', 'Astro', 'Tailwind'] },
			{ label: 'datos', items: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL'] },
			{ label: 'infraestructura', items: ['Docker', 'Portainer', 'GitHub Actions', 'AWS'] },
			{ label: 'sistemas', items: ['Debian', 'Linux', 'Raspberry Pi', 'Testing'] },
			{ label: 'entorno', items: ['fish', 'WezTerm', 'Neovim'] },
		],
	},
	en: {
		experience: [
			{
				period: '02/2025 — present',
				role: 'Backend / Microservices Developer',
				company: 'FarmaConnect / Keonex',
				bullets: [
					'I build backend services and microservices for the FarmaConnect/Keonex ecosystem, connecting pharmacy ERP integrations, business logic and ESL electronic shelf label systems.',
					'I designed and implemented a Golang system from scratch to orchestrate thousands of ESL labels and antennas, adding telemetry, metrics and full traceability for image changes.',
					'I defined entities, use cases and documented API contracts, keeping the domain decoupled from communication and rendering infrastructure.',
					'I implemented a Docker-based pre-production environment with automated GitHub Actions deployments, reducing production risk and improving service stability.',
				],
			},
			{
				period: '01/2024 — 06/2024',
				role: 'Backend Developer',
				company: 'Neby (University)',
				bullets: [
					'I coordinated the technical backend foundation for a team of 8 people, defining structure, endpoints and the data model.',
					'I developed the backend in C++ and integrated PostgreSQL as the persistence layer.',
					'I implemented unit tests with Google Test and configured Docker to provide a reproducible development environment.',
				],
			},
			{
				period: '08/2023 — 10/2023',
				role: 'Full Stack Developer',
				company: 'Take Order (Freelance)',
				bullets: [
					'I developed a full stack restaurant order management application, covering frontend, backend, database and deployment.',
					'I designed the backend with Node.js, TypeScript and a PostgreSQL database for orders, payments, products and customers.',
					'I implemented real-time communication with WebSockets between waiters and kitchen staff.',
					'Due to client data-protection requirements, I deployed a private server inside their local network so information never left their premises.',
				],
			},
		],
		projects: [
			{
				id: 'take-order',
				name: 'TakeOrder',
				context: 'in production',
				description:
					'Restaurant management app that synchronises orders, payments and communication between kitchen and waiters in real time, improving service flow.',
				tags: ['typescript', 'react', 'express', 'postgres', 'raspberry-pi', 'aws'],
				imageAlt: 'Mockup of the TakeOrder application',
			},
			{
				id: 'neby',
				name: 'Neby',
				context: 'university · team of 8',
				description:
					'Community app that encourages collaboration between neighbours through virtual rewards and challenges, improving coexistence and mutual support.',
				tags: ['next.js', 'typescript', 'c++', 'postgres', 'docker', 'aws'],
				imageAlt: 'Mockup of the Neby application',
			},
			{
				id: 'portfolio',
				name: 'Portfolio',
				context: 'this site',
				description:
					'Portfolio built with Astro and TypeScript, first designed in Figma and then implemented with the same visual system.',
				tags: ['astro', 'typescript', 'figma'],
				imageAlt: 'Mockup of the personal portfolio',
			},
		],
		skills: [
			{ label: 'backend', items: ['Go', 'Node.js', 'Express', 'TypeScript'] },
			{ label: 'frontend', items: ['React', 'Astro', 'Tailwind'] },
			{ label: 'data', items: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL'] },
			{ label: 'infrastructure', items: ['Docker', 'Portainer', 'GitHub Actions', 'AWS'] },
			{ label: 'systems', items: ['Debian', 'Linux', 'Raspberry Pi', 'Testing'] },
			{ label: 'environment', items: ['fish', 'WezTerm', 'Neovim'] },
		],
	},
	ca: {
		experience: [
			{
				period: '02/2025 — actualment',
				role: 'Desenvolupador Backend / Microserveis',
				company: 'FarmaConnect / Keonex',
				bullets: [
					'Desenvolupo serveis backend i microserveis per a l’ecosistema FarmaConnect/Keonex, connectant integracions amb ERPs de farmàcia, lògica comercial i sistemes d’etiquetes electròniques ESL.',
					'Vaig dissenyar i implementar des de zero un sistema en Golang per orquestrar milers d’etiquetes ESL i antenes, incorporant telemetria, mètriques i traçabilitat completa dels canvis d’imatge.',
					'Vaig definir entitats, casos d’ús i contractes API documentats, mantenint el domini desacoblat de la infraestructura de comunicació i renderitzat.',
					'Vaig implementar un entorn de preproducció amb Docker i desplegaments automatitzats amb GitHub Actions, reduint riscos sobre producció i millorant l’estabilitat dels serveis.',
				],
			},
			{
				period: '01/2024 — 06/2024',
				role: 'Desenvolupador Backend',
				company: 'Neby (Universitat)',
				bullets: [
					'Vaig coordinar la base tècnica backend d’un equip de 8 persones, definint estructura, endpoints i model de dades.',
					'Vaig desenvolupar el backend en C++ i vaig integrar PostgreSQL com a sistema de persistència.',
					'Vaig implementar proves unitàries amb Google Test i vaig configurar Docker per facilitar un entorn de desenvolupament reproduïble.',
				],
			},
			{
				period: '08/2023 — 10/2023',
				role: 'Desenvolupador Full Stack',
				company: 'Take Order (Freelance)',
				bullets: [
					'Vaig desenvolupar una aplicació full stack per a la gestió de comandes en restaurant, cobrint frontend, backend, base de dades i desplegament.',
					'Vaig dissenyar el backend amb Node.js, TypeScript i una base de dades PostgreSQL per a comandes, pagaments, productes i clients.',
					'Vaig implementar comunicació en temps real amb WebSockets entre cambrers i cuina.',
					'Per necessitats de protecció de dades del client, vaig muntar un servidor privat dins la seva xarxa local perquè la informació no sortís de les seves instal·lacions.',
				],
			},
		],
		projects: [
			{
				id: 'take-order',
				name: 'TakeOrder',
				context: 'en producció',
				description:
					'App de gestió per a restaurants que sincronitza en temps real comandes, pagaments i comunicació entre cuina i cambrers, optimitzant el servei.',
				tags: ['typescript', 'react', 'express', 'postgres', 'raspberry-pi', 'aws'],
				imageAlt: 'Mockup de l’aplicació TakeOrder',
			},
			{
				id: 'neby',
				name: 'Neby',
				context: 'universitat · equip de 8',
				description:
					'App per a comunitats que fomenta la col·laboració entre veïns mitjançant recompenses virtuals i reptes, millorant la convivència i el suport mutu.',
				tags: ['next.js', 'typescript', 'c++', 'postgres', 'docker', 'aws'],
				imageAlt: 'Mockup de l’aplicació Neby',
			},
			{
				id: 'portfolio',
				name: 'Portfolio',
				context: 'aquest lloc',
				description:
					'Portfolio desenvolupat amb Astro i TypeScript, dissenyat prèviament a Figma i posteriorment maquetat i programat amb aquestes tecnologies.',
				tags: ['astro', 'typescript', 'figma'],
				imageAlt: 'Mockup del portfolio personal',
			},
		],
		skills: [
			{ label: 'backend', items: ['Go', 'Node.js', 'Express', 'TypeScript'] },
			{ label: 'frontend', items: ['React', 'Astro', 'Tailwind'] },
			{ label: 'dades', items: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL'] },
			{ label: 'infraestructura', items: ['Docker', 'Portainer', 'GitHub Actions', 'AWS'] },
			{ label: 'sistemes', items: ['Debian', 'Linux', 'Raspberry Pi', 'Testing'] },
			{ label: 'entorn', items: ['fish', 'WezTerm', 'Neovim'] },
		],
	},
};
