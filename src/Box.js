import React from "react"
import "./Box.css"
import Logo from "./Imgs/starbucksLogo.png"
export default function Box(){
    return(
        <div className="box">
            <img className="logo-box" src={Logo} alt="starbucks-main" ></img>
        </div>
    )
}