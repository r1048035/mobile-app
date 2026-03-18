import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const products = [
    {
      id: 'p1',
      title: 'Pizza Marinara',
      description: 'Tomatensaus, knoflook, oregano en olijfolie',
      price: '12.99',
      image: require('../images/pizza-marinara.avif'),
    },
    {
      id: 'p2',
      title: 'Limoncello',
      description: 'Frisse Italiaanse likeur na het eten',
      price: '8.99',
      image: require('../images/limoncello.jpeg'),
    },
    {
      id: 'p3',
      title: 'Tiramisu',
      description: 'Klassiek Italiaans dessert met mascarpone',
      price: '6.99',
      image: require('../images/tiramisu.jpg'),
    },
  ];

  const blogs = [
    {
      id: 'b1',
      title: 'Hoe maak je perfecte pizzabodem?',
      description: '5 tips voor een krokante bodem zoals in Napels.',
      image: require('../images/pizza-marinara.avif'),
      author: 'Chef Marco',
      date: '18 maart 2026',
      content:
        'Gebruik sterke bloem, geef het deeg voldoende rust en bak op hoge temperatuur voor de beste textuur.',
    },
    {
      id: 'b2',
      title: 'De geschiedenis van tiramisu',
      description: 'Van Veneto tot wereldwijd favoriet dessert.',
      image: require('../images/tiramisu.jpg'),
      author: 'Giulia Rossi',
      date: '12 maart 2026',
      content:
        'Tiramisu ontstond in Noord-Italie en werd geliefd door de combinatie van koffie, cacao en mascarpone.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom</Text>
      
        <TextInput
            style={styles.input}
            placeholder="Typ hier om te zoeken..."
        />

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Producten</Text>

        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            onPress={() => navigation.navigate('ProductDetail', product)}
          />
        ))}

        <Text style={styles.sectionTitle}>Blogs</Text>

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            onPress={() => navigation.navigate('BlogDetail', blog)}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  input: {
    height: 44,
    marginHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 6,
  },
});

export default HomeScreen;