import "./choleric.scss";
import { HashLink as Link } from "react-router-hash-link";
import { SlArrowLeft } from "react-icons/sl";

export default function Choleric() {
    return (
        <div className="result">
                <div className="left">
                    <h1>Colérico</h1>
                    <img src="assets/chroleric.png" alt="Colérico" />
                    <div className="info">
                        <p>
                            Símbolo: <strong>FOGO</strong>
                        </p>
                        <p>
                            O colérico se irrita fácil e fortemente; se sente impulsionado a reagir de imediato; a impressão fica por muito tempo na alma e facilmente conduz a novas irritações.<br />
                            Ele é voltado para a resolução das coisas e consegue enxergá-las com praticidade. Geralmente, os coléricos são fortes e magnânimos; por isso, não é possível contê-los, pois seria como fechar a tampa de uma panela de pressão. Ademais, coléricos não costumam tomar decisões para agradar aos demais. Eles perseguem aquilo que acreditam, seus objetivos e ideais. Tende ao orgulho.<br />
                            Suas principais características são: expansividade, praticidade, liderança, assertividade, raciocínio rápido, gosto por desafios e competições, trabalhador, educador, pessoa de convicção e vontade fortes, com forte determinação e magnanimidade. O colérico é aquele que empreende, que vai à frente, que transforma e que está sempre buscando fazer o melhor.<br />
                            Já os principais defeitos desse temperamento são: propensos à ira, insensibilidade e orgulho, e, caso não percorram um caminho de virtudes, podem se tornar propensos à vingança.<br />
                            Eles costumam ter pouco trato com as pessoas e podem ser imprudentes e arrogantes, por se verem sempre com a razão. O seu grande defeito é exatamente conseguir resolver os problemas de fora, mas ter um ponto cego nos problemas que estão dentro de si mesmo.
                        </p>

                        {/* Div do botão centralizado */}
                        <div className="button-container">
                            <Link className="link" to="/">
                                <SlArrowLeft className="icon" />
                                Fazer outro teste
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <img src="assets/chroleric.png" alt="Colérico" />
                </div>
            </div>
    );
}
