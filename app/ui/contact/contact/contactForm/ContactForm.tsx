'use client';

import { submitData } from '@/app/lib/actions';
import SubmitButton from '@/app/ui/submitButton/SubmitButton';
import {
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { relative } from 'path';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

const inactiveBlack = 'rgba(250, 250, 250, 0.4)';

const ContactForm = () => {
  const [state, dispatch] = useFormState(submitData, undefined);
  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    (() => {
      if (state?.message === 'succsess') {
        // sendEmail(state);

        ref.current?.reset();
        // toast({
        //   status: 'success',
        //   title: dictionary.formContact.toasts.form.success,
        // });
      }
    })();
  }, [state]);

  const nameError =
    state?.errors?.name && state?.errors?.name.length > 0
      ? state.errors.name[0]
      : null;

  const phoneError =
    state?.errors?.phone && state?.errors?.phone.length > 0
      ? state.errors.phone[0]
      : null;

  return (
    <form action={dispatch} ref={ref}>
      <FormControl variant="floating" id="name" isRequired>
        <Box
          borderBottom={`1px solid ${nameError ? 'crimson' : inactiveBlack}`}
          position={'relative'}
        >
          <Input
            name="name"
            type="text"
            color={'bodyWhite'}
            placeholder=" "
            border={'none'}
            outline={'none'}
            boxShadow={'none'}
            borderColor={'transparent'}
            _focus={{
              outlineColor: 'transparent',
              borderColor: 'transparent',
              boxShadow: 'none',
            }}
          />
          <FormLabel color={inactiveBlack}>Name</FormLabel>
          {nameError && (
            <FormHelperText
              color={'error'}
              pos={'absolute'}
              bottom={'-5'}
              right={'0'}
            >
              Invalid Name
            </FormHelperText>
          )}
        </Box>
      </FormControl>
      <FormControl
        variant="floating"
        id="phone"
        isRequired
        isInvalid={false}
        mt={8}
      >
        <Box
          borderBottom={`1px solid ${phoneError ? 'crimson' : inactiveBlack}`}
          pos={'relative'}
        >
          <Input
            name="phone"
            type="tel"
            color={'bodyWhite'}
            placeholder=" "
            border={'none'}
            outline={'none'}
            boxShadow={'none'}
            borderColor={'transparent'}
            _focus={{
              outlineColor: 'transparent',
              borderColor: 'transparent',
              boxShadow: 'none',
            }}
          />
          <FormLabel color={inactiveBlack}>Phone</FormLabel>
          {phoneError && (
            <FormHelperText
              pos={'absolute'}
              bottom={'-5'}
              right={'0'}
              color={'error'}
            >
              Invalid phone
            </FormHelperText>
          )}
        </Box>
      </FormControl>
      <Checkbox
        isRequired
        my={8}
        px={4}
        colorScheme="gray"
        defaultChecked
        fontSize={'12px'}
        fontStyle={'normal'}
        fontWeight={500}
        lineHeight={'13.2px'}
        color={inactiveBlack}
        css={{
          '& .chakra-checkbox__control': {
            border: `1px solid ${inactiveBlack}`,
          },
        }}
      >
        By clicking the button, I agree to the processing of personal data.
      </Checkbox>
      <SubmitButton variant={'accent'}>Get a free consultation</SubmitButton>
    </form>
  );
};

export default ContactForm;
