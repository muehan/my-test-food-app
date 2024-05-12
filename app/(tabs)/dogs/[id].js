import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const DogDetails = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDog(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Stack.Screen
        options={{
          title: dog.name,
        }}
      />
      <View>
        <Text style={styles.name}>Name: {dog.name}</Text>
        <Text style={styles.text}>Origin: {dog.origin}</Text>
        <Text style={styles.text}>Temperament: {dog.temperament}</Text>
        <Text style={styles.text}>Description: {dog.description}</Text>
        <Text style={styles.text}>Life span: {dog.life_span}</Text>
        <Text style={styles.text}>Sound: Bark</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
  },
});

export default DogDetails;