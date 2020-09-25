import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';
import Loading from "../components/Loading";
const GET_NOTES = gql`
  query notes {
    notes {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const Feed = props => {
  let { loading, error, data } = useQuery(GET_NOTES);
  if (loading) return <Loading></Loading>
  if (error) return <Text>error</Text>;

  return <NoteFeed notes={data.notes} navigation={props.navigation}></NoteFeed>;
};

Feed.navigationOptions = {
  title: 'Feed'
};

export default Feed;
