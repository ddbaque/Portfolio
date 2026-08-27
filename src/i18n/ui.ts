import type { Locale } from './config';

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
	footer: {
		copyright: string;
		mastodon: string;
		twitter: string;
		github: string;
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
		footer: {
			copyright: 'David Baque. Todos los derechos reservados.',
			mastodon: 'Seguir en Mastodon',
			twitter: 'Seguir en Twitter',
			github: 'Visitar el perfil de GitHub',
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
		footer: {
			copyright: 'David Baque. All rights reserved.',
			mastodon: 'Follow on Mastodon',
			twitter: 'Follow on Twitter',
			github: 'Visit the GitHub profile',
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
		footer: {
			copyright: 'David Baque. Tots els drets reservats.',
			mastodon: 'Seguir a Mastodon',
			twitter: 'Seguir a Twitter',
			github: 'Visitar el perfil de GitHub',
		},
	},
};
