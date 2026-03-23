import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const DetailScreen = ({ route }) => {
  const params = route.params || {};
  const { type, title, description, image, price, author, date, content } = params;

  const isProduct = type === 'product';
  const [quantity, setQuantity] = useState(1);
  const numericPrice = Number.parseFloat(price || 0);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pageTitle}>
          {isProduct ? 'Dit is de product detail pagina' : 'Dit is de blog detail pagina'}
        </Text>

        {image ? <Image source={image} style={styles.image} /> : null}

        <Text style={styles.title}>{title}</Text>

        {isProduct ? (
          <>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>EUR {price}</Text>

            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>{quantity}</Text>

              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.totalText}>Totaal gekozen producten: {quantity}</Text>
            <Text style={styles.totalPrice}>Totale prijs: EUR {(numericPrice * quantity).toFixed(2)}</Text>
          </>
        ) : (
          <>
            <Text style={styles.meta}>Door {author}</Text>
            <Text style={styles.meta}>{date}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.content}>{content}</Text>
          </>
        )}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

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
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    color: '#1f2937',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  quantityButton: {
    backgroundColor: '#009246',
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
  totalText: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 14,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },
  meta: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    color: '#111827',
  },
});

export default DetailScreen;
