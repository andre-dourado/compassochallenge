import { Link } from 'react-router-dom';

import logoImg from '~/assets/images/logo.svg';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <div>
        <Link to=".">
          <img src={logoImg} alt="Git Star Logo" />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
