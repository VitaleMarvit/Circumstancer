import React from "react-dom";
import './index.css';

function Roadmap() {
    return (
        <section className="container-roadmap" id="roadmap">
            <div className="container-titulo-roadmap">
                <h1>ROAD</h1>
                <h2>MAP</h2>
            </div>

            <div className="container-articles-roadmap">
                <article className="article">
                    <h2>15%</h2>
                    <p>SOMOS ÙTILES!!</p>
                </article>

                <article className="article">
                    <h2>30%</h2>
                    <p>SORTEO 6 NFT</p>
                </article>

                <article className="article">
                    <h2>45%</h2>
                    <p>LLAMAR A NUESTROS JEFES</p>
                </article>

                <article className="article">
                    <h2>60%</h2>
                    <p>ON MEMBER VIP</p>
                </article>

                <article className="article">
                    <h2>75%</h2>
                    <p>MURAL ART</p>
                </article>

                <article className="article">
                    <h2>100%</h2>
                    <p>START <br/>369 PROJECT</p>
                </article>
            </div>
        </section>
    )
}

export { Roadmap }