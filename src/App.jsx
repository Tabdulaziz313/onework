import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Person from './components/Person'
import Admin from './pages/Admin'


const App = () => {
  return (
    <>
      <Footer />
      <Navbar/>
      <Person/>



      <Routes>

        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}

      </Routes>







      <Admin/>


    </>
  );
};

export default App;