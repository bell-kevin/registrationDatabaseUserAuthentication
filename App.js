import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/ui/IconButton';
import NameScreen from './screens/NameScreen';
import PhoneScreen from './screens/PhoneScreen';
import ValidationScreen from './screens/ValidationScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      {authCtx.hasLoggedInBefore ? (
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="exit"
                color={tintColor}
                size={24}
                onPress={authCtx.logout}
              />
            ),
          }}
        />
      ) : (
        <Stack.Screen name="Name" component={NameScreen} options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}  />
      )}} />
      )}
      <Stack.Screen name="Phone" component={PhoneScreen} />
      <Stack.Screen name="Validation" component={ValidationScreen} />
    </Stack.Navigator>
  );
}


function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem('token');

        if (storedToken) {
          authCtx.authenticate(storedToken);
          authCtx.setHasLoggedInBefore(true);
        } else {
          authCtx.setHasLoggedInBefore(false);
        }

        await SplashScreen.hideAsync();
      } catch (err) {
        console.log(err);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}
