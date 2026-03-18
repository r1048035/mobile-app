import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, na } from 'react-native';
import ProductCard from '../components/ProductCard';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      
        <TextInput
            style={styles.input}
            placeholder="Zoeken..."
            keyboardType="numeric"
        />

      <ScrollView style={styles.scrollView}>

        <ProductCard 
          title="Pizza Marinara"
          description="Tomatensaus, knoflook, oregano en olijfolie"
          price="12.99"
          image={require("../images/pizza-marinara.avif")}
          
          onPress={() =>
            navigation.navigate("Details", {
              title: "Pizza Marinara",
              description: "Tomatensaus, knoflook, oregano en olijfolie",
              price: "12.99",
              image: require("../images/pizza-marinara.avif")
            })
          }
        />

        <ProductCard 
          title="Limoncello"
          description="Drank"
          price="8.99"
          image={require("../images/pizza-marinara.avif")}

          onPress={() =>
            navigation.navigate("Details", {
              title: "Limoncello",
              description: "Drank",
              price: "8.99",
              image: require("../images/pizza-marinara.avif")
            })
          }
        />
        
        <ProductCard 
          title="Tiramisu"
          description="Dessert"
          price="6.99"
          image={require("../images/pizza-marinara.avif")}

          onPress={() =>
            navigation.navigate("Details", {
              title: "Tiramisu",
              description: "Dessert",
              price: "6.99",
              image: require("../images/pizza-marinara.avif")
            })
          }
        />

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