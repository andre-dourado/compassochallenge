import { Link } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';

import { Container, Username, Avatar } from './styles';

const UserItem = ({ login, avatarUrl }) => {
  return (
    <Link to={login}>
      <Container>
        <Avatar src={avatarUrl} />
        <Username>{login}</Username>

        <GoChevronRight />
      </Container>
    </Link>
  );
};

export default UserItem;
