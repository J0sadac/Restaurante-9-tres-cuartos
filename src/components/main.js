import React, {useRef} from 'react';

import Logo from '../multimedia/logo.png';
import gifLogo from '../multimedia/gif restaurante.gif';
import SeparadorSnacks from '../multimedia/separador snacks.png';
import SeparadorPlato from '../multimedia/separador plato fuerte.png';
import SeparadorBebidas from '../multimedia/separador bebidas.png';
import SeparadorPromos from '../multimedia/separador promociones.png';

import Pergamino from './indice';
import Snacks from './snacks';
import PlatoFuerte from './platoFuerte';
import Bebidas from './bebidas';
import Paquetes from './paquetes';



function Main () {
    const snacksRef = useRef(null);
    const platoFuerteRef = useRef(null);
    const bebidasRef = useRef(null);
    const paquetesRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <section className='head'>
                <img loading='lazy' className='logo' src={Logo} alt='Restaurante 9 3/4' />
                <h1 className='titulo'>Restaurante 9 3/4</h1>
                <img loading='lazy' className='logo-titulo' src={gifLogo} alt='titulo' />
            </section>

            <Pergamino scrollToSection={scrollToSection} refs={{snacksRef, platoFuerteRef, bebidasRef, paquetesRef}} />
            

            <section ref={snacksRef} className='seccion'>
                <img loading='lazy' className='separador' alt='separador' src={SeparadorSnacks} />
                <Snacks />
            </section>

            <section ref={platoFuerteRef} className='seccion'>
                <img loading='lazy' className='separador' alt='separador' src={SeparadorPlato} />
                <PlatoFuerte />
            </section>

            <section ref={bebidasRef} className='seccion'>
                <img loading='lazy' className='separador' alt='separador' src={SeparadorBebidas} />
                <Bebidas />
            </section>

            <section ref={paquetesRef} className='seccion'>
                <img loading='lazy' className='separador' alt='separador' src={SeparadorPromos} />
                <Paquetes />
            </section>
        </>
    );
};

export default Main;