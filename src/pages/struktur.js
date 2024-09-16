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
  CardFooter,
  Divider,
  HStack,
  Square,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

KartuOrg.propTypes = {
  // gambar: PropTypes.string,
  jabatan: PropTypes.string,
  nama: PropTypes.string,
  teks: PropTypes.string,
};

KartuOrg.defaultProps = {
  // gambar: '/assets/img/proyek1.png',
  jabatan: 'Chap Chip Chup',
  nama: 'Mr. Alex',
  teks: 'Lorem ipsum dolor sit amet consectetur. Habitasse sit ultricies turpis leo ut odio sit. Pellentesque sed hendrerit tellus sed duis mauris vel.',
};

function KartuOrg({ gambar, jabatan, teks, nama, children }) {
  return (
    <Card
      direction={['column', 'column', 'column', 'row']}
      overflow="hidden"
      variant="outline"
      w="512"
      boxShadow="md"
    >
      <Image
        objectFit="cover"
        maxW={['100%', '100%', '100%', '185']}
        // src={gambar}
        // alt={jabatan}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{nama}</Heading>
          <Heading size="sm" pt="2">
            {jabatan}
          </Heading>
          <Divider borderColor="black" py="2" />
          <Text pt="2">{teks}</Text>
        </CardBody>
        <CardFooter>{children}</CardFooter>
      </Stack>
    </Card>
  );
}

function StrukturOrganisasi() {
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
          <Heading marginTop="20">Pemimpin Kami</Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px" my="20">
          <KartuOrg
            nama="Muhammad Dzaky Abidzar"
            // gambar='/assets/img/proyek1.png'
            jabatan="Komisaris"
            teks="Bertugas memberikan arahan strategis dan pengawasan terhadap jalannya perusahaan. Komisaris memastikan bahwa perusahaan berjalan sesuai dengan visi, misi, serta kebijakan yang telah ditetapkan."
          >
            {/* <Stack>
              <Square
                as="button"
                bg="red"
                borderColor="gray"
                minW="39"
                h="39"
                borderRadius="5"
                boxShadow="md"
              >
                <FontAwesomeIcon
                  size="lg"
                  icon="fa-solid fa-eye"
                  style={{ color: 'white' }}
                />
              </Square>
            </Stack> */}
          </KartuOrg>
          <KartuOrg
            nama="Fauzi Sabrawi"
            // gambar="/assets/img/proyek1.png"
            jabatan="Direktur Utama"
            teks="Memimpin dan mengelola keseluruhan operasi perusahaan, termasuk membuat keputusan strategis untuk mencapai tujuan perusahaan. Bertanggung jawab langsung terhadap kinerja perusahaan secara keseluruhan."
          >
            {/* <Stack>
              <Square
                as="button"
                bg="red"
                borderColor="gray"
                minW="39"
                h="39"
                borderRadius="5"
                boxShadow="md"
              >
                <FontAwesomeIcon
                  size="lg"
                  icon="fa-solid fa-eye"
                  style={{ color: 'white' }}
                />
              </Square>
            </Stack> */}
          </KartuOrg>
          <KartuOrg
            nama="Febbryna Wahyu Utami"
            // gambar="/assets/img/proyek1.png"
            jabatan="Manager HRD & GA"
            teks="Mengelola sumber daya manusia dan administrasi umum, termasuk rekrutmen, pelatihan, pengembangan karyawan, serta urusan administratif seperti fasilitas dan perlengkapan kantor."
          >
            {/* <Stack>
              <Square
                as="button"
                bg="red"
                borderColor="gray"
                minW="39"
                h="39"
                borderRadius="5"
                boxShadow="md"
              >
                <FontAwesomeIcon
                  size="lg"
                  icon="fa-solid fa-eye"
                  style={{ color: 'white' }}
                />
              </Square>
            </Stack> */}
          </KartuOrg>
          <KartuOrg
            nama="Nurul Fakiyah"
            // gambar="/assets/img/proyek1.png"
            jabatan="Manager Accounting & Finance"
            teks="Bertanggung jawab atas pengelolaan keuangan perusahaan, termasuk laporan keuangan, budgeting, perencanaan pajak, dan audit. Mengawasi aktivitas akuntansi untuk memastikan kelancaran aliran dana."
          >
            {/* <Stack>
              <Square
                as="button"
                bg="red"
                borderColor="gray"
                minW="39"
                h="39"
                borderRadius="5"
                boxShadow="md"
              >
                <FontAwesomeIcon
                  size="lg"
                  icon="fa-solid fa-eye"
                  style={{ color: 'white' }}
                />
              </Square>
            </Stack> */}
          </KartuOrg>
          <KartuOrg
            nama="Alawi Syafruddin"
            // gambar="/assets/img/proyek1.png"
            jabatan="Manager Project"
            teks="Memimpin dan mengawasi pelaksanaan proyek perusahaan, mulai dari perencanaan, pengelolaan sumber daya, hingga memastikan proyek selesai tepat waktu dengan kualitas yang diharapkan."
          >
            {/* <Stack>
              <Square
                as="button"
                bg="red"
                borderColor="gray"
                minW="39"
                h="39"
                borderRadius="5"
                boxShadow="md"
              >
                <FontAwesomeIcon
                  size="lg"
                  icon="fa-solid fa-eye"
                  style={{ color: 'white' }}
                />
              </Square>
            </Stack> */}
          </KartuOrg>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}
export default StrukturOrganisasi;
