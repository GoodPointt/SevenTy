import { EMAIL, PHONE } from '@/app/lib/constants'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Contacts = () => {
	return (
		<Flex flex={2} flexDir={'column'} gap={50} justify={'space-between'}>
			<Text
				color={'bodyWhite'}
				fontSize={'30px'}
				fontStyle={'normal'}
				fontWeight={600}
				lineHeight={'42px'}
			>
				Do you have a project? Contact us and receive a free consultation! We are always happy to
				share our experience.👋
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
