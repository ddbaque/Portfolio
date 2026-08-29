import type { Locale } from './config';

interface TextSegment {
	text: string;
	highlight?: boolean;
}

interface Translations {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		experience: string;
		projects: string;
		skills: string;
		portfolio: string;
		blog: string;
	};
	sections: {
		experience: string;
		projects: string;
		skills: string;
	};
	a11y: {
		mainNavigation: string;
		goToPortfolio: string;
		languageSelector: string;
		changeLanguage: string;
		blogInSpanish: string;
	};
	blog: {
		title: string;
		description: string;
		lastUpdated: string;
	};
	hero: {
		name: string;
		introduction: TextSegment[];
		deskAlt: string;
		email: string;
		linkedin: string;
	};
	footer: {
		statusLabel: string;
		navigationLabel: string;
		email: string;
	};
}

export const ui: Record<Locale, Translations> = {
	es: {
		meta: {
			title: 'David Baque | Ingeniero de software backend',
			description:
				'Portfolio de David Baque, ingeniero de software especializado en backend, arquitecturas limpias y microservicios.',
		},
		nav: {
			experience: 'experiencia',
			projects: 'proyectos',
			skills: 'habilidades',
			portfolio: 'portfolio',
			blog: 'blog',
		},
		sections: {
			experience: 'Experiencia',
			projects: 'Proyectos',
			skills: 'Habilidades',
		},
		a11y: {
			mainNavigation: 'Navegación principal',
			goToPortfolio: 'Ir al portfolio',
			languageSelector: 'Selector de idioma',
			changeLanguage: 'Cambiar idioma a',
			blogInSpanish: 'Blog disponible en español',
		},
		blog: {
			title: 'Blog | David Baque',
			description: 'Artículos sobre backend, arquitectura de software, Go y TypeScript.',
			lastUpdated: 'Actualizado el',
		},
		hero: {
			name: 'David Baque',
			introduction: [
				{ text: 'Tres años desarrollando software — desde freelance con aplicaciones que siguen en ' },
				{ text: 'producción', highlight: true },
				{
					text: ', hasta un año en empresa trabajando en equipo en entornos profesionales. Me especializo en ',
				},
				{ text: 'arquitecturas limpias', highlight: true },
				{ text: ' y microservicios con ' },
				{ text: 'Go', highlight: true },
				{ text: ' y ' },
				{ text: 'TypeScript', highlight: true },
				{ text: ', protegiendo la lógica de negocio de los detalles de infraestructura.' },
			],
			deskAlt: 'Mi escritorio de trabajo con dos monitores y teclado mecánico',
			email: 'correo',
			linkedin: 'linkedin',
		},
		footer: {
			statusLabel: 'Estado del sitio: normal',
			navigationLabel: 'Enlaces de contacto',
			email: 'correo',
		},
	},
	en: {
		meta: {
			title: 'David Baque | Backend software engineer',
			description:
				'David Baque’s portfolio, a software engineer specialising in backend systems, clean architecture and microservices.',
		},
		nav: {
			experience: 'experience',
			projects: 'projects',
			skills: 'skills',
			portfolio: 'portfolio',
			blog: 'blog',
		},
		sections: {
			experience: 'Experience',
			projects: 'Projects',
			skills: 'Skills',
		},
		a11y: {
			mainNavigation: 'Main navigation',
			goToPortfolio: 'Go to portfolio',
			languageSelector: 'Language selector',
			changeLanguage: 'Change language to',
			blogInSpanish: 'Blog available in Spanish',
		},
		blog: {
			title: 'Blog | David Baque',
			description: 'Articles about backend engineering, software architecture, Go and TypeScript.',
			lastUpdated: 'Last updated on',
		},
		hero: {
			name: 'David Baque',
			introduction: [
				{ text: 'Three years building software — from freelance applications that remain in ' },
				{ text: 'production', highlight: true },
				{ text: ' to a year working within a professional engineering team. I specialise in ' },
				{ text: 'clean architecture', highlight: true },
				{ text: ' and microservices with ' },
				{ text: 'Go', highlight: true },
				{ text: ' and ' },
				{ text: 'TypeScript', highlight: true },
				{ text: ', keeping business logic protected from infrastructure details.' },
			],
			deskAlt: 'My work desk with two monitors and a mechanical keyboard',
			email: 'email',
			linkedin: 'linkedin',
		},
		footer: {
			statusLabel: 'Site status: normal',
			navigationLabel: 'Contact links',
			email: 'email',
		},
	},
	ca: {
		meta: {
			title: 'David Baque | Enginyer de software backend',
			description:
				'Portfolio de David Baque, enginyer de software especialitzat en backend, arquitectures netes i microserveis.',
		},
		nav: {
			experience: 'experiència',
			projects: 'projectes',
			skills: 'habilitats',
			portfolio: 'portfolio',
			blog: 'blog',
		},
		sections: {
			experience: 'Experiència',
			projects: 'Projectes',
			skills: 'Habilitats',
		},
		a11y: {
			mainNavigation: 'Navegació principal',
			goToPortfolio: 'Anar al portfolio',
			languageSelector: "Selector d'idioma",
			changeLanguage: "Canviar l'idioma a",
			blogInSpanish: 'Blog disponible en castellà',
		},
		blog: {
			title: 'Blog | David Baque',
			description: 'Articles sobre backend, arquitectura de software, Go i TypeScript.',
			lastUpdated: 'Actualitzat el',
		},
		hero: {
			name: 'David Baque',
			introduction: [
				{ text: 'Tres anys desenvolupant programari — des de projectes freelance amb aplicacions que continuen en ' },
				{ text: 'producció', highlight: true },
				{ text: ', fins a un any en empresa treballant en equip en entorns professionals. M’especialitzo en ' },
				{ text: 'arquitectures netes', highlight: true },
				{ text: ' i microserveis amb ' },
				{ text: 'Go', highlight: true },
				{ text: ' i ' },
				{ text: 'TypeScript', highlight: true },
				{ text: ', protegint la lògica de negoci dels detalls d’infraestructura.' },
			],
			deskAlt: 'El meu escriptori de treball amb dos monitors i un teclat mecànic',
			email: 'correu',
			linkedin: 'linkedin',
		},
		footer: {
			statusLabel: 'Estat del lloc: normal',
			navigationLabel: 'Enllaços de contacte',
			email: 'correu',
		},
	},
};
