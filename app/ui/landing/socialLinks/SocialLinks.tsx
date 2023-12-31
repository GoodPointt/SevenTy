import { SOCIAL_LINKS } from '@/app/lib/constants'
import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const ArrowSvg = ({ color }: { color: string }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={color}>
			<g clipPath="url(#clip0_451_6902)">
				<path
					d="M4.34568 13.0197L10.9432 6.42212L10.9432 12.4775L12.4774 12.4775V3.8037H3.80357L3.80357 5.33789L9.85899 5.33789L3.26145 11.9354L4.34568 13.0197Z"
					// fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_451_6902">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

const SocialLinks = () => {
	return (
		<Flex as={'ul'}>
			{SOCIAL_LINKS.length > 0 &&
				SOCIAL_LINKS.map(({ title, url }) => (
					<li key={title}>
						<Link
							display={'flex'}
							gap={2}
							justifyContent={'center'}
							alignItems={'center'}
							borderRadius={'5px'}
							p={2}
							href={url}
							size="md"
							minH="48px"
							width="fit-content"
							color="gray"
							transition="all 300ms ease"
							_hover={{
								color: 'gray.700',
							}}
							css={{
								'&:hover svg': {
									transform: 'translateX(1px) translateY(-1px)',
									transition: 'all 300ms ease',
								},
								'& svg': {
									transition: 'all 300ms ease',
								},
							}}
						>
							<Text
								fontSize={{
									base: '12px',
									md: '14px',
									lg: '18px',
								}}
							>
								{title}
							</Text>
							<ArrowSvg color="gray" />
						</Link>
					</li>
				))}
		</Flex>
	)
}

export default SocialLinks
