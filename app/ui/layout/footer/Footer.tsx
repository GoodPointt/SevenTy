import { Flex, Text } from '@chakra-ui/react'

import SocialLinks from '../../landing/socialLinks/SocialLinks'
import SectionWrapper from '../../sectionWrapper/SectionWrapper'

const Footer = () => {
	return (
		<SectionWrapper as={'footer'} position={'fixed'} style={{ bottom: '0', left: '0', right: '0' }}>
			<Flex align={'center'} justify={'space-between'}>
				<Text color={'gray'}>© SevenTy 2023</Text>
				<SocialLinks />
			</Flex>
		</SectionWrapper>
	)
}

export default Footer
