import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav class="pt-4 pb-4 bg-light">
      <div class="container d-flex ">
      <img src={logo} alt='route logo' className='logo rounded-circle'/>
<span className='mt-2 ms-3 fw-normal fs-3'>Route Job Fair</span>

      </div>
    </nav>  )
}

export default Navbar

