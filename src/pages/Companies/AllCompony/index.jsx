import React from 'react'
import './style.css'
const index = () => {
  return (
    <div className='all-comp-wrapper'>
     <span className='all-comp-desc'>All companies in OneApp</span>
      <h1 className='all-comp-title'>Find great job with great values</h1>
      <a href="#"><button className='btn btn-blue'><span>
      <i className="fa-regular fa-plus"></i></span> Add your company</button></a>
    </div>
  )
}

export default index