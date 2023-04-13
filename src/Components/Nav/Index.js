import React, { useState } from "react";
import './index.css'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import opensea from './opensea.svg'
import logonav from './logo.png'

function Nav() {

    const [hamburguer, setHamburguer] = useState(false);
    const [hamEffect, setHamEffect] = useState(false);

    return (
        <nav className="nav">

            <div id="hamburguer" className={hamburguer ? "three col filter" : "three col"} onClick={() => {setHamburguer(!hamburguer)}}>
                <div 
                    className={hamEffect ? 'hamburger is-active' : 'hamburger'} 
                    onClick={() => setHamEffect(!hamEffect)}
                    id="hamburger-6"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>

            <ul className={hamburguer ? "ul-seccions ul-seccions-active" : "ul-seccions"}>
                <li className="li-uno-secciones">
                    <Link to="header" className="a-link">
                        <img className="logo-nav" src={logonav} />
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="who" className="a-link" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        WHO IS
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="decentralized" className="a-link" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        DESCENTRALIZED
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="utilities" className="a-link" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        UTILITIES
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="proyect" className="a-link" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        369 PROJECT
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="roadmap" className="a-link" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        ROAD MAP
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="team" className="a-link" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        TEAM
                    </Link>
                </li>
            </ul>
                
            <ul className="ul-redes">
                <li>
                    <a href="" className="rrss-link">
                        <img className="rrss" src={opensea}/>
                    </a>
                </li>

                <li>
                    <a href="https://discord.com/invite/vUrhRsEBSG" className="rrss-link">
                        <FontAwesomeIcon className="rrss" icon={faDiscord} />
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/circumstancer_/" className="rrss-link">
                        <FontAwesomeIcon className="rrss" icon={faInstagram} />
                    </a>
                </li>

                <li>
                    <a href="https://twitter.com/Circumstancer_" className="rrss-link">
                        <FontAwesomeIcon className="rrss" icon={faTwitter} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export { Nav };