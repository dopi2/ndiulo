/* eslint-disable no-unused-vars */
import hd from '../images/Hand Waxed Cotton Canvas Fabric 8oz Waxed Canvas Fabric - Etsy.png'
import bg from '../images/bg.png'
import t6 from '../images/T6j3Kg2fpMmjsSJJDpPjM-transformed.jpeg'
import React from 'react'
import './grid.css'
import w1 from '../images/W1C-Rhe4tX9Rub1bk1Khy-transformed.jpeg'
import vm from '../images/VmIZK13FXrLky86tUsFrW-transformed.jpeg'
import nh from '../images/5c505c03-3c60-456f-b359-793c7108ee43.jpg'
import jq from '../images/Jq_eHPX1tJzgY9w_Gs370-transformed.jpeg'
const grid = () => {
  return (
    <div id='halft'>
      <div className="row">
  <div className="column">
    <img src={jq}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-sm">BIAGI Lightweight Italian Cotton Interlining, 27 Wide</h1>
    <img src={nh}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-sm">Ready-Made Tailoring Undercollar, Felt with Canvas, Sold by the Yard</h1>
    {/* <img src={bg}/> */}
  </div>
  <div className="column">
    <img src={t6}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-sm">REMO Super Premium Italian Hymo Canvas, Medium Weight</h1>
    <img src={vm}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-sm">FF-312 Lightweight Non-Woven Fusible Interlining Fabric</h1>
  </div>
  <div className="column">
    <img src={w1}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-sm">ANSELMO 100% Italian Linen Lightweight Canvas Interlining</h1>
    <img src={hd}/>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-sm">AQUILA 100% Linen Bias Canvas, Made in Italy</h1>
  </div>
  </div>
    </div>
  )
}

export default grid
