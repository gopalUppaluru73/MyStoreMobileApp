import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addItemHelper } from './Util/Helper';

const AddItemType = () => {
  const [item, setItem] = useState({
    name: '',
  });

  const navigation = useNavigation();

  const handleAddItem = () => {
    if (item.name.trim() !== '') {
      addItemHelper(item, 'ItemType').then( response => {
        navigation.goBack();
      })
    }
  };

  const changeHandler = (val, key) => {
    setItem({...item, [key]: val})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Item Type:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Furniture"
        value={item.name}
        onChangeText={val => changeHandler(val, 'name')}
        autoFocus={true}
      />
      <Button title={`Add Item Type`} onPress={handleAddItem} />
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

export default AddItemType;