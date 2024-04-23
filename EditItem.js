import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStore } from './StoreContext';
import { useDispatch, useSelector } from 'react-redux';
import { editItemAction } from './Store/slice';

const EditItem = () => {
  const route = useRoute();
  const { category, selectedItem } = route.params;
  const [item, setItem] = useState(selectedItem);
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.items);
  const navigation = useNavigation();

  const submitHandler = () => {
    if (item.name.trim() !== '') {
      dispatch(editItemAction({ category, item }));
      navigation.navigate('ItemDetails', { item, category });
    }
  };

  const changeHandler = (val, key) => {
    setItem({...item, [key]: val})
  }

  console.log({item})

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Item:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={item.name}
        onChangeText={val => changeHandler(val, 'name')}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={item.description}
        onChangeText={val => changeHandler(val, 'description')}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={item.price}
        keyboardType = 'number-pad'
        onChangeText={val => changeHandler(val, 'price')}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter no of units"
        value={item.noOfUnits+''}
        keyboardType = 'number-pad'
        onChangeText={val => changeHandler(val, 'noOfUnits')}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter rating"
        value={item.rating+''}
        keyboardType = 'number-pad'
        onChangeText={val => changeHandler(val, 'rating')}
      />
      <Button title={`Update in ${category.name}`} onPress={submitHandler} />
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default EditItem;