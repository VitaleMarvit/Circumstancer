import React from "react-dom";
import './index.css';
import pink from './block-pink.svg'

function ProyectLand() {
    return (
        <section className="section-container-proyect-land" id="369-land">
            <div className="container-img-titulo-land">
                <img src={pink} />
                <h1>¿Qué es 369<br/> y cuál es nuestra misión?</h1>
            </div>

            <div className="container-texto-proyect-land">
                <p>Crear y desarrollar proyectos NFTs.</p>

                <p>Potenciar y materializar ideas basadas en NFTs</p>

                <p>Generar comunidad y facilitar e impulsar el acceso al mundo blockchain y NFT</p>

                <p>Buscar artistas, emprendedores, influencers y personas que aporten grandes ideas que quieran crear su propio proyecto.</p>

                <p>Somos una empresa dinámica y con varios sectores dentro del mundo Blockchain NFT. Contamos con Software Factory e Incubadora de proyectos NFT, brindando nuestros servicios a Artistas, Influencers y todos aquellos que desean hacer sus ideas realidad. Somos el puente hacia el mundo NFT.</p>
            </div>
        </section>
    )
}

export { ProyectLand }