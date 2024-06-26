import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CatDetails = () => {
    const [cat, setCat] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setCat(json);
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
                    title: cat.name,
                }}
            />
            <View>
                <Text style={styles.name}>Name: {cat.name}</Text>
                <Text style={styles.text}>Origin: {cat.origin}</Text>
                <Text style={styles.text}>Temperament: {cat.temperament}</Text>
                <Text style={styles.text}>Description: {cat.description}</Text>
                <Text style={styles.text}>Life span: {cat.life_span}</Text>
                <Text style={styles.text}>Sound: Miau</Text>
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

export default CatDetails;