import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStore } from './StoreContext';

const EditItem = () => {
  const route = useRoute();
  const { category, selectedItem } = route.params;
  const [item, setItem] = useState(selectedItem);
  const { dispatch , state} = useStore();
  const navigation = useNavigation();

  const submitHandler = () => {
    if (item.name.trim() !== '') {
      dispatch({ type: 'EDIT_ITEM', payload: { category, item } });
      navigation.navigate('ItemDetails', { item, category });
    }
  };

  const changeHandler = (val, key) => {
    setItem({...item, [key]: val})
  }

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
      <Button title={`Add to ${category.name}`} onPress={submitHandler} />
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