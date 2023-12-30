'use client'

import { submitData } from '@/app/lib/actions'
import sendEmail from '@/app/lib/utils/sendEmail'
import SubmitButton from '@/app/ui/submitButton/SubmitButton'
import {
	Box,
	Checkbox,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'

const inactiveBlack = 'rgba(250, 250, 250, 0.4)'

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const [state, dispatch] = useFormState(submitData, undefined)
	const ref = useRef<HTMLFormElement | null>(null)

	useEffect(() => {
		;(async () => {
			if (state?.message === 'success') {
				try {
					setIsSubmitting(true)
					const res = await sendEmail(state)
					if (res?.status === 200) {
						alert(
							`👌 ✅ 🌈 ❤️\n\n😎${state?.name} \n\n📞${state?.phone} \n\nSubmitted succesfully!`
						)

						ref.current?.reset()
					}
				} catch (error) {
					console.error(error)
				} finally {
					setIsSubmitting(false)
				}
			}
		})()
	}, [state])

	const nameError =
		state?.errors?.name && state?.errors?.name.length > 0 ? state.errors.name[0] : null

	const phoneError =
		state?.errors?.phone && state?.errors?.phone.length > 0 ? state.errors.phone[0] : null

	const policyError =
		state?.errors?.policy && state?.errors?.policy.length > 0 ? state.errors.policy[0] : null

	return (
		<Flex
			as={'form'}
			action={dispatch}
			ref={ref}
			flexDir={'column'}
			gap={50}
			justify={'space-between'}
		>
			<Flex flexDir={'column'} gap={10}>
				<FormControl variant="floating" id="name">
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
						<FormLabel color={inactiveBlack}>Name*</FormLabel>
						{nameError && (
							<FormHelperText color={'error'} pos={'absolute'} bottom={'-5'} right={'0'}>
								Invalid Name
							</FormHelperText>
						)}
					</Box>
				</FormControl>
				<FormControl variant="floating" id="phone" isInvalid={false}>
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
						<FormLabel color={inactiveBlack}>Phone*</FormLabel>
						{phoneError && (
							<FormHelperText pos={'absolute'} bottom={'-5'} right={'0'} color={'error'}>
								Invalid phone
							</FormHelperText>
						)}
					</Box>
				</FormControl>
				<FormControl mt={8}>
					<Checkbox
						name="policy"
						px={4}
						colorScheme="gray"
						fontSize={'12px'}
						fontStyle={'normal'}
						fontWeight={500}
						lineHeight={'13.2px'}
						color={policyError ? 'error' : inactiveBlack}
						css={{
							'& .chakra-checkbox__control': {
								border: `1px solid ${policyError ? 'crimson' : inactiveBlack}`,
							},
						}}
					>
						By clicking the button, I agree to the processing of personal data.
					</Checkbox>
				</FormControl>
			</Flex>
			<SubmitButton variant={'accent'} isSubmitting={isSubmitting}>
				Get a free consultation
			</SubmitButton>
		</Flex>
	)
}

export default ContactForm
