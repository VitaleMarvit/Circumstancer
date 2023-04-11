import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import proyect from "./proyect.png"

function Proyect() {
    return (
        <section className="container-proyect" id="proyect">
            <div className="container-imagen-proyecto">
                <img src={proyect} />
                <h1>READ ABOUT 369 <FontAwesomeIcon className="arrow" icon={faArrowRight} /></h1>
            </div>
        </section>
    )
}

export { Proyect }