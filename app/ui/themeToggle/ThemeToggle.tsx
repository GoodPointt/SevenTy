'use client'
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

const MoonIcon = ({ color, width, height }: { color: string; width: string; height: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
		>
			<g clipPath="url(#clip0_493_62117)">
				<path
					d="M12.6299 21.2339C12.3326 21.2339 12.0339 21.2206 11.7339 21.1939C9.43546 20.9861 7.28271 19.9787 5.65061 18.347C4.0185 16.7154 3.01045 14.5629 2.80203 12.2645C2.5936 9.96608 3.198 7.66738 4.50997 5.76874C5.82194 3.8701 7.75834 2.49182 9.98192 1.87395C10.1167 1.83602 10.2591 1.83468 10.3946 1.87007C10.53 1.90546 10.6536 1.97629 10.7526 2.07528C10.8516 2.17427 10.9224 2.29785 10.9578 2.4333C10.9932 2.56875 10.9918 2.71118 10.9539 2.84595C10.561 4.2596 10.5505 5.75226 10.9237 7.17127C11.2968 8.59029 12.0401 9.88474 13.0776 10.9222C14.1151 11.9597 15.4096 12.7031 16.8286 13.0762C18.2476 13.4494 19.7403 13.4389 21.1539 13.0459C21.2887 13.008 21.4311 13.0067 21.5666 13.0421C21.702 13.0775 21.8256 13.1483 21.9246 13.2473C22.0236 13.3463 22.0944 13.4699 22.1298 13.6053C22.1652 13.7408 22.1638 13.8832 22.1259 14.0179C21.5445 16.0906 20.3026 17.9168 18.5886 19.2192C16.8747 20.5216 14.7825 21.229 12.6299 21.2339ZM9.14792 3.85395C7.93832 4.41476 6.88196 5.25925 6.06857 6.31567C5.25518 7.3721 4.7088 8.60924 4.47583 9.92201C4.24287 11.2348 4.33021 12.5844 4.73044 13.8562C5.13067 15.128 5.83195 16.2844 6.77472 17.2271C7.7175 18.1699 8.8739 18.8712 10.1457 19.2714C11.4175 19.6717 12.7671 19.759 14.0799 19.526C15.3926 19.2931 16.6298 18.7467 17.6862 17.9333C18.7426 17.1199 19.5871 16.0635 20.1479 14.8539C18.6593 15.0384 17.1481 14.8809 15.7295 14.3933C14.3109 13.9057 13.0223 13.101 11.9616 12.0403C10.9009 10.9796 10.0961 9.69093 9.60855 8.27233C9.12098 6.85373 8.96344 5.34261 9.14792 3.85395Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_493_62117">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button
			onClick={toggleColorMode}
			bg="transparent"
			cursor="pointer"
			padding={0}
			marginRight="30px"
		>
			<MoonIcon color={colorMode === 'light' ? '#000' : '#fff'} width="24px" height="24px" />
		</Button>
	)
}
