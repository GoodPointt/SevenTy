import { Locale } from '@/i18n.config'

export interface IParams {
	params: { lang: Locale }
}

export interface IContactProps {
	contacts: {
		ctaText: string
	}
	contactForm: {
		label: {
			name: string
			phone: string
		}
		policyTxt: string
		submitBtnTxt: string
		validation: {
			name: {
				invalid: string
				required: string
			}
			phone: {
				invalid: string
				required: string
			}
			policy: {
				invalid: string
				required: string
			}
		}
	}
}
