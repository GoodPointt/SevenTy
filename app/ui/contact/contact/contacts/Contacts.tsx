import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Contacts = () => {
  return (
    <Box flex={2}>
      <Text
        color={'bodyWhite'}
        fontSize={'30px'}
        fontStyle={'normal'}
        fontWeight={600}
        lineHeight={'42px'}
      >
        Do you have a project? Contact us and receive a free consultation! We
        are always happy to share our experience.👋
      </Text>
      <Flex justify={'space-between'} gap={'20px'}>
        <Button as={'a'} href="mailto:7ty.dev@gmail.com" variant={'accentAlt'}>
          seventy@gmail.com
        </Button>
        <Button as={'a'} href="tel:+380684004040" variant={'accentAlt'}>
          +380684004040
        </Button>
      </Flex>
    </Box>
  );
};

export default Contacts;
