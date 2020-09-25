import React, { useReducer } from 'react';
import { Text } from 'react-native';
import { useMutation, gql } from '@apollo/client';
import * as SecureStore from 'expo-secure-store';
import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';
import UserForm from '../components/UserForm';

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const SignUp = props => {
  const storeToken = token => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      storeToken(data.signUp);
    }
  });

  if (loading) return <Loading></Loading>;

  return (
    <React.Fragment>
      {error && <Text>Error signing up</Text>}
      <UserForm
        formType="signUp"
        action={signUp}
        navigation={props.navigation}
      ></UserForm>
    </React.Fragment>
  );
};
SignUp.navigationOptions = {
  title: 'Register'
};

export default SignUp;
