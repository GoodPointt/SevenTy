'use client'
import { i18n } from '@/i18n.config'
import { Link, List, ListItem, useColorMode } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import React from 'react'

export const LocaleSwitcher = () => {
	const pathName = usePathname()

	const { colorMode } = useColorMode()

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/'
		const segments = pathName.split('/')
		segments[1] = locale

		return segments.join('/')
	}

	const linksStyle = (locale: string) => {
		const isActive = pathName === `/${locale}`
		if (colorMode === 'light') {
			return isActive ? '#0D1010' : '#BDBDBD'
		} else {
			return isActive ? '#FAFAFA' : '#6c6e6e'
		}
	}

	const localesArr = i18n.locales

	return (
		<List display="flex" gap="10px" marginRight="50px">
			{localesArr.map((locale, index) => {
				const isBorder = index !== 0 && index !== localesArr.length

				return (
					<ListItem
						position="relative"
						key={locale}
						paddingLeft={isBorder ? '10px' : 0}
						_before={
							isBorder
								? {
										content: '""',
										position: 'absolute',
										display: 'inline-block',
										w: '2px',
										h: '70%',
										bg: '#ccc',
										top: 0,
										left: 0,
										bottom: 0,
										m: 'auto 0',
									}
								: {}
						}
					>
						<Link href={redirectedPathName(locale)} color={linksStyle(locale)}>
							{locale.toLocaleUpperCase()}
						</Link>
					</ListItem>
				)
			})}
		</List>
	)
}
