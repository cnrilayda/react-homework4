import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from './productsScreen';
import ProductDetailScreen from './productDetailScreen';

const Stack = createStackNavigator();

const ProductStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default ProductStackScreen;

