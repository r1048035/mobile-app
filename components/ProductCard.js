import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ product }) => {
    return (
        <View style={styles.card}>
            <Image
                source={require("../images/556409BB-02E0-4BA3-BC16-F409F609FCED.avif")}
                style={styles.image}
            />
        <Text style={styles.title}>Pizza Marinara</Text>
        <Text style={styles.description}>Tomatensaus, knoflook, oregano en olijfolie</Text>
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