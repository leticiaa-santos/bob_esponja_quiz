import { useState } from 'react';
import missao from '../assets/bob_esponja/missao.png';
import mapa from '../assets/bob_esponja/localizacao.png';
import bau from '../assets/bob_esponja/inventario.png';
import camera from '../assets/bob_esponja/camera.png';
import espatula from '../assets/bob_esponja/icon_espatula.png';
import { Link } from 'react-router-dom';

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='menu'>
      {/* Botão para abrir/fechar no mobile */}
      <button
        className='menu-dropdown'
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="menu-list"
      >
        <section className='icon-menu'>
          <img src={espatula} alt="imagem da espatula do bob esponja" />
          Menu
        </section>
      </button>

      {/* Lista de itens do menu */}
      <ul
        id="menu-list"
        className={open ? 'open' : ''}
        role="menu"
      >
        {/* Item 1: Missões (link interativo) */}
        <li role="none">
          <Link 
            to='missao' 
            className='link' 
            role="menuitem"
            aria-label="Missões"
          >
            <figure>
              <img src={missao} alt="Bob Esponja e Patrick abraçados" />
              <figcaption aria-hidden="true">Missões</figcaption>
            </figure>
          </Link>
        </li>

        
        <li role="menuitem">
          <figure>
            <img src={bau} alt="Pasta estilizada com o rosto do Bob Esponja" />
            <figcaption aria-hidden="true">Inventário</figcaption>
          </figure>
        </li>

        
        <li role="menuitem">
          <figure>
            <img src={mapa} alt="Placa indicando a Fenda do Biquíni" />
            <figcaption aria-hidden="true">GeoLocalização</figcaption>
          </figure>
        </li>

       
        <li role="menuitem" >
          <figure>
            <img src={camera} alt="Patrick deitado admirando" />
            <figcaption aria-hidden="true">Camera</figcaption>
          </figure>
        </li>
      </ul>
    </nav>
  );
}
