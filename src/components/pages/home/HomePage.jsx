import React from 'react'
import "./homePage.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function HomePage() {
 return (
        <div className="home">
                <div className='left'>
                    <h1>Teste dos Temperamentos</h1>
                    <img src="assets/profile.jpg" alt="intro" />
                    <div className="home-info">
                        <p>Toda jornada de transformação começa com um primeiro passo: conhecer a si mesmo.</p>
                        <p>Descubra seu temperamento e posicione-se com intenção no mundo!</p>
                    </div>
                    <Link className="link" to="/recomendations">Quero começar</Link>
                </div>
                <div className='right'>
                <img src="assets/profile.jpg" alt="intro" />
                </div>
        </div>
    )
}
