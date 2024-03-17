import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStore } from './StoreContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemList = () => {
  const { state, dispatch } = useStore();
  const navigation = useNavigation();
  const route = useRoute();
  const { type } = route.params;

  const handleAddItem = () => {
    navigation.navigate('AddItem', { type });
  };

  const handleItemDetails = () => {
    navigation.navigate('ItemDetails', { type });
  };
  const handleDeleteItem = (item) => {
    dispatch({ type: 'DELETE_ITEM', payload: { category: type, item } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Items in {type}:</Text>
      {state.itemList[type].map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TouchableOpacity onPress={() => handleItemDetails(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteItem(item)}>
            <Icon name="trash" size={20} color="#ff0000" style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
        <Icon name="plus" size={20} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
    // position: 'absolute',
    // bottom: 20,
    // right: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemList;
