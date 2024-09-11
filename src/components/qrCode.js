import QRCode from "react-qr-code";
import digital from '../multimedia/digital.png';

function Qrcode (){

    return(
        <div className="qrSection">

            <QRCode
                className="qr"
                value={'https://restaurante9trescuartos.netlify.app'}
            />

            <div className="text">
                <img src={digital} alt="digital" className="icono" />
                <p>¡Escanéame!</p>
            </div>
        </div>
    );
};

export default Qrcode;