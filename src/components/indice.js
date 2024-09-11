import React from 'react';
import pergamino from '../multimedia/pergamino.png';

function Indice({ scrollToSection, refs }) {

    return(
        <>
            <section className="indice" onClick={() => scrollToSection(refs.snacksRef)}>
                <img loading='lazy' className="pergamino" src={pergamino} alt="indice" />
                <span className='nombre'>Snacks</span>
            </section>

            <section className="indice" onClick={() => scrollToSection(refs.platoFuerteRef)}>
                <img loading='lazy' className="pergamino" src={pergamino} alt="indice" />
                <span className='nombre'>Platos fuertes</span>
            </section>

            <section className="indice" onClick={() => scrollToSection(refs.bebidasRef)}>
                <img loading='lazy' className="pergamino" src={pergamino} alt="indice" />
                <span className='nombre'>Bebidas</span>
            </section>

            <section className="indice" onClick={() => scrollToSection(refs.paquetesRef)}>
                <img loading='lazy' className="pergamino" src={pergamino} alt="indice" />
                <span className='nombre'>Promociones</span>
            </section>
        </>
    );
}

export default Indice;
