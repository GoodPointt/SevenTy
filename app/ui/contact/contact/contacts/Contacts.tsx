import { EMAIL, PHONE } from '@/app/lib/constants'
import { IContactProps } from '@/app/lib/interfaces'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Contacts: React.FC<Omit<IContactProps, 'contactForm'>> = ({ contacts: { ctaText } }) => {
	return (
		<Flex
			flex={2}
			flexDir={'column'}
			gap={{ base: '40px', lg: 0 }}
			justify={{ base: 'center', lg: 'space-between' }}
		>
			<Text
				color={'bodyWhite'}
				fontSize={{ base: '20px', md: '30px', lg: '40px' }}
				fontStyle={'normal'}
				fontWeight={600}
				lineHeight={1.4}
			>
				{ctaText}
			</Text>
			<Flex justify={'space-between'} gap={'20px'}>
				<Button as={'a'} href={`mailto:${EMAIL}`} variant={'accentAlt'}>
					{EMAIL}
				</Button>
				<Button as={'a'} href={`tel:${PHONE}`} variant={'accentAlt'}>
					{PHONE}
				</Button>
			</Flex>
		</Flex>
	)
}

export default Contacts
