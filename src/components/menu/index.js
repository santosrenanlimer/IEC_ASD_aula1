import './menu.scss';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <Link className="link" to="/">Blog</Link>
      <Link className="link" to="/sobre">Sobre</Link>
      <Link className="link" to="/descricao">Descrição</Link>
    </div>
  );
}

export default Menu;
