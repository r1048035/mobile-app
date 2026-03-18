import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen.js';
import ProductDetail from './screens/ProductDetail.js';
import BlogDetail from './screens/BlogDetail.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product detail' }} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} options={{ title: 'Blog detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
