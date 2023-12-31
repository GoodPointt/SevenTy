'use server'

import { z } from 'zod'

const schema = z
	.object({
		name: z
			.string()
			.trim()
			.min(1, { message: 'Name is required' })
			.regex(new RegExp(/^[a-zA-Z\u0400-\u04FF\s'-]+$/), 'Name should contain only letters'),
		phone: z
			.string()
			.trim()
			.min(1, { message: 'Phone number is required' })
			.regex(new RegExp(/^[\d+\-\s()]+$/), 'Phone should contain only numbers'),
		policy: z
			.string()
			.min(2, { message: 'invalid' })
			.nullable()
			.refine((value) => value === 'on', {
				message: 'Need to agreed processing of personal data',
			}),
	})
	.partial()

export interface IFormFields {
	name?: string
	phone?: string
	policy?: string
	message?: string
	errors?: {
		name?: string[]
		phone?: string[]
		policy?: string[]
	}
}

export async function submitData(
	prevState: IFormFields | undefined,
	formData: FormData
): Promise<IFormFields | undefined> {
	const name = formData.get('name')?.toString()
	const phone = formData.get('phone')?.toString()
	const policy = formData.get('policy')?.toString()

	const validatedFields = schema.safeParse({
		name,
		phone,
		policy,
	})

	if (!validatedFields.success) {
		const errorsRes = validatedFields.error.flatten().fieldErrors
		if (!policy) {
			return {
				errors: { ...errorsRes, policy: ['Need to agreed processing of personal data'] },
				message: 'Error.',
			}
		}

		return {
			errors: errorsRes,
			message: 'Error.',
		}
	}

	if (!policy) {
		return {
			errors: { policy: ['Need to agreed processing of personal data'] },
			message: 'Error.',
		}
	}

	try {
		return { name, phone, policy, message: 'success' }
	} catch (error) {
		console.error(error)
	}
}
