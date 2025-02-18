import "./recomendations.scss"
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function Recomendations() {
    return (
       <div className="page">
               <div className="content">
                   <h1 className="title">Orientações</h1>
                    <p><strong>ORIENTAÇÕES:</strong> Recorde suas reações e impressões dos eventos que lhe aconteceram entre 6 e 14 anos de idade, pois é quando somos puro temperamento.
                    Ao escolher as características que melhor te descrevem, reflita se é você na sua natureza, impulsos, tendências, estrutura (TEMPERAMENTO) ou se não é um comportamento aprendido, caráter, acúmulo de experiências.
                    Por fim não se precipite. Não use um evento aleatório para se orientar, mais sim sua natureza - reação e impressão, ainda que você esteja educando-os para melhor se relacionar na vida.Bom aprofundamento!

                    </p>
                   <Link className="link" to="/questions">Iniciar o teste</Link>

               </div>
       </div>
    )
}
