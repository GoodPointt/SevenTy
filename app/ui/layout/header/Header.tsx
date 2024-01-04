import { getDictionary } from '@/app/lib/dictionary'
import { Locale } from '@/i18n.config'
import { Flex } from '@chakra-ui/react'

import { AppControls } from '../../appControls/AppControls'
import { NavBar } from '../../navBar/NavBar'
import SectionWrapper from '../../sectionWrapper/SectionWrapper'

const Header = async ({ lang }: { lang: Locale }) => {
	const { navigation, appControls } = await getDictionary(lang)

	return (
		<SectionWrapper
			as={'header'}
			position={'fixed'}
			style={{ top: 30, left: 0, right: 0 }}
			py={{ base: '0', lg: '0', xl: '0' }}
		>
			<Flex justifyContent="space-between">
				<NavBar navigation={navigation} />
				<AppControls appControls={appControls} />
			</Flex>
		</SectionWrapper>
	)
}

export default Header
