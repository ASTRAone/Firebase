import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Settings = ({route, navigation}) => { 
  const {pageId} = route.params;
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>Вы на странице Settings, id: {pageId}</Text>
      <TouchableOpacity 
        onPress={() => {navigation.goBack()}}
        style={styles.sectionLinkContainer}>
        <Text style={styles.sectionLinkText}>Вернуться на страницу Main</Text>
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
    textAlign: 'center'
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

export default Settings;