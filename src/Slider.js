import React from "react"
import "./Slider.css"
import Img1 from "./Imgs/cardapio1.png"
import Img2 from "./Imgs/cardapio2.png"
import Img3 from "./Imgs/cardapio3.png"
import Img4 from "./Imgs/cardapio4.png"
import Img5 from "./Imgs/cardapio5.png"
export default function Slider(){
    return(
        <div className="sliderMain">
        <div className="slider">
            <div className="slides">
                <input type="radio" name="slide" id="slide1" checked></input>
                <input type="radio" name="slide" id="slide2"></input>
                <input type="radio" name="slide" id="slide3"></input>
                <input type="radio" name="slide" id="slide4"></input>
                <input type="radio" name="slide" id="slide5"></input>

                <div className="slide s1">
                    <img className="img1" src={Img1} alt="cardapio1"></img>

                </div>
                <div className="slide">
                    <img className="img1" src={Img2} alt="cardapio2"></img>

                </div>
                <div className="slide">
                    
                    <img className="img1" src={Img3} alt="cardapio3"></img>
  
                </div>
                <div className="slide">
                    <img className="img1" src={Img4} alt="cardapio4"></img>

                </div>
                <div className="slide">
                    <img className="img1" src={Img5} alt="cardapio5"></img>

                </div>
            </div>
            <div className="navigation-bar">
                <label className="bar" for="slide1"></label>
                <label className="bar" for="slide2"></label>
                <label className="bar" for="slide3"></label>
                <label className="bar" for="slide4"></label>
                <label className="bar" for="slide5"></label>

            </div>


        </div>
        </div>
    )
}