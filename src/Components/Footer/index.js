import React from "react-dom";
import './index.css';
import { Link } from "react-scroll";
import tres from './tresseis.svg';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import opensea from '../Nav/opensea.svg';
import ether from './etherscan.svg';


function Footer() {
    return (
        <footer className="container-footer">
            <div className="container-imagenes-footer">
                <img className="treseis" src={tres} />
                <img className="logo-footer" src={logo} />
            </div>

            <ul className="container-rrss-footer">
                <li>
                    <a href="" className="rrss-link-footer">
                        <img className=" ether-footer" src={ether}/>
                    </a>
                </li>

                <li>
                    <a href="" className="rrss-link-footer">
                        <img className=" opensea-footer" src={opensea}/>
                    </a>
                </li>

                <li>
                    <a href="https://discord.com/invite/vUrhRsEBSG" className="rrss-link-footer">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/circumstancer_/" className="rrss-link-footer">
                        <FontAwesomeIcon className="insta-footer" icon={faInstagram} />
                    </a>
                </li>

                <li>
                    <a href="https://twitter.com/Circumstancer_" className="rrss-link-footer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
            </ul>

            <h2 className="h2-footer">A real project, made by real people</h2>
        </footer>
    )
}

export { Footer }