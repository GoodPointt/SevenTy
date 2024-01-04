'use client'
import { Flex, Button } from '@chakra-ui/react'

import { LocaleSwitcher } from '../localeSwitcher/LocaleSwitcher'
import { ThemeToggle } from '../themeToggle/ThemeToggle'

interface IProps {
	appControls: {
		buttons: {
			text: string
		}
	}
}
export const AppControls = ({ appControls }: IProps) => {
	return (
		<Flex alignItems="center" w="413px">
			<ThemeToggle />
			<LocaleSwitcher />
			<Button variant={'accent'} w="100%" paddingLeft="77px" paddingRight="77px">
				{appControls.buttons.text}
			</Button>
		</Flex>
	)
}
