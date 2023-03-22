import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { UserContext } from '../context/userContext';

const NameScreen = ({ navigation }) => {
  const { firstName, lastName, setFirstName, setLastName } = useContext(UserContext);
  const [isValid, setIsValid] = useState(false);
  const [firstNameHasLetter, setFirstNameHasLetter] = useState(false);
  const [lastNameHasLetter, setLastNameHasLetter] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleFirstNameChange = (text) => {
    setFirstName(text.trim());
    setFirstNameHasLetter(/[a-zA-Z]/.test(text.trim()));
    setShowError(!firstNameHasLetter || !lastNameHasLetter);
  };

  const handleLastNameChange = (text) => {
    setLastName(text.trim());
    setLastNameHasLetter(/[a-zA-Z]/.test(text.trim()));
    setShowError(!firstNameHasLetter || !lastNameHasLetter);
  };

  const handleNextPress = () => {
    navigation.navigate("Phone");
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.textContent}>Enter your name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        value={firstName}
        onChangeText={handleFirstNameChange}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        value={lastName}
        onChangeText={handleLastNameChange}
      />
      {showError && (
        <Text style={styles.errorText}>Please enter a first and last name</Text>
      )}
      <Button
        title="Next"
        onPress={handleNextPress}
        disabled={!firstNameHasLetter || !lastNameHasLetter}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  textContent: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'blue',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'blue',
    marginVertical: 8,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NameScreen;
