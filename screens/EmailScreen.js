import React, { useContext, useReducer, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { UserContext } from '../context/userContext';

const initialState = { email: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'setEmail':
      return { email: action.email };
    default:
      throw new Error();
  }
}

const EmailScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userContext = useContext(UserContext);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  const handleEmailChange = (email) => {
    dispatch({ type: 'setEmail', email });
    userContext.setEmail(email);
    setIsTouched(true);
    setIsValidEmail(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@example.com"
        value={state.email}
        keyboardType="email-address"
        onChangeText={handleEmailChange}
      />
      {isValidEmail === false && isTouched && (
        <Text style={styles.errorMessage}>Please enter a valid email address in the format example@example.com</Text>
      )}
      <Button
        title="Next"
        onPress={() => navigation.navigate('Validation')}
        disabled={!isValidEmail}
        style={isValidEmail ? styles.buttonEnabled : styles.buttonDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mistyrose',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'darkred',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'darkred',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  buttonEnabled: {
    backgroundColor: 'darkred',
    color: 'white',
  },
  buttonDisabled: {
    backgroundColor: 'lightgray',
    color: 'gray',
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default EmailScreen;




