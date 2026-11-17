import React from 'react'
import '../css/navbar.css';
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <>
     <nav className='nav p-0 px-4 
         d-flex 
         flex-column
         justify-content-center
         align-items-center
         flex-md-row
         justify-content-md-between
          gap-4
          py-4
          py-md-3
         
       '>
       
        <div className='d-flex                    
        '>logo</div>
      
       <button className='d-flex d-md-none'><FaBars /></button>

       
        <ul className='group d-none d-md-flex flex-column flex-md-row'>
            <li>Home</li>
            <li>Explore Courses</li>
            <li>My learning</li>
        </ul>

        <ul className='group d-none d-md-block d-md-flex'>
            {/* <li className='border border-2 px-4 py-1 rounded'>Login</li> */}
            <li>Profile</li>
        </ul>
     </nav>
    
    </>
  )
}

export default Navbar