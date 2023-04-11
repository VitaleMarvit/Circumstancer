import React from "react";
import './index.css';
import imagenHeader from './circumstancer-fondo.png'

function Header() {
    return (
        <section id="header" className="section-header">
            <div>
                <img src={imagenHeader} className="imagen-header" />
            </div>

            <div className="container-general-header">
                <div className="container-uno">
                    <div className="container-rosa">
                        <h1>9.999</h1>
                        <p>CIRCUMSTANCERS ON THE WAY</p>
                    </div>

                    <div className="container-button-uno">
                        <button>CONNECT MY WALLET</button>
                    </div>
                </div>

                <div className="container-dos">
                    <div className="container-celeste">
                        <h1>25</h1>
                        <p>DAYS TO NEXT RELEASE</p>
                    </div>

                    <div className="container-button-dos">
                        <button>SHUT UP AND TAKE MY MONEY</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Header }