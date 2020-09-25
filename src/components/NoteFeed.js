import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Note from './Note';

const notes = [
  { id: 0, content: 'Giant Steps' },
  { id: 1, content: 'Second Note' },
  { id: 2, content: 'Third Note' },
  { id: 3, content: 'Fourth Note' },
  { id: 4, content: 'Fifth Note' },
  { id: 7, content: 'Sixth Note' },
  { id: 8, content: 'Seventh Note' },
  { id: 9, content: 'Eighth Note' },
  { id: 10, content: 'Ninth Note' },
  { id: 11, content: 'Tenth Note' },
  { id: 12, content: 'Eleventh Note' }
];

const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

const NoteFeed = props => {
  return (
    <View>
      <FlatList
        data={props.notes}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <Separator></Separator>}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Note', { id: item.id })}
          >
            <FeedView>
              <Note note={item}></Note>
            </FeedView>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

export default NoteFeed;
