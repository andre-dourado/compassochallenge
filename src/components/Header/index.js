import logoImg from '~/assets/images/logo.svg';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="Git Star Logo" />
      </div>
    </Container>
  );
};

export default Header;
