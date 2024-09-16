import React from 'react';
import {Flex, Heading } from '@chakra-ui/react'
import PropTypes from "prop-types"
import {
  Box,
  Stack,
  Text
} from '@chakra-ui/react';

function Hero({bgImg, title, subTitle, arahTeks, tinggi}) {
    return(
        <Box 
            w='100%'
            h='100%'
            minH={tinggi} 
            backgroundImage={bgImg}
            bgRepeat='false'
            bgPos='center'
            backgroundSize='cover'
            justifyContent='center'
        > 
            <Flex 
            minW={["80%", "80%", "70%", "70%"]} 
            minH={tinggi} 
            h='100%'
            justify='center'
            >  
                <Stack 
                    py='auto'
                    px={{base:'8', lg:'7%'}}
                    gap='10'
                    align={arahTeks}
                    justify='center'
                    w='100%'
                >
                        <Heading 
                        w={["80%", "80%", "70%", "60%"]}
                        size='2xl' 
                        as='b' 
                        color='white' 
                        textAlign={arahTeks}
                        >
                            {title}
                        </Heading>
                        <Text 
                        size='sm' 
                        color='white' 
                        w={["80%", "80%", "70%", "50%"]}
                        textAlign={arahTeks}
                        > 
                            {subTitle}
                        </Text>                    
                </Stack>
            </Flex>
        </Box>
    );
}

Hero.propTypes ={
    bgImg: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    arahTeks: PropTypes.string,
    tinggi: PropTypes.string
}

Hero.defaultProps ={
    bgImg: '/assets/img/excavator.png',
    title: 'Hero',
    subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    arahTeks: "center",
    tinggi: '423'
}
export default Hero;