import React from 'react';
import {
  ChakraProvider,
  theme,
  Text,
  Box,
  Heading,
  HStack,
  Stack,
  SimpleGrid,
  Container
} from '@chakra-ui/react';
import PropTypes from "prop-types"
import Hero from '../components/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Entri.propTypes ={
  teks: PropTypes.string,
}

Entri.defaultProps ={
  teks: 'Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.',
}

function Entri({teks}){
  return(
    <Box 
        display='flex' 
        align='center' 
        maxW='400'
        bg={['white','white','White','unset']} 
        p='2' 
        borderRadius='10'
        boxShadow={['xl','xl', 'xl','unset']}
        borderColor={['gray','gray','gray','unset']}
        justify='center'
    >
        <FontAwesomeIcon icon="fa-solid fa-check" size='3x' style={{color: 'red',}} />
        <Text ml='5' whiteSpace="pre-line" w='100%' maxW='300' textAlign='left'>{teks}</Text>
    </Box>
  )
}

IconBox.propTypes ={
    teks: PropTypes.string,
    icon: PropTypes.string,
    sub: PropTypes.string
  }
  
IconBox.defaultProps ={
    judul: 'Lorem ipsum',
    icon: "fa-solid fa-truck-pickup",
    sub: "123++"
  }
  

function IconBox({icon,judul,sub}){
    return(
        <Box maxW='204' minW='204' h='93' bg='red' borderRadius='14'>
            <HStack dir='row' h='100%' w='100%' align='center' justify='center' spacing='5'>
                <FontAwesomeIcon icon={icon} size='2xl' style={{color: 'white',}}/>
                <Stack dir='column'>
                    <Text textAlign='center' color='white'>{judul}</Text>
                    <Text textAlign='center' color='white'as='b'>{sub}</Text>
                </Stack>
            </HStack>
        </Box>
    )
}


function Peralatan() {
    return (
      <ChakraProvider theme={theme}>
        <Hero
        bgImg= '/assets/img/excavator.png'
        title= 'Peralatan'
        arahTeks='left'
        subTitle= {""}
        />
        <Box
            bgImg='/assets/img/background.svg'
            bgRepeat='no-repeat'
            bgSize='contain'
            bgPos='left'
            px={['5','5','10','20']}
            my='30'
        >
            <Container maxW='1134'>
                <Stack spacing='86' pb='20'>
                    <Heading maxW='514'>
                        Rencanakan dan Bangun menjadi lebih baik
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='10' maxW='800'>
                        <Entri teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.' />
                        <Entri teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.' />
                        <Entri teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.' />
                        <Entri teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.' />
                        <Entri teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.' />
                        <Entri teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.' />
                    </SimpleGrid>
                    <SimpleGrid columns={[1, 2, 2, 4]} spacing='94'>
                        <IconBox
                            judul='Lorem ipsum'
                            icon="fa-solid fa-truck-pickup"
                            sub='123+'
                        />
                        <IconBox
                            judul='Lorem ipsum'
                            icon="fa-solid fa-truck-pickup"
                            sub='321+'
                        />
                        <IconBox
                            judul='Lorem ipsum'
                            icon="fa-solid fa-truck-pickup"
                            sub='123+'
                        />
                        <IconBox
                            judul='Lorem ipsum'
                            icon="fa-solid fa-truck-pickup"
                            sub='321+'
                        />
                    </SimpleGrid>
                </Stack>
                
            </Container>
        </Box>
      </ChakraProvider>
    );
  }
export default Peralatan;