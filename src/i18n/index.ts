import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ja from './locales/ja'
import zhCN from './locales/zh-CN'
import zhTW from './locales/zh-TW'

export const SUPPORT_LOCALES = ['zh-TW', 'zh-CN', 'ja', 'en'] as const

export type AppLocale = (typeof SUPPORT_LOCALES)[number]

const LOCALE_STORAGE_KEY = 'mimic-challenge-locale'

const messages = {
	'zh-TW': zhTW,
	'zh-CN': zhCN,
	ja,
	en,
} as const

const localeAliasMap: Record<string, AppLocale> = {
	zh: 'zh-TW',
	'thong': 'zh-TW',
	'zh-hk': 'zh-TW',
	'zh-mo': 'zh-TW',
	'zh-tw': 'zh-TW',
	'zh-cn': 'zh-CN',
	'zh-sg': 'zh-CN',
	ja: 'ja',
	'ja-jp': 'ja',
	en: 'en',
	'en-us': 'en',
	'en-gb': 'en',
}

function isSupportedLocale(locale: string): locale is AppLocale {
	return SUPPORT_LOCALES.includes(locale as AppLocale)
}

function normalizeLocale(locale: string | undefined): AppLocale | null {
	if (!locale) {
		return null
	}

	if (isSupportedLocale(locale)) {
		return locale
	}

	return localeAliasMap[locale.toLowerCase()] ?? null
}

function resolveInitialLocale(): AppLocale {
	if (typeof window === 'undefined') {
		return 'zh-TW'
	}

	const storedLocale = normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY) ?? undefined)

	if (storedLocale) {
		return storedLocale
	}

	for (const language of window.navigator.languages) {
		const normalizedLocale = normalizeLocale(language)

		if (normalizedLocale) {
			return normalizedLocale
		}
	}

	return 'zh-TW'
}

const i18n = createI18n({
	legacy: false,
	locale: resolveInitialLocale(),
	fallbackLocale: 'en',
	globalInjection: true,
	messages,
	missingWarn: false,
	fallbackWarn: false,
})

export function setLocale(locale: AppLocale) {
	i18n.global.locale.value = locale

	if (typeof window !== 'undefined') {
		window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
		document.documentElement.lang = locale
	}
}

if (typeof document !== 'undefined') {
	document.documentElement.lang = i18n.global.locale.value
}

export default i18n