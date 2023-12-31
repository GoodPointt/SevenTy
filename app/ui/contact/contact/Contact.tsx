import { Flex } from '@chakra-ui/react'
import React from 'react'

import SectionWrapper from '../../sectionWrapper/SectionWrapper'
import ContactForm from './contactForm/ContactForm'
import Contacts from './contacts/Contacts'

const Contact = () => {
	return (
		<SectionWrapper bg="formBlack" borderTopRadius={'50px'} id={'contactForm'}>
			<Flex gap={{ base: '100px', lg: '126px', xl: '165' }} flexDir={{ base: 'column', lg: 'row' }}>
				<Contacts />
				<ContactForm />
			</Flex>
		</SectionWrapper>
	)
}

export default Contact
