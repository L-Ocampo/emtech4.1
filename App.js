import React from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import Status from './components/Status'; 
import MessageList from './components/MessageList'; 
import Toolbar from './components/Toolbar'; 
import InputMethodEditor from './components/InputMethodEditor';

export default function App() {
  return (
    <View style={styles.container}>
      <Status />
      {/* <MessageList />
      <Toolbar />
      <InputMethodEditor /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
