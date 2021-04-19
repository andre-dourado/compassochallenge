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

  const fetchUser = useCallback(async ({ search }) => {
    try {
      setLoading(true);

      const request = `${process.env.REACT_APP_GITHUB_API_URL}/users/${search}`;
      const { data } = await api.get(request.trim());

      setUsers([data]);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <SearchField placeholder="Busque por usuário" onSubmit={fetchUser} />

        {loading && <Spinner />}

        {!loading && (
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
