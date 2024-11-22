// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div>
          <a className="logo" href="/">Energia Limpa</a>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tipos">Tipos</Link></li>
          <li><Link to="/beneficios">Benefícios</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
