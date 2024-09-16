import React from 'react';
import {
  ChakraProvider,
  theme,
  Text,
  Box,
  Heading,
  Flex,
  Button,
  VStack,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Accordion,
  Square
} from '@chakra-ui/react';
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


Akordion.propTypes ={
    link: PropTypes.string,
    judul: PropTypes.string,
    teks: PropTypes.string,
}

Akordion .defaultProps ={
    link: '/assets/img/proyek1.png',
    judul: '1. Perusahaan A',
    teks: 'Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit. Pellentesque sed hendrerit tellus sed duis mauris vel.',
}


function Akordion({judul,teks,link}){
  return(
    <AccordionItem my='5' borderColor='rgba(0, 0, 0, 0)'>
        <Flex align='center' justify='space-evenly'>
            <Box w='90%' bg='white' borderRadius='5'>
                <AccordionButton 
                    _expanded={{
                        borderBottomColor: 'black', 
                        borderWidth:'1px'
                    }}
                    my='5px'
                    borderStyle='solid'
                    borderWidth='1px'
                    borderColor='rgba(0, 0, 0, 0)'
                    shadow='md'
                    >
                    <Box 
                      as="span" 
                      flex='1' 
                      textAlign='left'
                      >
                        <Text as='b'>{judul}</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>{teks}</AccordionPanel>
            </Box>
            <Square as='button' bg='white' borderColor='gray' minW='55' h='55' borderRadius='5' boxShadow='md'>
                <FontAwesomeIcon size='xl' icon="fa-solid fa-eye" style={{color:"red"}}/>
            </Square> 
        </Flex>        
    </AccordionItem>
  )
}

function Dokumen() {
    return (
      <ChakraProvider theme={theme}>
        <Box
            bgImg='/assets/img/background-flip.svg'
            bgRepeat='no-repeat'
            bgSize='contain'
            bgPos='right'
            minH='300'
            px={['5','5','10','20']}
        >
            <VStack spacing='30' minW={['0','0','638','638']} align='center' py='10'>
                <Button
                  size='lg'
                  bg='red'
                  color='white'
                  px='10'
                >
                  Dokumen
                </Button>
                <Heading textAlign='center' size='2xl'> PT. Permata Kencana Raya</Heading>
                <Text textAlign='center' w='45%' fontSize='lg'>Lorem ipsum dolor sit amet consectetur. Velit turpis faucibus habitant orci.</Text>
            </VStack>
            <Box maxW='1044' my='20'>
                <Accordion allowToggle>
                    <Akordion/> 
                    <Akordion/>
                    <Akordion/>
                    <Akordion/>
                    <Akordion/>
                    <Akordion/>
                    <Akordion/>
                    <Akordion/>
                </Accordion>
            </Box>
        </Box>
      </ChakraProvider>
    );
  }
export default Dokumen;