import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.heroTitle}>🍳 Gourmet Recipe Book</Text>
      <Text style={styles.subtitle}>
        Discover easy-to-cook recipes right at your fingertips!
      </Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('RecipeList')}
      >
        <Text style={styles.primaryButtonText}>Browse Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}