import "./intro.scss"
import { HashLink as Link } from 'react-router-hash-link';


export default function Intro() {
    return (
        <div className="home" id="intro">
            <div className="container">
                <div className='left'>
                    <h1>Teste dos Temperamentos</h1>
                    <img src="assets/profile.jpg" alt="intro" />
                    <div className="home-info">
                        <p>Eu te vejo, eu te escuto.</p>
                        <p>Vamos juntos rumo ao amadurecimento!</p>
                    </div>
                    <Link className="link" to="/recomendations">Descubra agora</Link>
                </div>
                <div className='right'>
                <img src="assets/profile.jpg" alt="intro" />
                </div>
            </div>
        </div>
    )
}


