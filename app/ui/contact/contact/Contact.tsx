import { IContactProps } from '@/app/lib/interfaces'
import { Flex } from '@chakra-ui/react'

import SectionWrapper from '../../sectionWrapper/SectionWrapper'
import ContactForm from './contactForm/ContactForm'
import Contacts from './contacts/Contacts'

const Contact: React.FC<IContactProps> = ({ contacts, contactForm }) => {
	return (
		<SectionWrapper
			py={0}
			pt={{ base: '30px', lg: '90px', xl: '130px' }}
			id={'contactForm'}
			containerWrapStyles={{
				backgroundColor: '#111414',
				borderTopLeftRadius: '50px',
				borderTopRightRadius: '50px',
			}}
		>
			<Flex
				flexDir={{ base: 'column', lg: 'row' }}
				justify={'space-between'}
				gap={{ base: 0, md: 20 }}
				h={'100%'}
				p={{ base: '30px 0 0px 0', md: '120px 0 120px 0' }}
			>
				<Contacts contacts={contacts} />
				<ContactForm contactForm={contactForm} />
			</Flex>
		</SectionWrapper>
	)
}

export default Contact
