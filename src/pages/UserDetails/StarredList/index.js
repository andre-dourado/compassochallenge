import { useEffect, useState } from 'react';

import api from '~/services/api';

import Spinner from '~/components/Spinner';

import StarredItem from './StarredItem';

import { Container } from './styles';

const StarredList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);

      const { data } = await api.get(`/users/${username}/starred`);

      setRepos(data);
    } catch (err) {
      if (err.response.status == 404) {
        setShowError(true);
        return;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      {loading && <Spinner />}

      {!loading && showError && 'Nenhum repositório encontrado'}

      {!loading &&
        repos.map((repo) => (
          <StarredItem
            key={repo.id}
            ownerUsername={repo.owner.login}
            name={repo.name}
            forksCount={repo.forks_count}
            stargazersCount={repo.stargazers_count}
            language={repo.language}
          />
        ))}
    </Container>
  );
};

export default StarredList;
