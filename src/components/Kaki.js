import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Grid,
  GridItem,
  Stack,
  Image,
  Text,
  HStack,
  Flex,
  Spacer,
  StackDivider,
} from '@chakra-ui/react';

function Kaki() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="130" bg="#F8F8F8" py="10">
        <Stack
          direction={['column', 'column', 'column', 'row']}
          spacing="25px"
          px={['10', '5', '5', '10']}
          minH="130"
        >
          <Box h="100" minw="368" my="5">
            <Grid
              h="100%"
              templateColumns="repeat(4, 1fr)"
              templateRows="repeat(5, 1fr)"
              gap="2"
            >
              <GridItem
                minW="102"
                colStart={1}
                rowSpan={5}
                display="flex"
                alignItems="center"
                mx="5"
              >
                <Image
                  src="/assets/img/logo_perusahaan.png"
                  maxBlockSize="102"
                  objectFit="cover"
                />
              </GridItem>
              <GridItem minW="253" colStart={2} colSpan={3}>
                <Text fontSize="md" as="b">
                  PT. PERMATA KENCANA RAYA
                </Text>
              </GridItem>
              <GridItem colStart={2} rowStart={3} colSpan={3}>
                <Text fontSize="sm">
                  Jl. Raya Karang Bolong No.Km 119, Kepuh, Kec. Ciwandan, Kota
                  Cilegon, Banten 42446
                </Text>
                <Text
                  fontSize="sm"
                  onClick={() =>
                    window.open('https://wa.me/082111977709', '_blank')
                  }
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Whatsapp: +6282111977709
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  Telephone : 02547960591
                </Text>
              </GridItem>
            </Grid>
          </Box>
          <Box h="120" w="100%" minW="259" mx="5" my="5">
            <Grid
              h="100%"
              templateRows="repeat(6, 1fr)"
              templateColumns="repeat(2, 1fr)"
              columnGap="25"
            >
              <GridItem colStart={1} rowSpan={2}>
                <Text fontSize="sm" as="b">
                  Tentang
                </Text>
              </GridItem>
              <GridItem colStart={1}>
                <a href="/proyek">
                  <Text fontSize="sm" _hover={{ color: 'gray.500' }}>
                    Proyek
                  </Text>
                </a>
              </GridItem>
              <GridItem colStart={1}>
                <a href="/layanan">
                  <Text fontSize="sm" _hover={{ color: 'gray.500' }}>
                    Layanan Kami
                  </Text>
                </a>
              </GridItem>
              <GridItem colStart={1}>
                <a href="/dokumen">
                  <Text fontSize="sm" _hover={{ color: 'gray.500' }}>
                    Dokumen
                  </Text>
                </a>
              </GridItem>
              <GridItem colStart={1}>
                <a href="/about">
                  <Text fontSize="sm" _hover={{ color: 'gray.500' }}>
                    Tentang Kami
                  </Text>
                </a>
              </GridItem>
              <GridItem colStart={2} rowSpan={2} rowStart={1}>
                <Text fontSize="sm" as="b">
                  Bantuan
                </Text>
              </GridItem>
              <GridItem colStart={2} rowStart={3}>
                <Text
                  fontSize="sm"
                  cursor="pointer"
                  onClick={() =>
                    window.open('https://wa.me/082111977709', '_blank')
                  }
                  _hover={{ color: 'gray.500' }}
                >
                  Hubungi Kami
                </Text>
              </GridItem>
              <GridItem colStart={2} rowStart={4}>
                <Text
                  fontSize="sm"
                  onClick={() =>
                    window.open(
                      'https://www.google.com/maps/place/Pupuk+Selat+Sunda.+PT/@-6.0241921,105.9534785,17z/data=!3m1!4b1!4m6!3m5!1s0x2e4185eb2227f35d:0xe6f2bab5d7fd92d!8m2!3d-6.0241921!4d105.9560534!16s%2Fg%2F11hzn2dz1m?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D',
                      '_blank'
                    )
                  }
                  _hover={{ color: 'gray.500' }}
                >
                  Peta Situs
                </Text>
              </GridItem>
            </Grid>
          </Box>
          <Box h="100%" minw="117" w="100%" mx="5">
            <HStack spacing="24px" justifyContent="center" pt="150" h="100%">
              <Image
                src="/assets/img/logo_whatsapp.png"
                boxSize="24px"
                cursor="pointer"
                onClick={() =>
                  window.open('https://wa.me/082111977709', '_blank')
                }
              />
              <Image src="/assets/img/logo_linkedin.png" boxSize="24px" />
              <Image src="/assets/img/logo_yt.png" boxSize="24px" />
              <Image src="/assets/img/logo_ig.png" boxSize="24px" />
            </HStack>
          </Box>
        </Stack>
      </Box>
      <Box bg="#E01218" h="37">
        <Flex w="100%" h="100%" px="10%" align="center" justify="center">
          <HStack
            divider={<StackDivider borderColor="white" />}
            spacing={3}
            align="stretch"
          >
            <Text fontSize="sm" as="b" color="white">
              Contact Our Offices
            </Text>
            <Text fontSize="sm" as="b" color="white">
              Privacy Policy
            </Text>
            <Text fontSize="sm" as="b" color="white">
              Terms & Conditions
            </Text>
          </HStack>
          <Spacer />
          <HStack spacing={3} align="center" display="flex" justify="center">
            <Text fontSize="sm" as="b" color="white">
              Copyright
            </Text>
            <Image src="/assets/img/logo_copyright.svg" boxSize="15px" />
            <Text fontSize="sm" as="b" color="white">
              Axile
            </Text>
          </HStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Kaki;
