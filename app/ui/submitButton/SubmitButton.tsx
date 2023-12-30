import { Button } from '@chakra-ui/react'
import { useFormStatus } from 'react-dom'

interface ISubmitButton {
	children: React.ReactNode
	variant: 'accent' | 'accentAlt' | 'solid'
	isSubmitting: boolean
}

const SubmitButton: React.FC<ISubmitButton> = ({ children, variant, isSubmitting }) => {
	const { pending } = useFormStatus()

	return (
		<Button
			variant={variant}
			transition={'all 0.3s'}
			type="submit"
			isLoading={pending || isSubmitting}
			isDisabled={pending || isSubmitting}
			display={'flex'}
		>
			{children}
		</Button>
	)
}
export default SubmitButton
