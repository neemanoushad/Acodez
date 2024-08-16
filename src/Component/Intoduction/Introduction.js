import React from 'react'
import './Introduction.css'
import { tick } from '../../asset'

function Introduction() {
  return (
    <div className='Box'>
<div className='Box1'>
    <p>Premium Course</p>
</div>
<div className='Box2'>
    <p>THE EARLY BIRDS BATCH</p>

</div>
<div className='Box3'> 
    <p>Class - 12, session 2023 - 24</p>
</div>
<div className='Box4'>
    <p>Accountancy</p>

</div>
<div className='Boxes'>
<div className='Box5'>
    <img src={tick} alt="" />
    <p>Complete Syllabus</p>

</div>
<div className='Box6'>
    <img src={tick} alt="" />
    <p>Revision</p>

</div>
<div className='Box7'>
    <img src={tick} alt="" />
    <p>Doubt Support</p>

</div>

</div>
    </div>
  )
}

export default Introduction