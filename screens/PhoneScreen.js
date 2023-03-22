import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { UserContext } from '../context/userContext';

const PhoneScreen = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const [phone, setPhone] = useState('');
  const [showError, setShowError] = useState(false);

  const handleNextPress = () => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      setShowError(true);
    } else {
      setShowError(false);
      userContext.setPhone(phone);
      navigation.navigate('Email');
    }
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(text)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };
  
  


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your phone</Text>
      <TextInput
        style={styles.input}
        placeholder="801-292-8544"
        keyboardType="numeric"
        value={phone}
        onChangeText={handlePhoneChange}
      />
      {showError && (
        <Text style={styles.errorText}>Please enter a valid phone number in the format XXX-XXX-XXXX</Text>

      )}
      <Button
        title="Next"
        onPress={handleNextPress}
        disabled={phone.length !== 12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'darkgreen',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'darkgreen',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    fontSize: 18,
    color: 'darkgreen',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PhoneScreen;



