import { Stack } from "expo-router";
import { Text, View } from "react-native";
import * as Updates from 'expo-updates';

const Layout = () => {

  const runTypeMessage = Updates.isEmbeddedLaunch
    ? 'This app is running from built-in code'
    : 'This app is running an update';

  return (
    <View>
      <Text>Home</Text>
      <Text>{runTypeMessage}</Text>
      <Text>{Updates.runtimeVersion}</Text>
      <Text>{Updates.updateId}</Text>
      <Text>{Updates.isEnabled}</Text>
    </View>
  )
};
export default Layout;