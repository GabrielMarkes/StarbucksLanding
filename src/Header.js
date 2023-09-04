import React from "react"
import Img from "./Imgs/starbucks-logo.png"
import "./Header.css"

export default function Example(){
    function handleMenuClick() {
        window.location.reload();
      }
    
    return (
        <div className="header">
            <a className="logo" href=" " onClick={handleMenuClick}><img alt="logo" className="logo" src={Img} /></a> 
            
            <ul className="menu-header">
                <li className="menu">Menu</li>
                <li className="produto">Lançamentos</li>
                <li className="nosso-café">Nosso café</li>
                <li className="sobre">Sobre nós</li> 
                <li className="contato">Contato</li>
            </ul>
            <div className="buttons">
            <button className="first-button">Entrar</button>
            <button className="second-button">Participe Agora</button>
            </div>
        </div>
    )
}