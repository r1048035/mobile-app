import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      
        <TextInput
            style={styles.input}
            placeholder="Zoeken..."
            keyboardType="numeric"
        />

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

export default HomeScreen;