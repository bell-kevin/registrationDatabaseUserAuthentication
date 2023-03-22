import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import { storeRegistrationData } from '../util/http';

const initialState = {
  isDataCorrect: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CONFIRM':
      return { ...state, isDataCorrect: true };
    case 'REJECT':
      return { ...state, isDataCorrect: false };
    default:
      return state;
  }
};

const ValidationScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstName, lastName, phone: phoneNumber, email } = useContext(UserContext);

  const handleConfirm = async () => {
    dispatch({ type: 'CONFIRM' });
    const userData = { firstName, lastName, phoneNumber, email };
    try {
      await storeRegistrationData(userData);
      Alert.alert(
        'Data Confirmed',
        'Thank you for confirming the data.',
        [{ text: 'OK', onPress: () => navigation.popToTop() }],
      );
    } catch (error) {
      Alert.alert(
        'Could not add new user',
        'Please try again later.',
        [{ text: 'OK', onPress: () => navigation.popToTop() }],
      );
    }
  };
  

  const handleReject = () => {
    dispatch({ type: 'REJECT' });
    Alert.alert(
      'Data Not Confirmed',
      'Please verify the data again. Could not add new user.',
      [{ text: 'OK', onPress: () => navigation.popToTop() }],
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'tan' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: {firstName} {lastName}</Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Phone Number: {phoneNumber}</Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Email: {email}</Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Is the above info. correct?</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginRight: 10,
            width: '40%',
            alignItems: 'center',
          }}
          onPress={handleConfirm}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            width: '40%',
            alignItems: 'center',
          }}
          onPress={handleReject}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ValidationScreen;

