import { Slot } from 'expo-router';
import { Text } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';

export default function HomeLayout() {
  return (
    <>
      <Header />
      {/* <Slot /> */}
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Footer />
    </>
  );
}