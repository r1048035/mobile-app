import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ title, description, price, image, onPress }) => {
  return (
    <View style={styles.card}>
      {image ? <Image source={image} style={styles.image} /> : null}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>EUR {price}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk product</Text>
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
  price: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#009246',
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

export default ProductCard;