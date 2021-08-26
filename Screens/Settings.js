import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Settings = () => {

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>Вы на странице Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionText: {
    textAlign: 'center'
  },
});

export default Settings;