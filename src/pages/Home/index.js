import { useCallback, useState } from 'react';

import api from '~/services/api';

import DefaultLayout from '../_layouts/default';

import Spinner from '~/components/Spinner';
import SearchField from '~/components/SearchField';

import UserItem from './UserItem';

import { Container, List } from './styles';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const fetchUser = useCallback(async ({ search }) => {
    try {
      setLoading(true);

      const { data } = await api.get(`/users/${search}`);

      setUsers([data]);
      setShowError(false);
    } catch (err) {
      if (err.response.status == 404) {
        setShowError(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <SearchField placeholder="Busque por usuário" onSubmit={fetchUser} />

        {loading && <Spinner />}

        {!loading && showError && 'Nenhum usuário encontrado'}

        {!loading && !showError && (
          <List>
            {users.map((user) => (
              <UserItem
                key={user.id}
                login={user.login}
                avatarUrl={user.avatar_url}
              ></UserItem>
            ))}
          </List>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
