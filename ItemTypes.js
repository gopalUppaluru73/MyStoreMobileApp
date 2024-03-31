// import React from 'react';
// import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useStore } from './StoreContext';

// const ItemTypes = () => {
//   const { state } = useStore();
//   const navigation = useNavigation();

//   const handleTypeSelect = (category) => {
//     navigation.navigate('ItemList', { category });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Item Types:</Text>
//       {state.itemTypes.map((category, index) => (
//         <TouchableOpacity 
//           key={index}
//           style={styles.item} 
//           onPress={() => handleTypeSelect(category)}
//         >
//           <Text>{category.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   item: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
// });

// export default ItemTypes;


// ItemTypes.js
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
