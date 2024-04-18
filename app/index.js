// import { StyleSheet, Text, View, Button } from "react-native";
// import * as Updates from 'expo-updates';
// import { useRouter } from 'expo-router';


// const WelcomeScreen = () => {
//     const navigation = useRouter();

//     const runTypeMessage = Updates.isEmbeddedLaunch
//         ? 'This app is running from built-in code'
//         : 'This app is running an update';

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Cat X Dog</Text>
//             <Text style={styles.subtitle}>Welcome</Text>
            
//             <Button title="Cats tab" onPress={() => navigation.push("/cats")} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 10,
//     },
//     subtitle: {
//         fontSize: 16,
//         textAlign: "center",
//     },
// });

// export default WelcomeScreen;

import { Redirect } from "expo-router";

const Index = () => {
  return <Redirect href="/cats" />;
};
export default Index;