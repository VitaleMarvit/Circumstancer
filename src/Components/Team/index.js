import React from "react-dom";
import './index.css';
import { TfiPlus } from "react-icons/tfi";
import lea from './team-leandro.svg'
import juli from './team-julieta.svg'
import pipi from './team-pipi.svg'
import yo from './team-mariano.svg'
import virgi from './team-virginia.svg'
import dani from './dani.svg'


function Team() {
    return (
        <section className="container-team" id="team">
            <div className="container-titulo-team">
                <h1>TEAM</h1>
                <div className="container-info-titulo-team">
                    <p>PERSONAS REALES, DETRÀS DE UN PROYECTO REAL.</p>
                    <p>¡Contacta con nosotros! Nos encanta hablar con la comunidad y tienen nuestro Discord  para contactarse con nosotros directamente.</p>
                </div>
            </div>
            
            <div className="container-articles-team">
                <article className="articles-team">
                    <img src={lea} />

                    <h3>LEANDRO VITALE</h3>

                    <p>Co-Founder,Full-Stack & Blockchain Developer.</p>
                </article>

                <article className="articles-team">
                    <img src={juli} />

                    <h3>JULIETA FREDES</h3>

                    <p>Co-Founder, Web Developer, Community Manager</p>
                </article>

                <article className="articles-team">
                    <img src={pipi} />

                    <h3>YAMINA PIPOLO</h3>

                    <p>Co-Founder, Artist & UX/UI Designer</p>
                </article>

                <article className="articles-team">
                    <img src={yo} />

                    <h3>MARIANO VITALE</h3>

                    <p>Web Developer ,Lead Moderator in RRSS</p>
                </article>

                <article className="articles-team">
                    <img src={virgi} />

                    <h3>VIRGINIA FRAGAPANE</h3>

                    <p>Copywriter</p>
                </article>

                <article className="articles-team">
                    <img src={dani} />

                    <h3>DANIEL PUGA</h3>

                    <p>Social Media Manager</p>
                </article>
            </div>

            <div className="container-info-team">
                {/* <FontAwesomeIcon className="plus-team" icon={faPlus} /> */}
                <TfiPlus className="plus-team" />
                <div>
                    <h3>TRABAJA CON NOSOTROS.</h3>
                    <p>Estamos en constante crecimiento, envianos tu CV a hello@circumstancer.com y escribenos por las redes para hacérnoslo saber.</p>
                </div>
            </div>
        </section>
    )
}

export { Team }