import React from "react-dom";
import './index.css';
import yellow from './block-yellow.svg'

function UtilidadesLand() {
    return (
        <section className="section-container-utilidades-land" id="utilidades-land">
            <div className="container-img-titulo-utilidades-land">
                <img src={yellow} />
                <h1>369<br/> Software Factory</h1>
            </div>

            <div className="container-texto-utilidades-land">
                <p>Los servicios de nuestra Software Factory están diseñados y pensados para ofrecer una solución unificada que permita hacer una idea realidad, puedes llegar con una idea y nosotros nos encargamos de todo hasta su lanzamiento, como también contratar nuestros servicios de manera individual.</p>

                <ul>
                    <li>Desarrollo Blockchain de NFT en Solidity.</li>

                    <li>Desarrollo Web 3.0.</li>

                    <li>Solución de hosting centralizado y descentralizado.</li>

                    <li>Diseñadores UX/UI para la experiencia de tus usuarios.</li>

                    <li>Artistas para generación de Arte NFT.</li>

                    <li>Asesoramiento financiero y artístico.</li>

                    <li>Alianza estratégica para lograr tus objetivos.</li>

                    <li>Community Manager y Estrategia de lanzamiento.</li>
                </ul>
            </div>
        </section>
    )
}

export { UtilidadesLand }