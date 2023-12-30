'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import SectionWrapper from '../../sectionWrapper/SectionWrapper'

const NavBar = () => {
	return (
		<>
			<Link href="/en">
				<Box
					borderRadius={'50px'}
					filter="brightness(100%)"
					position="relative"
					z-index="10"
					width="70px"
					height="70px"
					transition="all 500ms cubic-bezier(0.4, 0, 0.2, 1)"
					bgRepeat={'no-repeat'}
					bgPos={'center'}
					bgSize={'cover'}
					_hover={{
						cursor: 'pointer',
						transition: 'all 500ms ease-in-out',
						filter: 'brightness(130%)',
					}}
					css={{
						'&:hover img': {
							transform: 'scale(0.9)',
							transition: 'all 500ms, filter 500ms ease-in-out',
							filter: 'brightness(100%)',
						},
					}}
					overflow={'hidden'}
				>
					<Image
						src={'/img/SevenTy_Logo.png'}
						alt={'Seventy logtype'}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						style={{
							objectFit: 'cover',
							transition: 'all 500ms, filter 500ms ease-in-out',
						}}
					/>
				</Box>
			</Link>
			<Flex
				as="nav"
				gap={10}
				color={'bodyWhite'}
				bgColor={'headerBlack'}
				borderRadius={'50px'}
				w={'fit-content'}
				p={2}
			>
				<Link href="/en" _hover={{ color: 'inactiveBlack' }}>
					SevenTy
				</Link>
				<Link href="/en/work" _hover={{ color: 'inactiveBlack' }}>
					Work
				</Link>
				<Link href="/en/contact" _hover={{ color: 'inactiveBlack' }}>
					Contact
				</Link>
			</Flex>
		</>
	)
}

const Header = () => {
	return (
		<SectionWrapper as={'header'}>
			<NavBar />
		</SectionWrapper>
	)
}

export default Header
