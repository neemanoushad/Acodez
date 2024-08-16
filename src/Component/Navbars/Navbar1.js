import React from 'react'
import { Rectangleheader,phone,number,logoimg } from '../../asset'
import './Navbar1.css'
function Navbar1() {
  return (
    <div className='headerno'>
        <div className='phoneno'>
            <img src={phone} alt="" />
            <p>011-40848482</p>
        </div>
        <div className='blogs'>
            <ul>
                <li>Blog</li>
                <li>Careers</li>
                <li> FAQs</li>
            </ul>
        </div>
      

    </div>
  )
}

export default Navbar1