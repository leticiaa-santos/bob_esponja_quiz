import { Outlet } from 'react-router-dom';
import { Menu } from '../Componentes/Menu';

export function DSGo() {
    return (
        <main className="corpo">
            <Outlet/>

            <footer className='espaco-menu' role="contentinfo">
                <nav role="navigation" aria-label="Menu principal">
                    <Menu/>  
                </nav>
            </footer>
        </main>
    )
}
