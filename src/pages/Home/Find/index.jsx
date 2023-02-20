import React from 'react';
import "./style.scss";
const index = () => {
   
   return (
      <div>
      <div className="container">
       <div className="home_find_wrapper ">
       <h1 className='text-center mt-5 find_title'>Find the job you love</h1>
       <p className='text-center text-secondary find_desc'>OneApp - fastest way to land your dream job!</p>
       <form className="HeroBanner_jobForm__4jzpU"><div className="HeroBanner_jobFormBox__IjgXc">
       {/* <i class="fa-regular fa-magnifying-glass " style={{fontSize:"24px" ,color:"rgb(63, 140, 255)"}}></i> */}
       <input className="HeroBanner_jobFormInput__tpgne" type="search" placeholder="search"  id="searchbox" name="searchbox"  /></div></form>
       <div className="style_orContainer__NJ1Zn">or</div>
        <a href="#!"> <button className=' find-btn'>I’m Hiring</button></a>
       </div>
      </div>
      </div>
   );
};

export default index;<h1>About</h1>