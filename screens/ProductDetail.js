import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Dit is de product detail pagina!</Text>

        

      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});

export default ProductDetail;