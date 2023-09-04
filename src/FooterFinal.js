import React from "react";
import "./FooterFinal.css"
import Spotify from "./Imgs/icon-spotify.svg"
import Faceboook from "./Imgs/icon-facebook.svg"
import Instagramm from "./Imgs/icon-instagram.svg"
import Linkedin from "./Imgs/icon-linkedin.svg"
import Twitter from "./Imgs/icon-twitter.svg"
import YouTube from "./Imgs/icon-youtube.svg"
export default function FooterFinal(){
    return(
        <div className="icos">   
         <img alt="Spotify" className="iconess" src={Spotify}></img>
        <img  alt="Facebook" className="iconess" src={Faceboook}></img>
        <img  alt="Instagram" className="iconess" src={Instagramm}></img>
        <img  alt="Linkedin" className="iconess" src={Linkedin}></img>
        <img  alt="Twitter" className="iconess" src={Twitter}></img>
        <img  alt="YouTube" className="iconess" src={YouTube}></img>
    </div>
    )
}