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
            <a href="/about">
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
            </a>
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
                    150 +
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
                    17 +
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
                    60 +
                  </Text>
                  <Text> Dump Truck </Text>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.785232875554!2d105.95347847495252!3d-6.024192093961236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4185eb2227f35d%3A0xe6f2bab5d7fd92d!2sPupuk%20Selat%20Sunda.%20PT!5e0!3m2!1sen!2sid!4v1726650173644!5m2!1sen!2sid"
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
          <a href="/layanan">
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
          </a>
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
          <Button
            size="lg"
            bg="red"
            color="white"
            px="10"
            onClick={() =>
              window.open(
                'https://wa.me/082111977709?text=Halo%20Bapak%20Dzaky,%0A%0ASaya%20mendapatkan%20informasi%20kontak%20Bapak%20dari%20website%20perusahaan%20Anda.%0AJika%20Bapak%20berkenan,%20mohon%20kesediaannya%20untuk%20memberikan%20respon%20terhadap%20pesan%20ini.%0A%0ATerima%20kasih%20atas%20perhatian%20Bapak.%0A%0AHormat%20saya,%0A[Nama%20Anda]',
                '_blank'
              )
            }
          >
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
