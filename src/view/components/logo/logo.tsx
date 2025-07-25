import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type LogoProps = {
  isActive: boolean;
}
function Logo({isActive}: LogoProps): JSX.Element {
  const logoClass = isActive ?
    'header__logo-link header__logo-link--active' :
    'header__logo-link';
  const logoLink = isActive ? '#' : AppRoute.Root;

  return (
    <Link
      className = {logoClass}
      to = {logoLink}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}

export default Logo;
