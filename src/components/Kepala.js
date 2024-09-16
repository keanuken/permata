import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Link as ChakraLink,
  ChakraProvider,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import {
  Box,
  Grid,
  GridItem,
  Image,
  Button,
  Menu,
  theme,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Kepala() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="white"
        w="100%"
        p="4"
        h="70"
        display="flex"
        justifyContent="center"
        boxShadow="md"
      >
        <Grid
          templateColumns="repeat(6, 1fr)"
          h="100%"
          gap="4"
          minW="550"
          w="65%"
          mx="10"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <GridItem w="55" h="100%" display="flex" justifyContent="center">
            <Image
              src="/assets/img/logo_perusahaan.png"
              boxSize="55"
              objectFit="cover"
              minW="55"
            />
          </GridItem>
          <GridItem
            w="100%"
            minW="90"
            h="100%"
            display="flex"
            justifyContent="center"
          >
            <ChakraLink as={ReactRouterLink} to="/">
              <Button colorScheme="black" variant="ghost" h="100%">
                <Text as="b">Beranda</Text>
              </Button>
            </ChakraLink>
          </GridItem>
          <GridItem
            w="100%"
            minW="90"
            h="100%"
            display="flex"
            justifyContent="center"
          >
            <ChakraLink as={ReactRouterLink} to="/proyek">
              <Button colorScheme="black" variant="ghost" h="100%">
                <Text as="b">Proyek</Text>
              </Button>
            </ChakraLink>
          </GridItem>
          <GridItem
            w="100% "
            minW="90"
            h="100%"
            display="flex"
            justifyContent="center"
          >
            <ChakraLink as={ReactRouterLink} to="/layanan">
              <Button colorScheme="black" variant="ghost" h="100%">
                <Text as="b">Layanan</Text>
              </Button>
            </ChakraLink>
            {/* <Menu>
              <MenuButton h="100%">
                <HStack>
                  <Text as="b">Layanan</Text>
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    style={{ color: '#ea1f1f' }}
                  />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ChakraLink as={ReactRouterLink} to="/layanan" w="100%">
                    <Flex w="100%">
                      <Text>Layanan</Text>
                      <Spacer />
                      <FontAwesomeIcon
                        icon="fa-solid fa-chevron-right"
                        style={{ color: '#ea1f1f' }}
                      />
                    </Flex>
                  </ChakraLink>
                </MenuItem>
                <MenuItem>
                  <ChakraLink as={ReactRouterLink} to='/peralatan' w='100%'>
                <Flex w='100%'>
                  <Text>Peralatan</Text>
                  <Spacer/>
                  <FontAwesomeIcon icon="fa-solid fa-chevron-right" style={{color: "#ea1f1f",}} />
                </Flex>
              </ChakraLink>
                </MenuItem>
              </MenuList>
            </Menu>*/}
          </GridItem>
          {/* <GridItem
            w="100%"
            minW="90"
            h="100%"
            display="flex"
            justifyContent="center"
          >
            <ChakraLink as={ReactRouterLink} to="/dokumen" w="100%">
              <Button colorScheme="black" variant="ghost" h="100%">
                <Text as="b">Dokumen</Text>
              </Button>
            </ChakraLink>
          </GridItem> */}
          <GridItem
            w="100%"
            minW="90"
            h="100%"
            display="flex"
            justifyContent="center"
          >
            <Menu>
              <MenuButton h="100%">
                <HStack>
                  <Text as="b">Tentang</Text>
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    style={{ color: '#ea1f1f' }}
                  />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <ChakraLink as={ReactRouterLink} to="/about" w="100%">
                    <Flex w="100%">
                      <Text>Tentang Kami</Text>
                      <Spacer />
                      <FontAwesomeIcon
                        icon="fa-solid fa-chevron-right"
                        style={{ color: '#ea1f1f' }}
                      />
                    </Flex>
                  </ChakraLink>
                </MenuItem>
                <MenuItem>
                  <ChakraLink
                    as={ReactRouterLink}
                    to="/struktur-organisasi"
                    w="100%"
                  >
                    <Flex w="100%">
                      <Text>Struktur Organisasi</Text>
                      <Spacer />
                      <FontAwesomeIcon
                        icon="fa-solid fa-chevron-right"
                        style={{ color: '#ea1f1f' }}
                      />
                    </Flex>
                  </ChakraLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Kepala;
