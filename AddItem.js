import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { DATABASE, addItemHelper } from './Util/Helper';



const AddItem = () => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    noOfUnits: '',
    rating:''
  });
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;

  const handleAddItem = () => {
    if (item.name.trim() !== '') {
      // dispatch(addItemAction({ category, item } ));
      addItemHelper({ category, ...item }, DATABASE.itemDB).then( response => {
        navigation.goBack();
      })
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
        placeholder="Enter Image url"
        value={item.image}
        onChangeText={val => changeHandler(val, 'image')}
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
        placeholder="No of units"
        value={item.noOfUnits}
        keyboardType = 'number-pad'
        onChangeText={val => changeHandler(val, 'noOfUnits')}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={item.rating}
        keyboardType = 'number-pad'
        onChangeText={val => changeHandler(val, 'rating')}
      />
      <Button title={`Add to ${category.name}`} onPress={handleAddItem} />
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

export default AddItem;