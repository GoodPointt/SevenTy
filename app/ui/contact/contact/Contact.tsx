import { IContactProps } from '@/app/lib/interfaces'
import { Flex } from '@chakra-ui/react'

import SectionWrapper from '../../sectionWrapper/SectionWrapper'
import ContactForm from './contactForm/ContactForm'
import Contacts from './contacts/Contacts'

const Contact: React.FC<IContactProps> = ({ contacts, contactForm }) => {
	return (
		<SectionWrapper
			py={0}
			pt={{ base: '0px', lg: '90px', xl: '130px' }}
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
				gap={{ base: 0, lg: 10, xl: 20 }}
				h={'100%'}
				p={{
					base: '30px 0 0px 0',
					md: '80px 0 80px 0',
					'2xl': '180px 0 200px 0',
				}}
				margin={'auto 0'}
				maxH={{ '2xl': '1000px' }}
			>
				<Contacts contacts={contacts} />
				<ContactForm contactForm={contactForm} />
			</Flex>
		</SectionWrapper>
	)
}

export default Contact
