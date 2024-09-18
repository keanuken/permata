'use client';

import React, { useRef } from 'react';
import { Box, Center, Text, Image, Img } from '@chakra-ui/react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Hero from './hero';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//Code by XiDS (Aldi)

export default function HeroSlider() {
  const settings = {
    arrows: true,
    fade: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
  };
  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'}>
      <Slider {...settings}>
        <Hero
          bgImg="/assets/img/excavator.png"
          title="Hal Berat Terasa Mudah di Tangan Kami"
          subTitle={
            'Segera hubungi kami untuk konsultasikan permasalahan anda.'
          }
          arahTeks="left"
          key={1}
          tinggi="810"
        />
        <Hero
          bgImg="/assets/img/carousel2.webp"
          title="Solusi Tepat untuk Kebutuhan Proyek Anda"
          subTitle={
            'Kami hadir dengan layanan profesional untuk memudahkan proyek konstruksi dan pengadaan alat berat Anda. Hubungi kami untuk informasi lebih lanjut!'
          }
          arahTeks="left"
          key={2}
          tinggi="810"
        />
        <Hero
          bgImg="/assets/img/carousel1.webp"
          title=" Bersama Kami, Proyek Lebih Efisien"
          subTitle={
            'Dapatkan layanan terbaik di bidang trucking, konstruksi, dan penyediaan alat berat. Kami siap membantu Anda mencapai hasil maksimal.'
          }
          arahTeks="left"
          key={3}
          tinggi="810"
        />
      </Slider>
    </Box>
  );
}

// function SponsorAtuh({ imej }) {
//   return (
//     <Center
//       minW="150"
//       maxW="150"
//       h="65"
//       bg="white"
//       borderRadius="lg"
//       boxShadow="lg"
//       mx="50"
//     >
//       <Img src={imej} boxSize="max-content" w="100" h="26" />
//     </Center>
//   );
// }

// SponsorAtuh.propTypes = {
//   imej: PropTypes.string,
// };

// SponsorAtuh.defaultProps = {
//   imej: '/assets/img/kompas.svg',
// };

// export function SponsorSlider() {
//   let sliderRef = useRef(null);
//   const settings = {
//     arrows: false,
//     fade: false,
//     infinite: true,
//     speed: 500,
//     autoplaySpeed: 5000,
//     slidesToShow: 5,
//     swipeToSlide: true,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//   };
//   return (
//     <Box position="center" width="100%" overflow={'hidden'} height="68">
//       <Slider
//         ref={slider => {
//           sliderRef = slider;
//         }}
//         {...settings}
//       >
//         <SponsorAtuh key={1} imej="/assets/img/kompas.svg" />
//         <SponsorAtuh key={2} imej="/assets/img/detik.svg" />
//         <SponsorAtuh key={3} imej="/assets/img/kompas.svg" />
//         <SponsorAtuh key={4} imej="/assets/img/kompas.svg" />
//         <SponsorAtuh key={5} imej="/assets/img/detik.svg" />
//         <SponsorAtuh key={6} imej="/assets/img/kompas.svg" />
//         <SponsorAtuh key={7} imej="/assets/img/detik.svg" />
//       </Slider>
//     </Box>
//   );
// }
