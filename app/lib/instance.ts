import axios from 'axios'

import { IFormFields } from './actions'
// import { notFound } from 'next/navigation'

export const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
})
// instance.defaults.headers.authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`

export const sendTgNotification = async (message: IFormFields) => {
	try {
		const { data } = await instance.post(`/notify`, message)

		return data
	} catch (e) {
		console.error(e)
	}
}
