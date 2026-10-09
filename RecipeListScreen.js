import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// Mock Data
const RECIPES = [
  {
    id: '1',
    title: 'Classic Spaghetti Carbonara',
    category: 'Italian',
    cookingTime: '25 mins',
    description: 'A creamy Italian pasta dish made with eggs, cheese, guanciale, and black pepper.',
    ingredients: ['200g Spaghetti', '100g Guanciale or Pancetta', '2 Large Eggs', '50g Pecorino Romano', 'Black Pepper'],
    instructions: '1. Boil pasta.\n2. Fry guanciale until crispy.\n3. Whisk eggs and cheese.\n4. Mix pasta with guanciale off heat, add egg mixture, and stir rapidly until creamy.',
  },
  {
    id: '2',
    title: 'Chicken Avocado Salad',
    category: 'Healthy / Low Carb',
    cookingTime: '15 mins',
    description: 'Fresh and nutritious salad loaded with grilled chicken, ripe avocados, and lime dressing.',
    ingredients: ['1 Grilled Chicken Breast', '1 Ripe Avocado', '2 cups Mixed Greens', 'Cherry Tomatoes', 'Lime Dressing'],
    instructions: '1. Slice chicken and avocado.\n2. Toss greens and tomatoes in a bowl.\n3. Top with sliced chicken and avocado.\n4. Drizzle with lime dressing.',
  },
  {
    id: '3',
    title: 'Chocolate Lava Cake',
    category: 'Dessert',
    cookingTime: '20 mins',
    description: 'Decadent chocolate dessert with a rich, gooey warm chocolate center.',
    ingredients: ['100g Dark Chocolate', '100g Butter', '2 Eggs', '50g Sugar', '30g Flour'],
    instructions: '1. Melt chocolate and butter.\n2. Whisk eggs and sugar, then fold in melted chocolate and flour.\n3. Pour into ramekins and bake at 200°C for 12 minutes.',
  },
];

export default function RecipeListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('RecipeDetail', { recipe: item })
      }
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardMeta}>{item.category} • ⏱️ {item.cookingTime}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}