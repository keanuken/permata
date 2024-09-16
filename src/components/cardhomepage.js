import React, { Children } from 'react';
import { Box, Text, Flex, Square } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function HpCard({ icon, children }) {
  return (
    <Box
      height="100"
      minW="250"
      color="black"
      borderColor="gray"
      bg="white"
      borderWidth="1px"
      display="flex"
      align="center"
      justify="center"
      borderRadius="lg"
      boxShadow="sm"
    >
      <Flex
        width="100%"
        flexFlow="column"
        justify="space-evenly"
        align="center"
      >
        <Flex
          width="100%"
          flexFlow="row"
          // justify="space-evenly"
          align="center"
          px="2em"
        >
          <Square size="60px" bg="red" borderRadius="lg">
            <FontAwesomeIcon
              icon={icon}
              size="xl"
              style={{ color: '#ffffff' }}
            />
          </Square>
          <Text as="b" fontSize="xl" mx="1em">
            {children}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

HpCard.propTypes = {
  icon: PropTypes.string,
};

HpCard.defaultProps = {
  icon: 'fa-solid fa-screwdriver-wrench',
};

export default HpCard;
