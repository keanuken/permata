import React from 'react';
import {
  ChakraProvider,
  theme,
  Text,
  Box,
  Heading,
  Card,
  CardBody,
  Stack,
  SimpleGrid,
  Container,
  Square,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Hero from '../components/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

KartuLayanan.propTypes = {
  logo: PropTypes.string,
  judul: PropTypes.string,
  teks: PropTypes.string,
};

KartuLayanan.defaultProps = {
  logo: 'fa-solid fa-screwdriver-wrench',
  judul: 'Lorem',
  teks: 'Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit.',
};

function KartuLayanan({ logo, judul, teks }) {
  return (
    <Box display="flex" justify="center" align="center">
      <Card maxW="auto" justify="center" align="center" h="auto">
        <CardBody>
          <Square bg="red" size="75px" color="white" borderRadius="15">
            <FontAwesomeIcon
              icon={logo}
              size="2xl"
              style={{ color: '#ffffff' }}
            />
          </Square>
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="center" h="10" mb="5">
              {judul}
            </Heading>
            <Text textAlign="left">{teks}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

function Layanan() {
  return (
    <ChakraProvider theme={theme}>
      <Hero
        bgImg="/assets/img/excavator.png"
        title={'Hal Berat Terasa Mudah di Tangan kami'}
        subTitle=""
      />

      <Box
        bgImg="/assets/img/background.svg"
        bgRepeat="no-repeat"
        bgSize="contain"
        bgPos="left"
        minH="300"
        px={['5', '5', '10', '20']}
      >
        <Container maxW="884" minH="770" pt="20">
          <Heading textAlign="center">Layanan Kami</Heading>
          <SimpleGrid columns={[2, null, 3]} spacing="65px" py="20">
            <KartuLayanan
              logo="fa-solid fa-screwdriver-wrench"
              judul="Pengadaan Trucking dan Alat Berat"
              teks="Layanan penyediaan kendaraan berat dan alat-alat konstruksi yang dibutuhkan untuk proyek transportasi dan pembangunan."
            />
            <KartuLayanan
              logo="fa-solid fa-screwdriver-wrench"
              judul="Chemical Cleaning"
              teks="Proses pembersihan menggunakan bahan kimia khusus untuk menghilangkan kotoran, kerak, atau deposit dalam industri dan peralatan teknik."
            />
            <KartuLayanan
              logo="fa-solid fa-screwdriver-wrench"
              judul="Konstruksi Gedung, Teknik dan Industri"
              teks="Layanan pembangunan dan renovasi berbagai jenis gedung, termasuk perencanaan dan eksekusi konstruksi. Dan Layanan yang mencakup proyek-proyek rekayasa teknik serta dukungan untuk industri, seperti pemeliharaan mesin, fabrikasi, dan optimisasi proses produksi."
            />
            <KartuLayanan
              logo="fa-solid fa-screwdriver-wrench"
              judul="Scaffolding"
              teks="Penyediaan dan pemasangan perancah untuk keperluan akses sementara di proyek konstruksi atau pemeliharaan gedung tinggi."
            />
            <KartuLayanan
              logo="fa-solid fa-screwdriver-wrench"
              judul="Labour Suply"
              teks="Layanan penyediaan tenaga kerja terlatih untuk berbagai sektor industri, termasuk konstruksi, teknik, dan manufaktur."
            />
            <KartuLayanan
              logo="fa-solid fa-screwdriver-wrench"
              judul="Jasa Pariwisata"
              teks=" Layanan yang mencakup penyediaan paket wisata, transportasi, dan akomodasi untuk keperluan perjalanan dan pariwisata."
            />
          </SimpleGrid>
        </Container>
        <Heading textAlign="center" pt="5" pb="10">
          Kami Menyediakan yang Terbaik buat Anda
        </Heading>
      </Box>
    </ChakraProvider>
  );
}
export default Layanan;
