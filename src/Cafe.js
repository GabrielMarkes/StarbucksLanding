import React from "react"
import Cafeimg from "./Imgs/starbucks-logo.png"
import "./Cafe.css"
export default function Cafe(){
    return(
        <div  className="cafe-title">
            <img className="cafeimg" src={Cafeimg} alt="cafeimg"></img>
        </div>
    )
        
}