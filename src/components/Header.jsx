import '../index.css';
import mestoLogo from '../images/logo.svg'

function Header() {
  return (
        <header className="header">
          <a href="#" className="header__link">
            <img src={mestoLogo} className="header__logo" alt="Логотип проекта Mesto"/>
          </a>
        </header>
  );
}

export default Header;
