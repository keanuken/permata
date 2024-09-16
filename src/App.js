import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Box, ChakraProvider, theme } from '@chakra-ui/react'
import Kepala from './components/Kepala';
import Kaki from './components/Kaki';
import Home from './pages';
import About from './pages/about';
import '@fontsource/poppins';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Proyek from './pages/proyek';
import Layanan from './pages/layanan';
import Peralatan from './pages/peralatan';
import StrukturOrganisasi from './pages/struktur';
import Dokumen from './pages/dokumen';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          pos='relative'
          zIndex='99'
        >
          <Kepala/>
        </Box>        
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/proyek" element={<Proyek/>} />
          <Route path="/layanan" element={<Layanan/>} />
          <Route path="/peralatan" element={<Peralatan/>} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi/>} />
          <Route path="/dokumen" element={<Dokumen/>} />
      </Routes>
      <Kaki/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
library.add(fab, fas, far)