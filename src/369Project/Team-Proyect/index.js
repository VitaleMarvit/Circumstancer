import React from "react-dom";
import './index.css';
import purple from './block-purple.svg';
import lightBlue from './block-blue.svg'

function TeamLand() {
    return (
        <section className="section-team-land" id="team-land">
            <div className="socios-land">
                <div className="container-img-titulo-team-uno">
                    <img src={purple} />
                    <h1>Nuestros socios son <br/> nuestra comunidad</h1>
                </div>

                <div className="container-texto-team-land-uno">
                    <p>Los propietarios de un NFT del Circumstancer son nuestros socios, esto quiere decir que tendrán una remuneración de todas las regalías que se obtendrán de los proyectos que lance 369, como también de todos los productos y servicios propios que se desarrollaran en 369 Tools, también la toma de decisiones.</p>
                </div>
            </div>

            <div className="regalias-land">
                <div className="container-img-titulo-team-dos">
                    <img src={lightBlue} />
                    <h1>Obtén regalías en todos los proyectos que se lancen con 369</h1>
                </div>

                <div className="container-texto-team-land-dos">
                    <p>Los propietarios de un Circumstancer NFT obtendrán una remuneración económica en los lanzamientos que se realicen en 369.</p>

                    <p>Todo se gestionará mediante Smart Contract, los proyectos que se desarrollen en 369 tendrán en sus SC una función de retiro, en donde estará indicado el porcentaje que debe destinarse y enviarse al SC de Liquidez para Socios. Este último SC estará diseñado para hacer la distribución equitativa por NFT, y permitir a los propietarios consultar saldo disponible y hacer dicho retiro de los mismos.</p>
                </div>
            </div>
        </section>
    )
}

export { TeamLand }