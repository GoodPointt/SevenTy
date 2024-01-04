import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
	uk: () => import('@/app/dictionaries/uk.json').then((module) => module.default),
	en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
