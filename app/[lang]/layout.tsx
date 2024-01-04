import Footer from '@/app/ui/layout/footer/Footer'
import Header from '@/app/ui/layout/header/Header'
import { Locale, i18n } from '@/i18n.config'
import { ColorModeScript, theme } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import '@/app/ui/globals.css'

import { Providers } from '../providers'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SevenTy',
	description: 'Software development for any buisness cases',
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode
	params: { lang: Locale }
}) {
	return (
		<html lang={lang}>
			<body className={`${manrope.className} main`}>
				<Providers>
					<div className="gradient"></div>
					<div className="app">
						<Header lang={lang} />
						<ColorModeScript initialColorMode={theme.config.initialColorMode} />
						<main>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
