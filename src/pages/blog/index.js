import './blog.scss';
import Menu from '../../components/menu'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="container">
      <Menu />
      <div className="content blog-content">
        <h2>
          Últimas do blog
        </h2>
        <p>
          <Link className="link-details" to="/blog-details-1">Como ser um profissional de sucesso na área de TI</Link>
        </p>
        <span className="details">
          Confira dicas de como se um profissional de sucesso no mercado de trabalho de TI em 2021
        </span>
        <p>
          <Link className="link-details" to="/blog-details-2">5 dicas para ser um bom líder técnico</Link>
        </p>
        <span className="details">
          Confira dicas para se tornar bom líder técnico no mercado de trabalho
        </span>
      </div>

    </div>
  );
}

export default Blog;
