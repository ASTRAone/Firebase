import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Main = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>Вы на странице Main</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Settings', {
          pageId: 55
        })}
        style={styles.sectionLinkContainer} >
        <Text style={styles.sectionLinkText}>Перейти на вкладку Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionText: {
    textAlign: 'center',
    color: 'black',
  },
  sectionLinkContainer: {
    marginTop: 20,
    backgroundColor: 'green',
  },
  sectionLinkText: {
    textAlign: 'center',
    padding: 20,
  },
});

export default Main;