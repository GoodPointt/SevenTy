'use client'

import { submitData } from '@/app/lib/actions'
import { sendTgNotification } from '@/app/lib/instance'
import { IContactProps } from '@/app/lib/interfaces'
import sendEmail from '@/app/lib/utils/sendEmail'
import SubmitButton from '@/app/ui/submitButton/SubmitButton'
import { Box, Checkbox, Flex, FormControl, FormLabel, Input, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'

const inactiveBlack = 'rgba(250, 250, 250, 0.4)'

const ContactForm: React.FC<Omit<IContactProps, 'contacts'>> = ({
	contactForm: {
		label,
		policyTxt,
		submitBtnTxt,
		validation: { name, phone, policy },
	},
}) => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const [state, dispatch] = useFormState(submitData, undefined)
	const ref = useRef<HTMLFormElement | null>(null)

	useEffect(() => {
		;(async () => {
			if (state?.message === 'success') {
				try {
					setIsSubmitting(true)
					await sendTgNotification({ name: state.name, phone: state.phone })
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
			flex={2}
			flexDir={'column'}
			gap={{ base: '40px', lg: 0 }}
			justify={{ base: 'center', lg: 'space-between' }}
		>
			<Flex flexDir={'column'} gap={{ base: '35px', md: '40px', lg: '100px' }}>
				<FormControl variant="floating" id="name">
					<Tooltip
						label={nameError && nameError === 'required' ? name.required : name.invalid}
						hasArrow
						arrowSize={13}
						isOpen={!!nameError}
						borderRadius={'10px'}
					>
						<Box
							borderBottom={`1px solid ${nameError ? 'crimson' : inactiveBlack}`}
							position={'relative'}
						>
							<Input
								fontSize={'20px'}
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
							<FormLabel color={inactiveBlack} fontSize={{ base: '14px', md: '18px' }}>
								{label.name}
							</FormLabel>
						</Box>
					</Tooltip>
				</FormControl>
				<FormControl variant="floating" id="phone" isInvalid={false}>
					<Tooltip
						label={phoneError && phoneError === 'required' ? phone.required : phone.invalid}
						hasArrow
						arrowSize={13}
						isOpen={!!phoneError}
						borderRadius={'10px'}
					>
						<Box
							borderBottom={`1px solid ${phoneError ? 'crimson' : inactiveBlack}`}
							pos={'relative'}
						>
							<Input
								name="phone"
								type="tel"
								fontSize={'20px'}
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
							<FormLabel color={inactiveBlack} fontSize={{ base: '14px', md: '18px' }}>
								{label.phone}
							</FormLabel>
						</Box>
					</Tooltip>
				</FormControl>
				<FormControl>
					<Tooltip
						mt={'8px'}
						ml={'-7px'}
						label={policyError && policyError === 'required' ? policy.required : policy.invalid}
						hasArrow
						arrowSize={16}
						isOpen={!!policyError}
						borderRadius={'10px'}
						placement="bottom-start"
					>
						<Checkbox
							name="policy"
							px={4}
							colorScheme="gray"
							fontStyle={'normal'}
							fontWeight={500}
							color={inactiveBlack}
							css={{
								'& .chakra-checkbox__control': {
									border: `1px solid ${policyError ? 'crimson' : inactiveBlack}`,
								},

								'& span': {
									fontSize: '16px',
									lineHeight: 1.1,
								},
							}}
						>
							{policyTxt}
						</Checkbox>
					</Tooltip>
				</FormControl>
			</Flex>
			<SubmitButton variant={'accent'} isSubmitting={isSubmitting}>
				{submitBtnTxt}
			</SubmitButton>
		</Flex>
	)
}

export default ContactForm
