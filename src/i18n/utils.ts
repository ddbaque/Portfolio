import { defaultLocale, isLocale, type Locale } from './config';
import { ui } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
	const [, locale] = url.pathname.split('/');
	return isLocale(locale) ? locale : defaultLocale;
}

export function useTranslations(locale: Locale) {
	return ui[locale];
}

export function getPortfolioPath(locale: Locale, section?: string): string {
	const basePath = locale === defaultLocale ? '/' : `/${locale}/`;
	return section ? `${basePath}#${section}` : basePath;
}

export function getSpanishBlogPath(slug?: string): string {
	return slug ? `/es/blog/${slug}/` : '/es/blog/';
}
