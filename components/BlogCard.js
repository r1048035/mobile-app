import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BlogCard = ({ title, description, image, onPress }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Lees blog</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 170,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    button: {
        backgroundColor: '#14532d',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default BlogCard;