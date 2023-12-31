import SectionWrapper from '@/app/ui/sectionWrapper/SectionWrapper'
import { Center, Heading } from '@chakra-ui/react'
import React from 'react'

import SocialLinks from '../socialLinks/SocialLinks'

const Hero = () => {
	return (
		<SectionWrapper id={'hero'}>
			<Center h={'fit-content'}>
				<Heading
					as={'h1'}
					bg={'accent'}
					// bg={'accentAlt'}
					bgClip={'text'}
					color={'transparent'}
					fontSize={{ base: '100px', lg: '200px', xl: '280px' }}
					fontWeight={200}
				>
					SEVENTY
				</Heading>
			</Center>
			<SocialLinks />
		</SectionWrapper>
	)
}

export default Hero
