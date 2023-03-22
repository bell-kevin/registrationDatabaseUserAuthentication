import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/userContext';

export default function HomeScreen() {
  const navigation = useNavigation();
  const user = React.useContext(UserContext);

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Account Registration
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonName}
            onPress={() => handlePress('Name')}
          >
            <Text style={styles.buttonText}>Begin</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.userInfoText}>
          Welcome, {user.firstName} {user.lastName}!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 25,
    marginVertical: 10,
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  buttonName: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 10,
    paddingHorizontal: 68,
    width: '100%',
  },
  buttonPhone: {
    backgroundColor: 'forestgreen',
    paddingVertical: 10,
    paddingHorizontal: 67,
    width: '100%',
    marginVertical: 20,
  },
  buttonEmail: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 70,
    width: '100%',
  },
});
