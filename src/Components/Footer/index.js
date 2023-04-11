import React from "react-dom";
import './index.css';
import { Link } from "react-scroll";
import tres from './tresseis.png';
import logo from './logo.png';
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
                    <Link className="rrss-link-footer">
                        <img className=" ether-footer" src={ether}/>
                    </Link>
                </li>

                <li>
                    <Link className="rrss-link-footer">
                        <img className=" opensea-footer" src={opensea}/>
                    </Link>
                </li>

                <li>
                    <Link className="rrss-link-footer">
                        <FontAwesomeIcon icon={faDiscord} />
                    </Link>
                </li>

                <li>
                    <Link className="rrss-link-footer">
                        <FontAwesomeIcon className="insta-footer" icon={faInstagram} />
                    </Link>
                </li>

                <li>
                    <Link className="rrss-link-footer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                </li>
            </ul>

            <h2 className="h2-footer">A real project, made by real people</h2>
        </footer>
    )
}

export { Footer }