'use client'

import Logo from '@/public/img/SevenTy_Logo.png'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import SectionWrapper from '../../sectionWrapper/SectionWrapper'

const NavBar = () => {
	return (
		<Flex
			as="nav"
			gap={10}
			color={'bodyWhite'}
			bgColor={'headerBlack'}
			borderRadius={'50px'}
			w={'fit-content'}
			align={'center'}
		>
			<Link href="/#home">
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
						src={Logo}
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
			<Link
				href="/#hero"
				_hover={{ color: 'inactiveBlack' }}
				onClick={(e) => {
					e.preventDefault()
					document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				SevenTy
			</Link>
			<Link
				href="/#work"
				_hover={{ color: 'inactiveBlack' }}
				onClick={(e) => {
					e.preventDefault()
					document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				Work
			</Link>
			<Link
				href="/#contactForm"
				_hover={{ color: 'inactiveBlack' }}
				onClick={(e) => {
					e.preventDefault()
					document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				Contact
			</Link>

			{/*!?! THIS VARIANT ADD #ID INTO PATHNAME */}
			{/* <Link
				href="#contactForm"
				scroll={true}
				_hover={{ color: 'inactiveBlack' }}
				scrollBehavior={'smooth'}
			>
				1_TEST_SCROLL_LINK
			</Link> */}
		</Flex>
	)
}

const Header = () => {
	return (
		<SectionWrapper
			as={'header'}
			position={'fixed'}
			style={{ top: 0, left: 0, right: 0 }}
			py={{ base: '0', lg: '0', xl: '0' }}
		>
			<NavBar />
		</SectionWrapper>
	)
}

export default Header
