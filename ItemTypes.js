import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from './StoreContext';

const ItemTypes = () => {
  const { state } = useStore();
  const navigation = useNavigation();

  const handleTypeSelect = (category) => {
    navigation.navigate('ItemList', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Item Types:</Text>
      {state.itemTypes.map((category, index) => (
        <TouchableOpacity 
          key={index}
          style={styles.item} 
          onPress={() => handleTypeSelect(category)}
        >
          <Text>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default ItemTypes;