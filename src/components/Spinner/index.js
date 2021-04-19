import spinnerAnimated from '~/assets/animations/spinner.svg';

import { Container } from './styles';

const Spinner = () => {
  return (
    <Container>
      <img src={spinnerAnimated} alt="Loading" />
    </Container>
  );
};

export default Spinner;
