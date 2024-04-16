// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'expo-router';
import HomeLayout from './layouts/HomeLayout';
import * as Updates from 'expo-updates';

export default function App() {
  const runTypeMessage = Updates.isEmbeddedLaunch
  ? 'This app is running from built-in code'
  : 'This app is running an update';

  return (
    <NativeRouter>
      <Route exact path="/" component={HomeLayout} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
