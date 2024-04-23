import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ItemTypes = () => {
  const navigation = useNavigation();
  const itemTypes = useSelector((state) => state.items.itemTypes);

  const handleTypeSelect = (category) => {
    navigation.navigate('ItemList', { category });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.item}
      key={index}
      onPress={() => handleTypeSelect(item)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={itemTypes}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        numColumns={2}
      />
    </View>
  );
};

// Add your StyleSheet code here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    margin: 15,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 5,
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default ItemTypes;
