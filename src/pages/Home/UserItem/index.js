import { GoChevronRight } from 'react-icons/go';

import { Container, Username, Avatar } from './styles';

const UserItem = ({ login, avatarUrl }) => {
  return (
    <Container>
      <Avatar src={avatarUrl} />
      <Username>{login}</Username>
      <GoChevronRight />
    </Container>
  );
};

export default UserItem;
