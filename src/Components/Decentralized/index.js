import React from 'react-dom';
import './index.css';
import decentralized from "./colors.svg"

function Decentralized() {
    return (
        <>
            <section className="container-decentralized des-uno" id='decentralized'>
                <div className='container-imagen-decentralized'>
                    <img src={decentralized} />
                </div>

                <div className="container-titulo-decentralized">
                    <h1>100%</h1>
                    <h2>DECENTRALIZED</h2>
                </div>

                <div className="container-texto-decentralized">
                    <p>El Circumstancer es una plataforma 100% Descentralizada. Utilizamos la red IPFS para el hosting de nuestra web, imágenes y metadata.</p>

                    <div>
                        <p>Web CID: </p>
                        <p className='p-largo'>bafybeidefaftpp4ih3xohs7k7pazlpmdu6bewyfasdieoyr4a45gy2fxwm</p>
                    </div>

                    <p>Puedes consumir nuestro sitio en cualquiera de los Gateways Públicos de IPFS </p>

                    <ul>
                        <li>Image CID: Coming Soon..</li>
                        
                        <li>Metadata CID: Coming Soon..</li>

                        <li>Smart Contract: Coming Soon..</li>
                    </ul>
                </div>
            </section>

            <section className="container-decentralized des-dos" id='decentralized'>
                <div className='container-imagen-decentralized'>
                    <img src={decentralized} />
                    <h1>100%</h1>
                    <h2>DECENTRALIZED</h2>
                </div>

                <div className="container-texto-decentralized">
                    <p>El Circumstancer es una plataforma 100% Descentralizada. Utilizamos la red IPFS para el hosting de nuestra web, imágenes y metadata.</p>

                    <div>
                        <p>Web CID: </p>
                        <p className='p-largo'>bafybeidefaftpp4ih3xohs7k7pazlpmdu6bewyfasdieoyr4a45gy2fxwm</p>
                    </div>

                    <p>Puedes consumir nuestro sitio en cualquiera de los Gateways Públicos de IPFS </p>

                    <ul>
                        <li>Image CID: Coming Soon..</li>
                        
                        <li>Metadata CID: Coming Soon..</li>

                        <li>Smart Contract: Coming Soon..</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export { Decentralized }