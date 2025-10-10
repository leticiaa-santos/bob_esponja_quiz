import logo from '../assets/bob_esponja/logo.webp';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
    const navigate =useNavigate();

  return (
    <main className="inicial">
      <img src={logo} className="logo" alt="Logo Bob Esponja"  />
     
      <button onClick={() => navigate('/dsgo')} className='entrar'>
        Entrar
      </button>
    </main>
  );
}
