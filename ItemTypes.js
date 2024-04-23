import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { DATABASE, getItemHelper } from './Util/Helper';

const ItemTypes = () => {
  const navigation = useNavigation();
  // const itemTypes = useSelector((state) => state.items.itemTypes);
  const [itemTypes, setItemTypes] = useState([])

  const handleTypeSelect = (category) => {
    navigation.navigate('ItemList', { category });
  };


  const handleAddItemType = () => {
    navigation.navigate('AddItemType');
  }

  useEffect(() => {
    getItemHelper(DATABASE.typeDB).then(result => {
      setItemTypes(result)
    })
  }, [navigation])

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
      <TouchableOpacity onPress={handleAddItemType} style={styles.addButton}>
        <Text style={{ color: '#fff' }}>Add Item Type</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add your StyleSheet code here

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
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
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 20
  },
});

export default ItemTypes;
