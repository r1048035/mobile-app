import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dit is een component!</Text>
      <ScrollView style={styles.scrollView}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
