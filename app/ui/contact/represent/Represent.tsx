import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import SectionWrapper from '../../sectionWrapper/SectionWrapper'

const feats = [
	'e-commerce',
	'landing page',
	'corporate website',
	'portfolio website',
	'web-design',
	'website redesign',
	'website enhancement',
]
const Represent = () => {
	return (
		<SectionWrapper
			heading="Every completed project is a fully-fledged sales tool with a high level of conversion,
        tailored to your business processes.👋"
			id="represent-section"
			style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Grid templateColumns={{ base: '1fr', md: '1fr 1.5fr' }} gap={'32px'}>
				<Box>
					<Heading as={'h3'} mb={'40px'} fontSize={'18px'}>
						Planning a future project with us? We know how to become more usability and unique for
						your clients. We are always happy to help your business grow faster and more
						efficiently. 🔥
					</Heading>
					<Text as={'p'} mb={'16px'}>
						Good at
					</Text>
					<Flex as={'ul'} flexDir={'column'} gap={'4px'}>
						{feats.map((el) => (
							<Box as={'li'} display={'flex'} gap={'4px'} key={el}>
								<span>✅</span>
								{el}
							</Box>
						))}
					</Flex>
				</Box>
				<Box as="div" bgColor={'#000'} w={'full'} h={'477px'}></Box>
			</Grid>
		</SectionWrapper>
	)
}

export default Represent
