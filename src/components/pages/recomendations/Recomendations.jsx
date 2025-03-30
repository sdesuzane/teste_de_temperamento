import "./recomendations.scss"
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function Recomendations() {
    return (
               <div className="recomendations">
                   <h1 className="title">Orientações</h1>
                    <p>Lembre-se de como você reagia e percebia os acontecimentos entre os 6 e 14 anos, pois é nessa fase que nosso temperamento se manifesta de forma mais autêntica. Ao selecionar as características que mais se encaixam em você, reflita se elas fazem parte da sua essência, impulsos naturais e predisposições (TEMPERAMENTO) ou se são traços moldados por experiências e aprendizados ao longo da vida, ligados ao seu caráter. Não tenha pressa. Baseie sua análise em padrões recorrentes de comportamento, e não em um evento isolado. Observe sua natureza — suas reações e impressões — mesmo que hoje você esteja aprendendo a refiná-las para se relacionar melhor. Boa reflexão!
                    </p>
                   <Link className="link" to="/questions">Iniciar teste</Link>

               </div>
    )
}
