import React from "react"
import Cafe0 from "./Imgs/cafe0.jpg"
import Cafe1 from "./Imgs/cafe1.jpg"
import Cafe2 from "./Imgs/cafe2.jpg"
import Promo from "./Imgs/promo.png"
import "./Cafetitles.css"
export default function Cafetitles(){
    return(
        <div className="all-coffee">
            <div className="itemsTitle">
        <h1 className="title-coffee">Experimente a magia do nosso café!</h1> 
        <button className="button-cafe">Saiba mais</button>   
       <p className="subtitle-cafe">Desperte seus sentidos com o ecossistema irresistível do Café Starbucks.</p>
       </div>
        <div className="container-cafe1">
            <img className="cafe-imagem0" src={Cafe0} alt="cafe-imagem"></img>
            <div className="cafee">
            <h1 className="cafe-title0">*DESBRAVE*<br/> NOVOS CAMINHOS</h1>
            <div>
            <p className="textodocafe"> Do estudo básico de preparação ao aperfeiçoamento em detalhes. Seja um barista de casa.</p>
            </div>
            </div>
        </div>  
        <div className="container-cafe2">
            <img className="cafe-imagem0" src={Cafe1} alt="cafe-imagem"></img>
            <div className="cafee">
            <h1 className="cafe-title0">*PROVE* NOSSOS CLÁSSICOS</h1>
            <div>
            <p className="textodocafe"> Entre em uma jornada de sabores icônicos com os clássicos inigualáveis da Starbucks.</p>
            </div>
            </div>
        </div>
        <div className="container-cafe3">
            <img className="cafe-imagem0" src={Cafe2} alt="cafe-imagem"></img>
            <div className="cafee">
            <h1 className="cafe-title0">*DESCUBRA* NOSSOS CAFÉS</h1>
            <div>
            <p className="textodocafe"> Independente do seu gosto ou paladar, encontrará um café Starbucks® perfeito para você.</p>
            </div>
            </div>
        </div>
        <div className="container-cafe4">
            <img className="cafe-imagem0" src={Promo} alt="cafe-imagem"></img>
            <div className="cafee">
            <h1 className="cafe-title0">PROMOÇÕES *EXCLUSIVAS*</h1>
            <div>
            <p className="textodocafe">  Durante promoções anuais, a Starbucks® oferece brindes colecionáveis. Fique atento!</p>
            </div>
            </div>
        </div>
        </div>
        
    )

}