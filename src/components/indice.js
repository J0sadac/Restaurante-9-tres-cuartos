import pergamino from '../multimedia/pergamino.png';

function Indice () {

    return(
        <>
            <section className="indice">
                <img className="pergamino" src={pergamino} alt="indice" />
                <span className='nombre'>Snacks</span>
            </section>

            <section className="indice">
                <img className="pergamino" src={pergamino} alt="indice" />
                <span className='nombre'>Platos fuertes</span>
            </section>

            <section className="indice">
                <img className="pergamino" src={pergamino} alt="indice" />
                <span className='nombre'>Bebidas</span>
            </section>
        </>
    );
};

export default Indice