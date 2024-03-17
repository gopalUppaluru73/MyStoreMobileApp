import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStore } from './StoreContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemList = () => {
  const { state, dispatch } = useStore();
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;
  

  const handleAddItem = () => {
    navigation.navigate('AddItem', { category });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
          <Icon name="plus" size={25} color="#0008ff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleItemDetails = (item) => {
    navigation.navigate('ItemDetails', { item, category });
  };
  const handleDeleteItem = (item) => {
    dispatch({ type: 'DELETE_ITEM', payload: { category, item } });
  };

  const list = state.itemList[category.key]
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Items in {category.name}:</Text>
      {list?.length > 0 ? list.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TouchableOpacity onPress={() => handleItemDetails(item)}>
            <Text style={styles.itemText}>{item.id}. {item.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteItem(item)}>
            <Icon name="trash" size={20} color="#ff0000" style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      )): <Text style={{fontWeight: 'bold'}}>No Items available.</Text>}
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
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemList;