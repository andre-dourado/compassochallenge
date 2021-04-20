import { Link } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';

import { Container, Username, Avatar } from './styles';

const UserItem = ({ login, avatarUrl }) => {
  return (
    <Container>
      <Avatar src={avatarUrl} />
      <Username>{login}</Username>
      <Link to={login}>
        <GoChevronRight />
      </Link>
    </Container>
  );
};

export default UserItem;
