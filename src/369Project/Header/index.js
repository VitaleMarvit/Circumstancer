import React from "react";
import "./index.css";
import fondoLand1 from "./369project-black.svg";
import fondoLand2 from "./369project-black-mobile.svg";

function HeaderLand() {
    return (
        <section className="section-header-land">
            <div className="container-texto-header-land"> 
                <div className="container-textos">
                    <p>«Si supieras la magnificencia de los números 3, 6 y 9, tendrías la llave del universo»</p>
                    <p>NIKOLA TESLA</p>
                </div>
                <img className="imagen-land-desktop" src={fondoLand1} />
                <img className="imagen-land-mobile" src={fondoLand2} />
            </div>
        </section>
    )
}

export { HeaderLand }