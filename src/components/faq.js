import React from 'react';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Faq() {
  return (
    <Box w="full">
      <Accordion allowToggle borderColor="rgba(0, 0, 0, 0)">
        <AccordionItem my="5" bg={['white', 'white', 'white', 'unset']}>
          <AccordionButton
            _expanded={{
              borderBottomColor: 'black',
              borderWidth: '1px',
            }}
            my="5px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0)"
            shadow="md"
          >
            <Box as="span" flex="1" textAlign="left">
              <Text as="b">
                1. Apa saja layanan yang ditawarkan oleh PT. Permata Kencana
                Raya?
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Kami menyediakan berbagai layanan seperti pengadaan trucking dan
            alat berat, chemical cleaning, konstruksi gedung dan teknik
            industri, scaffolding, labour supply, serta jasa pariwisata.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem my="5" bg={['white', 'white', 'white', 'unset']}>
          <AccordionButton
            _expanded={{
              borderBottomColor: 'black',
              borderWidth: '1px',
            }}
            my="5px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0)"
            shadow="md"
          >
            <Box as="span" flex="1" textAlign="left">
              <Text as="b">
                2. Bagaimana cara saya menghubungi PT. Permata Kencana Raya
                untuk konsultasi layanan?
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Anda dapat menghubungi kami melalui nomor telepon yang tertera di
            website atau melalui tombol "Ayo Ngobrol" dibawah ini. Kami juga
            menerima konsultasi langsung untuk mendiskusikan kebutuhan proyek
            Anda.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem my="5" bg={['white', 'white', 'white', 'unset']}>
          <AccordionButton
            _expanded={{
              borderBottomColor: 'black',
              borderWidth: '1px',
            }}
            my="5px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0)"
            shadow="md"
          >
            <Box as="span" flex="1" textAlign="left">
              <Text as="b">
                3. Apakah PT. Permata Kencana Raya hanya melayani pengadaan alat
                berat?
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Tidak, selain pengadaan alat berat, kami juga melayani trucking,
            konstruksi gedung, teknik industri, scaffolding, labour supply, dan
            jasa pariwisata. Kami memberikan solusi lengkap untuk kebutuhan
            proyek Anda.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem my="5" bg={['white', 'white', 'white', 'unset']}>
          <AccordionButton
            _expanded={{
              borderBottomColor: 'black',
              borderWidth: '1px',
            }}
            my="5px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0)"
            shadow="md"
          >
            <Box as="span" flex="1" textAlign="left">
              <Text as="b">
                4. Bagaimana PT. Permata Kencana Raya menjaga kualitas dan
                profesionalisme dalam setiap proyek?
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Kami didukung oleh sumber daya manusia yang berkualitas dan
            berpengalaman. Selain itu, kami selalu memastikan penggunaan alat
            dan teknologi terkini untuk menjaga kualitas dan profesionalisme
            dalam setiap layanan yang kami berikan.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Faq;
