import React from 'react';
import {
  ChakraProvider,
  theme,
  Text,
  Box,
  Image,
  Heading,
  Wrap,
  Card,
  CardBody,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

KartuProyek.propTypes = {
  gambar: PropTypes.string,
  judul: PropTypes.string,
  teks: PropTypes.string,
};

KartuProyek.defaultProps = {
  gambar: '/assets/img/proyek1.png',
  judul: 'Perusahaan A',
  // teks: 'Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit. Pellentesque sed hendrerit tellus sed duis mauris vel.',
};

function KartuProyek({ gambar, judul, teks }) {
  return (
    <Box display="flex" justify="center" align="center">
      <Card maxW="2xl" justify="center" align="center">
        <CardBody>
          <Image src={gambar} />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="left">
              {judul}
            </Heading>
            <Text textAlign="left">{teks}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

function Proyek() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImg="/assets/img/background-flip.svg"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="right"
        minH="300"
        px={['5', '5', '10', '20']}
      >
        <Box w="750" textAlign="center">
          <Heading marginTop="20">Proyek Kami</Heading>
          <Text mt="2em" fontSize="large">
            Berikut Adalah Proyek Yang Sudah Kami Kerjakan.
          </Text>
        </Box>
        <SimpleGrid columns={[1, null, 2]} spacing="40px" my="20">
          <KartuProyek
            gambar="/assets/img/carousel1.webp"
            judul="Labour Supply"
            // teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit. Pellentesque sed hendrerit tellus sed duis mauris vel.'
          />
          <KartuProyek
            gambar="/assets/img/carousel2.webp"
            judul="Konstruksi Industri"
            // teks='Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit. Pellentesque sed hendrerit tellus sed duis mauris vel.'
          />
          <KartuProyek
            gambar="/assets/img/carousel3.webp"
            judul="Pengadaan Truck dan Alat Berat"
            // teks="Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit. Pellentesque sed hendrerit tellus sed duis mauris vel."
          />
          <KartuProyek
            gambar="/assets/img/carousel4.webp"
            judul="Scaffolding"
            // teks="Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit. Pellentesque sed hendrerit tellus sed duis mauris vel."
          />
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}
export default Proyek;
