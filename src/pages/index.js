import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  theme,
  Flex,
  Center,
  Container,
  Heading,
  Button,
  HStack,
  Wrap,
  WrapItem,
  Highlight,
} from '@chakra-ui/react';
import HeroSlider, { SponsorSlider } from '../components/carousel';
import HpCard from '../components/cardhomepage';
import Faq from '../components/faq';

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <HeroSlider />
      <Center
        backgroundImage="/assets/img/background.svg"
        bgRepeat="no-repeat"
        bgSize="contain"
        bgPos="initial"
        minH="431px"
        w="full"
      >
        <VStack spacing="38">
          <Heading textAlign="center" py="10">
            {' '}
            Who We Are{' '}
          </Heading>
          <Container maxW="629" w="full" textAlign="center">
            <Heading>PT. Permata Kencana Raya</Heading>
            <Text fontSize="large" py="8" textAlign="justify">
              PT. Permata Kencana Raya, didirikan pada 4 Juli 2022, berkomitmen
              memberikan layanan berkualitas dalam bidang trucking dan
              penyediaan alat berat. Dengan dukungan sumber daya unggul, kami
              menjaga kepuasan klien melalui pelayanan terbaik dan profesional.
            </Text>
            <Link to="/about">
              <Button
                colorScheme="red"
                variant="outline"
                size="lg"
                px="50"
                py="5"
                marginTop="5"
              >
                Lihat Lebih
              </Button>
            </Link>
          </Container>
          <Wrap w="Full" justify="center" spacing="20x">
            <WrapItem>
              <Button
                colorScheme="gray"
                variant="outline"
                size="lg"
                py="7"
                mx="5"
                my="3"
                maxW="165"
                w="full"
              >
                <HStack>
                  <Text as="b" color="red">
                    200 +
                  </Text>
                  <Text> Karyawan </Text>
                </HStack>
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme="gray"
                variant="outline"
                size="lg"
                py="7"
                mx="5"
                my="3"
                maxW="165"
                w="full"
              >
                <HStack>
                  <Text as="b" color="red">
                    100 +
                  </Text>
                  <Text> Alat Berat </Text>
                </HStack>
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme="gray"
                variant="outline"
                size="lg"
                py="7"
                mx="5"
                my="3"
                maxW="165"
                w="full"
              >
                <HStack>
                  <Text as="b" color="red">
                    150 +
                  </Text>
                  <Text> Proyek </Text>
                </HStack>
              </Button>
            </WrapItem>
          </Wrap>
        </VStack>
      </Center>
      <Flex
        minH="399"
        bgImage="/assets/img/strip_img.png"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        w="full"
        flexFlow={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        align="center"
        justify="space-evenly"
      >
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.2332307754625!2d107.61466762844604!3d-6.898626099566974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64e746df771%3A0x11d6232ba09631e4!2sJl.%20Surapati%20No.21%2C%20Lebakgede%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040132!5e0!3m2!1sid!2sid!4v1709950817850!5m2!1sid!2sid"
            width="600"
            height="300"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box
          minWidth="300"
          h="50"
          display="flex"
          alignContent="center"
          justifyContent="center"
        >
          <Heading color={['black', 'black', 'black', 'white']}>
            Lokasi Kami
          </Heading>
        </Box>
      </Flex>
      <Box
        alignContent="center"
        justifyContent="center"
        display="flex"
        W="full"
        minH="600"
        bg="#F8F8F8"
        p="10"
      >
        <VStack spacing="35">
          <Heading textAlign="center" pb="10">
            {' '}
            Layanan kami{' '}
          </Heading>
          <Wrap maxW="auto" spacing="50px" justify="center">
            <WrapItem>
              <HpCard>PENGADAAN TRUCKING DAN ALAT BERAT</HpCard>
            </WrapItem>
            <WrapItem>
              <HpCard>CHEMICAL CLEANING</HpCard>
            </WrapItem>
            <WrapItem>
              <HpCard>KONSTRUKSI GEDUNG, TEKNIK DAN INDUSTRY</HpCard>
            </WrapItem>
            <WrapItem>
              <HpCard>SCAFFOLDING</HpCard>
            </WrapItem>
            <WrapItem>
              <HpCard>LABOUR SUPPLY</HpCard>
            </WrapItem>
            <WrapItem>
              <HpCard>JASA PARIWISATA</HpCard>
            </WrapItem>
          </Wrap>
          <Link to="/layanan">
            <Button
              colorScheme="red"
              variant="outline"
              size="lg"
              px="50"
              py="5"
              marginTop="5"
            >
              See
            </Button>
          </Link>
        </VStack>
      </Box>
      <Box
        bgImg="/assets/img/background-flip.svg"
        bgRepeat="no-repeat"
        bgSize="contain"
        bgPos="right"
        minH="600px"
        w="full"
        display="flex"
        justifyContent="center"
        alignContent="center"
        my="10"
      >
        <Container maxW="820" m="auto">
          <VStack>
            <Text as="b">
              <Highlight
                query="F.A.Q."
                styles={{
                  px: '5',
                  py: '1',
                  rounded: '10px',
                  bg: 'red',
                  color: 'white',
                }}
              >
                F.A.Q.
              </Highlight>
            </Text>
            <Heading mb="30px">Frequently Asked Questions</Heading>
            <Faq />
          </VStack>
        </Container>
      </Box>
      <Flex
        minH="399"
        bgImage={[
          '',
          '',
          '/assets/img/strip_img.png',
          '/assets/img/strip_img.png',
        ]}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize={['', '', 'cover', 'contain']}
        w="full"
        flexFlow={['column', 'column', 'column', 'row']}
        align="center"
        justify="space-evenly"
      >
        <Box
          minWidth="600"
          h="25"
          display="flex"
          alignContent="center"
          justifyContent="center"
        >
          <Heading color={['black', 'black', 'white', 'white']}>
            Mari Bergabung Bersama Kami
          </Heading>
        </Box>
        <Box
          minWidth="300"
          h="25"
          display="flex"
          alignContent="center"
          justifyContent="center"
        >
          <Button size="lg" bg="red" color="white" px="10">
            Ayo Ngobrol
          </Button>
        </Box>
      </Flex>
      <Box W="full">
        <Box
          maxW="1180"
          h="90"
          alignContent="center"
          display="flex"
          justifyContent="center"
          m="auto"
          pb="10"
        >
          {/* <SponsorSlider /> */}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default Home;
