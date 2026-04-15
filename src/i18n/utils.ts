import { translations, defaultLang, type Lang } from './translations'

export function getLangFromUrl(url: URL): Lang {
  const [, , lang] = url.pathname.split('/')
  if (lang in translations) return lang as Lang
  return defaultLang
}

export function t(lang: Lang, key: keyof (typeof translations)[typeof defaultLang]): string {
  return translations[lang][key] ?? translations[defaultLang][key]
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  if (lang === defaultLang) return `/Portfolio/${path}`
  return `/Portfolio/${lang}/${path}`
}
