import Logo from '../multimedia/logo.png';
import gifLogo from '../multimedia/gif restaurante.gif';

import Pergamino from './indice';
import Snacks from './snacks';
import PlatoFuerte from './platoFuerte';
import Bebidas from './bebidas';
import Paquetes from './paquetes';


function Main () {

    return(
        <>
            <section className='head'>
                <img className='logo' src={Logo} alt='Restaurante 9 3/4' />
                <h1 className='titulo'>Restaurante 9 3/4</h1>
                <img className='logo-titulo' src={gifLogo} alt='titulo' />
            </section>

            <Pergamino />
            <Snacks />
            <PlatoFuerte />
            <Bebidas />
            <Paquetes />
        </>
    );
};

export default Main