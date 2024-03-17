import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemDetails = ({ route, navigation }) => {
  const { item, category } = route.params;
  console.log({item, params: route.params})
  const handleEdit = () => {
    navigation.navigate('EditItem', { selectedItem: item , category});
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleEdit} style={styles.button}>
          <Icon name="edit" size={25} color="#0008ff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Details</Text>
      <View style={styles.listItem}>
        <Text style={[styles.label, styles.info]}>Name: </Text>
        <Text style={styles.info}>{item.name}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={[styles.label, styles.info]}>Description: </Text>
        <Text style={styles.info}>{item.description}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={[styles.label, styles.info]}>Price: </Text>
        <Text style={styles.info}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30
  },
  listItem: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  info:{
    flex: 1
  },
  label:{
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemDetails;