import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
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
  }
`;

const MyNotes = props => {
  const { loading, error, data } = useQuery(GET_MY_NOTES);
  if (loading) return <Loading></Loading>;
  if (error) return <Text>Error Loading data</Text>;
  if (data.me.notes.length!==0) {
      return <NoteFeed notes={data.me.notes} navigation={props.navigation}></NoteFeed>
  } else {
      return <Text>No notes yet</Text>
  }
};

MyNotes.navigationOptions = {
  title: 'My Notes'
};

export default MyNotes;
