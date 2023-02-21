import React from 'react' ;
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Person from './components/Person'
// import Applicant from './pages/Applicant'
import Companies from './pages/Companies'
// import Empoyer from './pages/Empoyer'
import Home from './pages/Home'   
// import Vacancies from './pages/Vacancies'


const App = () => {
  return (
    <>
      <Navbar/>
      {/*<Companies/>*/}
      {/* <Person/>
      <Applicant/>
   
      <Empoyer/>
      <Vacancies/> */}
       <Home/>

      <Footer />

      <Routes>


        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}

      </Routes>

    </>
  );
};

export default App;