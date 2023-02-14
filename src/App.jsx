import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Person from './components/Person'
import Applicant from './pages/Applicant'
import Companies from './pages/Companies'
import Empoyer from './pages/Empoyer'
import Home from './pages/Home'
import Vacancies from './pages/Vacancies'
import Admin from './pages/Admin'


const App = () => {
  return (
    <>
      <Footer />
      <Navbar/>
      <Person/>
      <Applicant/>
      <Companies/>
      <Empoyer/>
      <Home/>
      <Vacancies/>



      {/* <Routes> */}


        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}

      {/* </Routes> */}


<h1>salom</h1>



      <Admin/>


    </>
  );
};

export default App;