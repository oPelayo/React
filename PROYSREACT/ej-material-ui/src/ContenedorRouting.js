import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar/Navbar';
import Authentication from './pages/Authentication';
import MachineLearning from './pages/MachineLearning';
import Hosting from './pages/Hosting';
import Functions from './pages/Functions';
import Database from './pages/Database';
import ProTip from './components/ProTip/ProTip';
import Copyright from './components/Copyright/Copyright';
import Error from './pages/Error';
import Home from './pages/Home'
import ApiDisney from './pages/ApiDisney';

const ContenedorRouting = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/database" element={<Database />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path='/apidisney' element={<ApiDisney />} />
            <Route path='/protip' element={<ProTip />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}

export default ContenedorRouting;
