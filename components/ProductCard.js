import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, Pressable, ScrollView, Switch, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({ product }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [timesPressed, setTimesPressed] = useState(0);

    const toggleSwitch = () => setIsEnabled(!isEnabled);
    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <Image
                source={require("../images/pizza-marinara.avif")}
                style={styles.image}
            />
        <Text style={styles.title}>Pizza Marinara</Text>
        <Text style={styles.description}>Tomatensaus, knoflook, oregano en olijfolie</Text>

        <Button
          onPress={() => alert("Product added to cart!")}
          title="Buy me!"
          color="#ff0000"
        />

        <Pressable
          onPress={() => {
            setTimesPressed(current => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Ik ben overheerlijk!' : 'Druk op mij...'}</Text>
          )}
        </Pressable>

        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Bekijk product</Text>
        </TouchableOpacity>

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 16,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginTop: 4,
    },
});

export default ProductCard;