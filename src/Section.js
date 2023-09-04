import React from "react"
import "./Section.css"
import Facebook from "./Imgs/facebook.png"
import Instagram from "./Imgs/instagram.png"
import Twitter from "./Imgs/twitter.png"
import New1 from "./Imgs/new1.png"
import New2 from "./Imgs/new2.png"
export default function Section(){
    return(
        
        <div className="section" >

            <div  className="title-texts">
            <h1  className="title-artigo">Starbucks Brasil apresenta novos sabores e oferece aconchego com cardápio de outono.</h1>
            <p className="subtitle-artigo">02 maio 2023 • 2 minutos de leitura</p>
            
            <p className="sub-subtitle">COMPARTILHAR</p>
            <div className="socialmedia">
            <img className="media" src={Facebook} alt="socialmedia-facebook"></img>
            <img className="media" src={Instagram} alt="socialmedia-instagram"></img>
            <img className="media" src={Twitter} alt="socialmedia-twitter"></img>
            </div>
            <div className="textos1">
                
                <p className="texto-exemple1">A partir do dia 2 de maio, os clientes da marca poderão apreciar a família de bebidas Starbucks® Cinnamon Toffee, o Mocha Cookie Frappuccino® e Espresso Collection, além do café em grãos Starbucks® Kati Kati Blend.</p>
                <p className="texto-exemple2">São Paulo – Trazendo um clima aconchegante às lojas, a Starbucks Brasil – operada localmente pela SouthRock - anuncia hoje as novidades do cardápio sazonal de outono, disponíveis em todas as unidades no Brasil, a partir de 2 de maio. O cardápio conta com a família de bebidas Starbucks® Cinnamon Toffee, o Mocha Cookie Frappuccino® e opções Espresso Collection.</p>  

            </div>
            <img className="news" src={New1} alt="Cardápio novo"></img>
            <div className="textos2">
                <p className="texto-exemple3">​“Neste outono, estamos animados para convidar nossos clientes para viver o ‘agora’ e aproveitar ao máximo cada momento, com uma bebida Starbucks em mãos.” comenta o Gerente de Marketing da Starbucks Brasil. “Seja com amigos, familiares, colegas ou sozinho, todos os momentos devem ser apreciados. Enquanto recebemos a estação, os deliciosos e reconfortantes aromas e sabores da seleção de bebidas da temporada são a companhia perfeita para todos os momentos, sejam eles grandes ou pequenos”, completa.</p>
                <p className="texto-exemple4">A família Starbucks® Cinnamon Toffee combina a sutileza da canela com o sabor característico das castanhas caramelizadas. Disponíveis nas opções Latte, Iced (com Cold Foam) e Frappuccino® - a partir de R$17 ou resgate pelo Starbucks Rewards com 70 estrelas – ou como um Espresso, a partir de R$10,50 ou resgate pelo Starbucks Rewards® com 30 estrelas.</p>
                <p className="texto-exemple5">O Mocha Cookie Frappuccino® é feito com chocolate meio amargo e traz a doçura do chocolate ao leite, finalizado com chantilly e deliciosos e crocantes pedacinhos de cookie, a partir de R$ 21 ou resgate pelo Starbucks Rewards com 70 estrelas. Para clientes que preferem uma bebida quente durante a temporada, o cardápio também oferece o sabor na versão Espresso Collection Mocha Cookie, disponível a partir de R$10,50 ou resgate pelo Starbucks Rewards® com 30 estrelas.</p>
                <img className="news" src={New2} alt="Cardápio novo 2"></img>
                <p className="italic-legend">Família de bebidas Starbucks® Cinnamon Toffee - Divulgação/Starbucks Brasil</p>
                <p className="texto-exemple6">Além das bebidas, a Starbucks também recebe a estação com o café em grãos Starbucks® Kati Kati Blend. Composto por uma seleção de grãos arábica de torra média, originários de regiões cafeeiras no Quênia e na Etiópia, esse blend traz notas cítricas e apimentadas, transportando os amantes de café para as terras altas ensolaradas da África Oriental. Este versátil café pode ser tomado quente ou gelado, sendo também uma excelente escolha para quem gosta de café com leite ou para aqueles que preferem um café preto mais forte e encorpado. Disponível a partir de R$53 ou resgate pelo Starbucks Rewards® com 150 estrelas.</p>
                <p className="texto-exemple7">Como sempre, membros do programa Starbucks Rewards recebem uma estrela a cada R$3,50 gastos em produtos, para juntar e trocar por itens da loja, incluindo itens do cardápio sazonal. Por meio do aplicativo Starbucks Brasil, é possível antecipar pedidos e personalizar bebidas.</p>
                <p className="texto-exemple8">As bebidas de outono estarão disponíveis nas lojas da Starbucks no Brasil e pelo programa Peça pelo Celular, disponível em lojas selecionadas, por meio do aplicativo Starbucks Brasil, a partir de 2 de maio, enquanto durarem os estoques.</p>
                <p className="texto-exemple9">*O preço dos itens e sua disponibilidade podem variar de acordo com a região, preço informado foi São Paulo Capital, lojas de rua.</p>
                <p className="texto-exemple10">Siga a Starbucks Brasil em LinkedIn, Instagram, Facebook, Twitter, TikTok e YouTube.</p>
            </div>
            </div>

            
        </div>
    )
}
