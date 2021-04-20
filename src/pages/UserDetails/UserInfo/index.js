import { GoStar, GoRepo } from 'react-icons/go';

import { Container, Avatar, Username, Navigation, Button } from './styles';

const UserInfo = ({ user }) => {
  return (
    <Container>
      <Avatar src={user.avatar_url} alt="Avatar" />

      <Username>{user.login}</Username>

      <Navigation>
        <Button>
          <GoStar />
        </Button>
        <Button>
          <GoRepo />
        </Button>
      </Navigation>
    </Container>
  );
};

export default UserInfo;
