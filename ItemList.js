import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItemAction } from './Store/slice'; // Import your action creators

const ItemList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;
  const itemList = useSelector((state) => state.items.itemList[category.key]);
  const dispatch = useDispatch();

  const handleItemDetails = (item) => {
    navigation.navigate('ItemDetails', { item, category });
  };

  const handleAddItem = () => {
    navigation.navigate('AddItem', { category });
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteItemAction({ categoryKey: category.key, item }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Items in {category.name}:</Text>
      {itemList?.length > 0 ? (
        itemList.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handleItemDetails(item)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteItem(item)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>No Items available.</Text>
      )}
      <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
        <Text style={{color: '#fff'}}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add your StyleSheet code here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    marginRight: 10,
  },
  deleteIcon: {
    marginRight: 10,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 20
  },
});

export default ItemList;
