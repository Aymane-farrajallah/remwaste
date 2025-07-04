import React from 'react'
import Selector from '../components/Selector.jsx'
import Stepper from '../components/Stepper.jsx'

function OrderPage() {
  return (
    <div className='bg-[#fff6ef]'>
      <Stepper />    
      <Selector />
    </div>
  )
}
 
export default OrderPage