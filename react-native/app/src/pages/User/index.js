import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Name,
  Bio,
  Avatar,
  Stars,
  Starred,
  Info,
  OwnerAvatar,
  Title,
  Author,
} from './styles';
import api from '../../services/api';

// import { Container } from './styles';

export default function User(props) {
  const [stars, setStarred] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async page => {
    const { navigation } = props;
    const user = navigation.getParam('user');
    const response = await api.get(`/users/${user.login}/starred?page=${page}`);
    setStarred(response.data);
  };

  const handlePagination = async () => {
    await setPage(page + 1);
    loadUser();
  };

  const user = props.navigation.getParam('user');
  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>
      <Stars
        data={stars}
        keyExtractor={star => String(star.id)}
        renderItem={({ item }) => (
          <Starred>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
        onEndReached={handlePagination}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
}

User.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('user').name,
});
