/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.css'
import place from '../images/placeholder.png'
import tele from '../images/telephone.png'
import logo from '../images/add9d877-711d-48f7-8804-63865615c35e-removebg-preview.png'
const footer = () => {
  return (
    <div className='' id='foot'>
      <img src={logo} width={110}/>
       <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl" id='foot1'>Want to connect with us?</h1>
       <p className="mt-6 text-xl leading-8 text-gray-700">
            You can connect with us through the follwing ways or visit us at the address below
              </p>
   <div id='fru'>
    <div id='lad'>
    <img src={place} width={30}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Address</h1>
    <p className="mt-6 text-xl leading-8 text-gray-700">
            Head Office:11-17 Umunaka Road, Aba, Abia State, Nigeria.
            <br/>
            Warehouse: 110 Aba Owerri Road, Umungasi Aba, Abia State.
              </p>
    </div>
    <div id='fru3'>
      <img src={tele} width={30}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h1>
    <p className="mt-6 text-xl leading-8 text-gray-700">
        <br/>Call: +234 080-950-70124     
        <br/> WhatsApp: +234 0916-8805-588,+234 0806-456-637    
        <br/>Contact us by email:info.ndiulo@resources.com                          
              </p>
    </div>
   </div>
    </div>
  )
}

export default footer
