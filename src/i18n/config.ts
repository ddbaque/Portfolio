export const locales = ['es', 'en', 'ca'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

interface LocaleDefinition {
	label: string;
	htmlLang: string;
	dateLocale: string;
	openGraphLocale: string;
}

export const localeDefinitions: Record<Locale, LocaleDefinition> = {
	es: {
		label: 'ES',
		htmlLang: 'es',
		dateLocale: 'es-ES',
		openGraphLocale: 'es_ES',
	},
	en: {
		label: 'EN',
		htmlLang: 'en',
		dateLocale: 'en-GB',
		openGraphLocale: 'en_GB',
	},
	ca: {
		label: 'CAT',
		htmlLang: 'ca',
		dateLocale: 'ca-ES',
		openGraphLocale: 'ca_ES',
	},
};

export function isLocale(value: string | undefined): value is Locale {
	return locales.includes(value as Locale);
}
