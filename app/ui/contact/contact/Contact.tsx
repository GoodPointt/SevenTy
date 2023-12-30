import React from 'react';
import SectionWrapper from '../../sectionWrapper/SectionWrapper';

import ContactForm from './contactForm/ContactForm';
import { Flex } from '@chakra-ui/react';
import Contacts from './contacts/Contacts';

const Contact = () => {
  return (
    <SectionWrapper bg="formBlack" borderTopRadius={'50px'}>
      <Flex
        gap={{ base: '100px', lg: '126px', xl: '165' }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Contacts />
        <ContactForm />
      </Flex>
    </SectionWrapper>
  );
};

export default Contact;
