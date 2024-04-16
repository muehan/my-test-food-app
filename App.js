import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
  const runTypeMessage = Updates.isEmbeddedLaunch
  ? 'This app is running from built-in code'
  : 'This app is running an update';

  return (
    <View style={styles.container}>
      <Text>This is the best app ever</Text>
      <Text>{runTypeMessage}</Text>
      <Text>update test</Text>
      <Text>Sali du food shopper</Text>
      <Text>this is supposed to be here</Text>
      <StatusBar style="auto" />
    </View>
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
