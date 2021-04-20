import { GoStar, GoRepoForked } from 'react-icons/go';

import { Container, RepoFullNameText } from './styles';

const StarredItem = ({
  ownerUsername,
  name,
  forksCount,
  stargazersCount,
  language,
}) => {
  return (
    <Container>
      <RepoFullNameText>
        {ownerUsername}/<span>{name}</span>
      </RepoFullNameText>

      <div>
        {language}
        <GoStar />
        {stargazersCount}
        <GoRepoForked />
        {forksCount}
      </div>
    </Container>
  );
};

export default StarredItem;
