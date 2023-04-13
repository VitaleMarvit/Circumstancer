import React from "react-dom";
import './index.css';
import green from './block-green.svg';
import orange from './block-orange.svg'

function MemberVip() {
    return (
        <section className="section-member-vip">
            <div>
                <div className="container-img-titulo-vip-uno" id="vip">
                    <img src={green} />
                    <h1>Beneficios de trabajar<br/> con nosotros:</h1>
                </div>

                <div className="container-texto-vip-land-uno">
                    <p>Somos un equipo joven, ágil y entusiasta con mucha ambición y determinación. Sin duda haremos un excelente equipo y lograremos grandes resultados juntos.</p>

                    <p>Buscamos establecer una relación buena y duradera con nuestros clientes.</p>

                    <p>Formar de esta manera un ecosistema de proyectos que se apoyen entre sí para generar alianzas y grandes resultados.</p>
                </div>
            </div>

            <div>
                <div className="container-img-titulo-vip-dos">
                    <img src={orange} />
                    <h1>369 Tools</h1>
                </div>

                <div className="container-texto-vip-land-dos">
                    <p>Somos apasionados del mundo Blockchain y NFT, por eso tenemos muchas herramientas y servicios pensados como utilidad que queremos desarrollar para la comunidad Crypto, estas herramientas serán de uso gratuito, como también contarán con una capa de pago.</p>

                    <p>Desarrollos propios, creados para la comunidad NFT. </p>
                </div>
            </div>
        </section>
    )
}

export { MemberVip }