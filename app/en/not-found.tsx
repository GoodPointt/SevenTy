import { Button, Center, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import SocialLinks from '../ui/landing/socialLinks/SocialLinks'
import SectionWrapper from '../ui/sectionWrapper/SectionWrapper'

const NotFound = () => {
	return (
		<SectionWrapper>
			<Center flexDir={'column'} gap={6} h={480}>
				<Heading as={'h2'} fontWeight={'bold'}>
					😒 OOPS!
				</Heading>
				<Text>Looks like something went wrong</Text>

				<Button as={Link} href="/" variant={'accent'}>
					Let&apos;s try again
				</Button>
			</Center>
			<SocialLinks />
		</SectionWrapper>
	)
}

export default NotFound
