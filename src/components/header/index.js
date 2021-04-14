import './header.scss';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">Blog</Link>
      <Link className="link" to="/sobre">Sobre</Link>
      <Link className="link" to="/descricao">Descrição</Link>
    </div>
  );
}

export default Header;
