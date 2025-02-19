import "./recomendations.scss"
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function Recomendations() {
    return (
       <div className="page">
               <div className="content">
                   <h1 className="title">Orientações</h1>
                    <p>Recorde suas reações e impressões dos eventos que lhe aconteceram entre os 6 e 14 anos de idade, pois é nesse período que somos puro temperamento.
                    Ao escolher as características que melhor o descrevem, reflita se elas fazem parte da sua natureza, impulsos, tendências e estrutura (TEMPERAMENTO) ou se são comportamentos aprendidos, ligados ao caráter e ao acúmulo de experiências.
                    Por fim, não se precipite. Não utilize um evento aleatório como base para sua análise, mas sim sua natureza — suas reações e impressões — ainda que você esteja aprendendo a educá-las para melhor se relacionar na vida.
                    Bom aprofundamento!</p>
                   <Link className="link" to="/questions">Iniciar o teste</Link>

               </div>
       </div>
    )
}
