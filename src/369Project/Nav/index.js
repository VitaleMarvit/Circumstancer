import React, { useState } from "react";
import './index.css'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import opensea from './opensea.svg'
import logonav from './logo.png'

function NavLand() {

    const [hamburguer, setHamburguer] = useState(false);
    const [hamEffect, setHamEffect] = useState(false);

    return (
        <nav className="nav-land">

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

            <ul className={hamburguer ? "ul-seccions-land ul-seccions-active-land" : "ul-seccions"}>
                <li className="li-uno-secciones">
                    <Link to="header-land" className="a-link-land">
                        <img className="logo-nav" src={logonav} />
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="369-land" className="a-link-land" offset={-75}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        369 PROJECT
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="utilidades-land" className="a-link-land" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        UTILIDADES
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="vip" className="a-link-land" offset={-100}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        MEMBER VIP
                    </Link>
                </li>

                <li onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}>
                    <Link to="team-land" className="a-link-land" offset={-50}
                        onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                    >
                        TEAM
                    </Link>
                </li>
            </ul>
                
            <ul className="ul-redes">
                <li>
                    <a href="" className="rrss-link-land">
                        <img className="rrss-land" src={opensea}/>
                    </a>
                </li>

                <li>
                    <a href="https://discord.com/invite/vUrhRsEBSG" className="rrss-link-land">
                        <FontAwesomeIcon className="rrss-land" icon={faDiscord} />
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/circumstancer_/" className="rrss-link-land">
                        <FontAwesomeIcon className="rrss-land" icon={faInstagram} />
                    </a>
                </li>

                <li>
                    <a href="https://twitter.com/Circumstancer_" className="rrss-link-land">
                        <FontAwesomeIcon className="rrss-land" icon={faTwitter} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export { NavLand };