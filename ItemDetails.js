import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ItemDetails = ({ route, navigation }) => {
  const { item } = route.params;

  const handleEdit = () => {
    navigation.navigate('EditItem', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Details</Text>
      <Text>Name: {item}</Text>
      <Text>Description: {item}</Text>
      <Text>Price: {item}</Text>
      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>Edit Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ItemDetails;
