import React from 'react';
import { ChakraProvider, theme, Text } from '@chakra-ui/react';
import Hero from '../components/hero';
import Article from '../components/article';

function About() {
  return (
    <ChakraProvider theme={theme}>
      <Hero
        bgImg="/assets/img/excavator.png"
        title="Tentang Kami"
        subTitle={'Deskripsi dari Tentang Kami.'}
      />
      <Article title="Tentang Kami" image="assets/img/excavator.png">
        <Text whiteSpace="pre-line" align="justify">
          {'PERMATA KENCANA RAYA didirikan pada tanggal 4 Juli Pada tahun 2022, berdasarkan Akta Pendirian SK. MENKUM & HAM RI No. AHU- 01007.AH.02.01. TAHUN 2021' +
            '.' +
            '\n' +
            'Kami berkomitmen tinggi dalam memberikan pelayanan terbaik dan berkualitas terhadap klien kami, Untuk kegiatan yang sudah berjalan saat ini kami mengerjakan pekerjaan TRUCKING dan Penyediaan Alat Berat yang profesional' +
            '\n' +
            '\n' +
            'Perusahaan kami bertujuan untuk memberikan pelayanan nomor satu, dengan tetap menjaga kualitas terbaik dan kinerja yang profesional. Dalam mencapai tujuan tersebut, kami di dukung oleh sumber daya yang berkualitas dan berkelas. Hal ini guna menjaga kepuasan klien dan juga menjaga profesionalitas dari perusahaan kami.'}
        </Text>
      </Article>
      {/* <Article rev="True">
        <Text whiteSpace="pre-line">
          {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' +
            "'" +
            'standard dummy text ever since the 1500s.' +
            '\n' +
            'Typography' +
            '\n' +
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}
        </Text>
      </Article> */}
      <Article title="Visi" image="assets/img/carousel2.webp">
        <Text whiteSpace="pre-line" align="justify">
          {
            'Menjadi perusahaan jasa dan pelaksana konstruksi terbesar dan terbaik di selururh ALAM SEMESTA untuk mendukung setiap program Investasi pembangunan yang dilakukan oleh Penanam Modal Dalam Negerl, Suwasta dan/atau Penanam Modal Asing, serta menjadi perusahaan yang diakul dunia internasional, memiliki komitmen yang kuat, berintegritas tinggi dan konsisten dalam memenuhi kebutuhan pembangunan nasional dan internasional.'
          }
        </Text>
      </Article>
      <Article title="Misi" rev="True">
        <Text whiteSpace="pre-line" align="left">
          {'\u00b7  Memenuhi Standar Industri Jasa dan Konstruksi Global' +
            '\n' +
            '\u00b7 Mencipatakan Layanan yang berkualitas dalam mewujudkan produk pelayanan jasa' +
            '\n' +
            '\u00b7 Memberikan kepuasan klien yang maksimal dengan tercapainya penyelesaian setiap project dengan kulitas paling tinggi dalam kurun waktu dan pembiayaan yang telah disepakati sesuai dengan MoU yang disepaki bersama' +
            '\n' +
            '\u00b7 Memberi manfaat bagi terwujudnya kemakmuran seluruh rakyat Indonesia pada umumnya dan organisasi perusahaan pada khususnya.' +
            '\n' +
            '\u00b7 Menjadi perusahaan yang mampu beradaptasi dengan setiap perkembangan dan teknologi nasional maupun internasional'}
        </Text>
      </Article>
    </ChakraProvider>
  );
}
export default About;
