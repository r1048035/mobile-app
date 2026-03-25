import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, } from 'react-native';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "Alle categorieën",
  "69b074b933c2f1716a1cf906": "Formaggi",
  "69b0748c98be6bb1bdf07701": "Antipasti",
  "69b07349c5c024f4c12a09e3": "Dolci",
  "699f18194936e53ef79344ad": "Pizza",
  "699f142c323edf49db15598a": "Bevande",
  "699efdf86df30dae63659101": "Pasta",
};

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch('https://api.webflow.com/v2/sites/698c7fc061b94a8c45a87d49/products', {
      headers: {
        Authorization: 'Bearer 242e97474e2d0ecb8729e4188e87ff5639077712648c44ec36538093abf1cd4c',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = (data.items || []).map((item) => {
          const product = item?.product || {};
          const productFieldData = product?.fieldData || {};
          const firstCategoryId = Array.isArray(productFieldData.category)
            ? productFieldData.category[0]
            : undefined;
          const imageUrl = item?.skus?.[0]?.fieldData?.['main-image']?.url;

          return {
            id: product?.id || item?.id,
            title: productFieldData.name || 'Onbekend product',
            description: productFieldData.subtitle || '',
            price: ((item?.skus?.[0]?.fieldData?.price?.value || 0) / 100).toFixed(2),
            image: imageUrl ? { uri: imageUrl } : null,
            category: categoryNames[firstCategoryId] || 'Onbekende categorie',
          };
        });

        setProducts(fetchedProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

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

      <TextInput
        style={styles.input}
        placeholder="Eten zoeken..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
      >
        <Picker.Item label="Alle categorieën" value="" />
        <Picker.Item label="Formaggi" value="Formaggi" />
        <Picker.Item label="Antipasti" value="Antipasti" />
        <Picker.Item label="Dolci" value="Dolci" />
        <Picker.Item label="Pizza" value="Pizza" />
        <Picker.Item label="Bevande" value="Bevande" />
        <Picker.Item label="Pasta" value="Pasta" />
      </Picker>



      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Prijs: laag naar hoog" value="price-asc" />
        <Picker.Item label="Prijs: hoog naar laag" value="price-desc" />
        <Picker.Item label="Naam: A-Z" value="name-asc" />
        <Picker.Item label="Naam: Z-A" value="name-desc" />
      </Picker>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Producten</Text>

        {filteredProducts.map((product) => (
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