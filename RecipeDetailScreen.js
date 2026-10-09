import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function RecipeDetailScreen({ route, navigation }) {
  // Accessing passed parameters
  const { recipe } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      <Text style={styles.detailTitle}>{recipe.title}</Text>
      
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>{recipe.category}</Text>
        <Text style={styles.badge}>⏱️ {recipe.cookingTime}</Text>
      </View>

      <Text style={styles.sectionHeader}>Ingredients</Text>
      {recipe.ingredients.map((item, index) => (
        <Text key={index} style={styles.ingredientItem}>• {item}</Text>
      ))}

      <Text style={styles.sectionHeader}>Instructions</Text>
      <Text style={styles.instructionsText}>{recipe.instructions}</Text>

      {/* Manual Reverse Navigation */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Recipe List</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}