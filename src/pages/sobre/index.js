import './sobre.scss';
import Menu from '../../components/menu'
import ImageProfile from '../../assets/foto_perfil.jpg'

const Sobre = () => {
  return (
    <div className="container sobre-container">
      <Menu />
      <div className="content sobre-content">
        <div className="profile">
          <img src={ImageProfile} />
        </div>
        <div className="description">
          <h2>Renan Santos</h2>
          <p>
            Tenho 29 anos, sou formado em Tecnólogo em Análise de Desenvolvimento de Sistema pela UNICAMP (2014). Possuo 5 anos de experiências na área de TI, trabalhando na maioria das vezes com desenvolvimento de desenvolvimento, em diversas linguagens, como PHP, Java, e mais atualmente com Node JS, e também com frameworks como React e Vue.
          </p>
          <p>
            Atualmente trabalho com líder Técnico na empresa HDN Digital, iniciei nessa função em outubro de 2020 , e isso está sendo um grande desafio na minha carreira, inclusive esse foi uns dos motivos para eu entrar nesse curso de Pós Graduação, visando ampliar meus conhecimentos dentro do desenvolvimento de software.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
