import { socalLinks } from '@/app/lib/data';
import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ArrowSvg = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={color}
    >
      <g clip-path="url(#clip0_451_6902)">
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
  );
};

const SocialLinks = () => {
  return (
    <Flex as={'ul'}>
      {socalLinks.length > 0 &&
        socalLinks.map(({ title, url }) => (
          <li key={title}>
            <Link
              display={'flex'}
              gap={2}
              borderRadius={'5px'}
              p={2}
              href={url}
              size="md"
              minH="48px"
              width="fit-content"
              color="bodyBlack"
              transition="all 300ms ease"
              _hover={{
                // color: 'headerBlack',
                transform: 'translateX(1px) translateY(-1px)',
              }}
            >
              <Text>{title}</Text>
              <ArrowSvg color="headerBlack" />
            </Link>
          </li>
        ))}
    </Flex>
  );
};

export default SocialLinks;
