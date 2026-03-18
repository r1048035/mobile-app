import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const BlogDetail = ({ route }) => {
  const { title, description, image, author, date, content } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pageTitle}>Dit is de blog detail pagina</Text>

        <Image source={image} style={styles.image} />

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>Door {author}</Text>
        <Text style={styles.meta}>{date}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.content}>{content}</Text>
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
  meta: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    color: '#1f2937',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    color: '#111827',
  },
});

export default BlogDetail;
