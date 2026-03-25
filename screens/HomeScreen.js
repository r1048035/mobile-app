import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://api.webflow.com/v2/sites/698c7fc061b94a8c45a87d49/products', {
      headers: {
        Authorization: 'Bearer 242e97474e2d0ecb8729e4188e87ff5639077712648c44ec36538093abf1cd4c',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = (data.items || []).map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          description: item.product.fieldData.subtitle,
          price: ((item.skus[0]?.fieldData.price?.value || 0) / 100).toFixed(2),
          image: { uri: item.skus[0]?.fieldData['main-image']?.url },
        }));

        if (fetchedProducts.length > 0) {
          setProducts(fetchedProducts);
        }
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    fetch('https://api.webflow.com/v2/sites/698c7fc061b94a8c45a87d49/collections/699ef930d19e910d99fbc818/items', {
      headers: {
        Authorization: 'Bearer 242e97474e2d0ecb8729e4188e87ff5639077712648c44ec36538093abf1cd4c',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const fetchedBlogs = (data.items || []).map((item) => {
          const fieldData = item.fieldData || {};
          const rawImage =
            fieldData['main-image'] ||
            fieldData.image ||
            fieldData.thumbnail ||
            fieldData.heroImage;

          return {
            id: item.id,
            title: fieldData.name || fieldData.title || 'Blog',
            description: fieldData.summary || fieldData.description || fieldData.subtitle || '',
            author: fieldData.author || 'Onbekende auteur',
            date: fieldData.date || fieldData['publish-date'] || '',
            content: fieldData['post-body'] || fieldData.content || '',
            image: rawImage?.url ? { uri: rawImage.url } : null,
          };
        });

        if (fetchedBlogs.length > 0) {
          setBlogs(fetchedBlogs);
        }
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom</Text>

      <TextInput style={styles.input} placeholder="Typ hier om te zoeken..." />

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Producten</Text>

        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            onPress={() => navigation.navigate('Detail', { type: 'product', ...product })}
          />
        ))}

        <Text style={styles.sectionTitle}>Blogs</Text>

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            onPress={() => navigation.navigate('Detail', { type: 'blog', ...blog })}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

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