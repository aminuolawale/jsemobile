import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Button } from 'react-native';

const Settings = props => {
  const signOut = () => {
    SecureStore.deleteItemAsync('token').then(
      props.navigation.navigate('Auth')
    );
  };
  return (
    <View>
      <Button title="Sign Out" onPress={signOut}></Button>
    </View>
  );
};

Settings.navigationOptions = {
  title: 'Settings'
};

export default Settings;
