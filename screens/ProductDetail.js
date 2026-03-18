import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const ProductDetail = ({ route }) => {
  const { title, description, price, image } = route.params;

    const [quantity, setQuantity] = useState(1);
  const numericPrice = Number.parseFloat(price);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
      };

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.pageTitle}>Dit is de product detail pagina</Text>

        <Image
            source={image}
            style={styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>€ {price}</Text>

        <View style={styles.quantityContainer}>

          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.totalPrice}>Totaal: EUR {(numericPrice * quantity).toFixed(2)}</Text>

      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  quantityButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '700',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 16,
  },

});

export default ProductDetail;