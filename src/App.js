import React from 'react';
// eslint-disable-next-line
/*
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
//import DarkModeSwitch from './pages/DarkModeSwitch';

import Header from './pages/Header'
import { ChakraProvider } from "@chakra-ui/react";
//<a href="/profile">Profile</a>

/*
      <Router>
        <Routes>
          <Route path='/profile' exact element={<Profile />} />
        </Routes>
      </Router>
      <Breadcrumb spacing='8px'>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/profile'>Profile</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>



*/



function App() {
  return (
    <div className="App">
      <ChakraProvider >
        <Header />
        <Router>
          <Routes>
            <Route path='/profile' exact element={<Profile/>} />
          </Routes>
        </Router>
        
        <h1>Hello World!</h1>

      </ChakraProvider>
    </div>
  );
}

export default App;
