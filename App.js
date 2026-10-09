import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import RecipeListScreen from './RecipeListScreen';
import RecipeDetailScreen from './RecipeDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#FF6B6B' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Welcome' }} 
        />
        <Stack.Screen 
          name="RecipeList" 
          component={RecipeListScreen} 
          options={{ title: 'Recipes Catalog' }} 
        />
        <Stack.Screen 
          name="RecipeDetail" 
          component={RecipeDetailScreen} 
          options={{ title: 'Recipe Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}