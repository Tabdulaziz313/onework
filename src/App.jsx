import React from 'react' ;
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Person from './components/Person'
// import Applicant from './pages/Applicant'
import Admin from './pages/Admin'
import Home from './pages/Home'
// import Vacancies from './pages/Vacancies'
import Companies from "./pages/Companies/index.jsx";



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


      {/* <Routes> */}


        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}

      {/* </Routes> */}





      {/*<Admin/>*/}


    </>
  );
};

export default App;