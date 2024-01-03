import { Flex, Text } from '@chakra-ui/react'

import SocialLinks from '../../landing/socialLinks/SocialLinks'
import SectionWrapper from '../../sectionWrapper/SectionWrapper'

const Footer = () => {
	return (
		<SectionWrapper
			as={'footer'}
			position={'fixed'}
			style={{ bottom: '0', left: '0', right: '0' }}
			py={{ base: '5px', lg: '15px', xl: '30px' }}
		>
			<Flex align={'center'} justify={'space-between'}>
				<Text
					color={'gray'}
					fontSize={{
						base: '12px',
						md: '14px',
						lg: '18px',
					}}
				>
					©SevenTy 2023
				</Text>
				<SocialLinks />
			</Flex>
		</SectionWrapper>
	)
}

export default Footer
