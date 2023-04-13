import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import proyectMobile from "./369Project-mobile.svg"
import proyect from "./369project.svg"

function Proyect() {
    return (
        <section className="container-proyect" id="proyect">
            <div className="container-imagen-proyecto">
                <img className="imagen-mobile" src={proyectMobile} />
                <img className="imagen" src={proyect} />
                <NavLink to="/369Proyect">READ ABOUT 369 <FontAwesomeIcon className="arrow" icon={faArrowRight} /></NavLink>
            </div>
        </section>
    )
}

export { Proyect }