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
      <Text>Runtime Version: {Updates.runtimeVersion}</Text>
      <Text>UpdateId: {Updates.updateId}</Text>
      <Text>Update enabled: {Updates.isEnabled}</Text>
      <Text>Update available: {Updates.isAvailable}</Text>
      <Text>EmergencyLaunch: {Updates.isEmergencyLaunch}</Text>
      <Text>EmbeddedLaunch: {Updates.isEmbeddedLaunch}</Text>
    </View>
  )
};
export default Layout;