import React from "react-dom";
import './index.css';
import circumstancer from './Circumstancer1.png'

function WhoIs() {
    return (
        <section className="container-whois" id="who">
            <div className="container-imagen-who">
                <img src={circumstancer} />
            </div>

            <div className="container-titulo-who">
                <h1>WHO IS</h1>
                <h2>CIRCUMSTANCER</h2>
            </div>

            <div className="container-texto-who">
                <p>Circumstancer es una colección de 9.999 NFTs únicos, digitales y coleccionables. Creados sobre la blockchain de Etherium como tokens ERC-721, alojados en IPFS y generados programáticamente a partir de 157 rasgos posibles.</p>

                <p>¿Despertar en otro espacio-tiempo en donde el mundo que conocemos se desarrolla bajo el mar? ¿Alienígenas caminando en las calles? ¿La tierra es lava?. Nada doblega el carácter inmaculado del Circumstancer, una simple sonrisa, un leve gesto son demasiado. Nada lo para. Él se adapta a todo y sigue avanzando a su próxima aventura.</p>
                
                <p>La mente es una hoja en blanco dispuesta a ser dibujada con los crayones de la creatividad, colores y texturas son el resultado de la cabeza alocada de nuestra artista.</p>
            </div>
        </section>
    )
}

export { WhoIs }