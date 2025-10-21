import missao from '../assets/bob_esponja/missao.png';
import mapa from '../assets/bob_esponja/localizacao.png';
import bau from '../assets/bob_esponja/inventario.png';
import camera from '../assets/bob_esponja/camera.png';
import { Link } from 'react-router-dom';
export function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to = 'missao' className='link'>
                    
                        <figure>
                            <img src={missao} alt="Imagem do bob esponja e patrick estrela abraçados, para Missões" />
                            <figcaption>Missões</figcaption>
                        </figure>
                    
                    </Link>
                </li>
                <li>
                    <figure>
                        <img src={bau} alt="Imagem de uma pasta estilizada com o rosto do bob esponja, para Inventário" />
                        <figcaption>Inventário</figcaption>
                    </figure>
                    
                </li>
                <li>
                    <figure>
                        <img src={mapa} alt="Imagem da 'placa' que indica a fenda do biquini, para GeoLocalização" />
                        <figcaption>GeoLocalização</figcaption>
                    </figure>
                </li>
                 <li>
                    
                    <figure>
                        <img src={camera} alt="Imagem do patrick deitado com as mãos no queixo admirando, para Camera" />
                        <figcaption>Camera</figcaption>
                    </figure>
                    
                </li>
            </ul>
        </nav>
    )
}