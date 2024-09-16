import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  propNames,
} from '@chakra-ui/react';

export default function Article({ children, title, image, rev }) {
  let arah = { base: 'column-reverse', md: 'row' };
  if (rev) {
    arah = { base: 'column', md: 'row-reverse' };
  }
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={arah}
      wrap="no-wrap"
      minH="70vh"
      my={{ base: 12, lg: 4 }}
      px={{ base: '8', lg: '7%' }}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '60%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
        justify={['center', 'center', 'flex-start', 'flex-start']}
        h="80%"
        minH="50vh"
      >
        <Heading
          as="h2"
          size="md"
          fontWeight="bold"
          color="red"
          textShadow="1px 1px #ff0000"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Text
          as="h3"
          size="sm"
          color="black"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {children}
        </Text>
      </Stack>
      <Box
        w={{ base: '80%', sm: '60%', md: '50%' }}
        m={{ base: 12, md: 0 }}
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <Image
          src={image}
          objectFit="cover"
          maxBlockSize="400"
          size="80%"
          aspectRatio={1 / 1}
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  rev: PropTypes.bool,
};

Article.defaultProps = {
  image: '/assets/img/carousel1.webp',
};
