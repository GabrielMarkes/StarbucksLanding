import React from "react"
import "./App.css"
import Header from "./Header"
import Box from "./Box"
import Slider from "./Slider"
import Section from "./Section"
import Cafe from "./Cafe"
import Cafetitles from "./Cafetitles"
import Footer from "./Footer"
import FooterFinal from "./FooterFinal"
export default function App(){
  return(
    <div>
    <Header/>
    <Slider/>
    <Box/>
    <Section/>
    <Cafe/>
    <Cafetitles/>
    <Footer/>
    <FooterFinal/>
    </div>
  )
}