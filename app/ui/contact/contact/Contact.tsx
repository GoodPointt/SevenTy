import { IContactProps } from '@/app/lib/interfaces'
import { Flex } from '@chakra-ui/react'

import SectionWrapper from '../../sectionWrapper/SectionWrapper'
import ContactForm from './contactForm/ContactForm'
import Contacts from './contacts/Contacts'

const Contact: React.FC<IContactProps> = ({ contacts, contactForm }) => {
	return (
		<SectionWrapper bg="formBlack" borderTopRadius={'50px'} id={'contactForm'}>
			<Flex
				flexDir={{ base: 'column', lg: 'row' }}
				justify={'space-between'}
				gap={{ base: 0, md: 20 }}
				h={'90vh'}
				p={{ base: '30px 0 0px 0', md: '50px 0 100px 0' }}
			>
				<Contacts contacts={contacts} />
				<ContactForm contactForm={contactForm} />
			</Flex>
		</SectionWrapper>
	)
}

export default Contact
