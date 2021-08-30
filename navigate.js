import React, {useState, useEffect} from 'react';
import Settings from './Screens/Settings';
import Main from './Screens/Main';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import { Linking } from 'react-native';

const Stack = createStackNavigator();

export default function Navigate() {
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Home');

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        setInitialRoute('Home'); // e.g. "Home"
      });
  
      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
            setInitialRoute('Settings'); // e.g. "Settings"
          }
          setLoading(false);
        });
  
        messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    }
  }

  useEffect(() => {
    requestUserPermission();
  }, []);

  if (loading) {
    return null;
  }

  const deepLinking = {
    prefixes: ['awesomefirebase://'],
    config: {
      screens: {
        Home: '*',
        Settings: 'Settings/:pageId/',
      },
    },
  };

  return (
    <NavigationContainer linking={deepLinking}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{title: 'Главная'}} />
        <Stack.Screen 
          name="Settings"
          component={Settings} 
          options={{title: 'Настройки'}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
};