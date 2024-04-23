import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import ItemTypes from './ItemTypes';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import AddItem from './AddItem';
import EditItem from './EditItem';
import AddItemType from './AddItemType';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ItemTypes">
          <Stack.Screen name="ItemTypes" component={ItemTypes} />
          <Stack.Screen name="ItemList" component={ItemList} />
          <Stack.Screen name="ItemDetails" component={ItemDetails} />
          <Stack.Screen name="AddItem" component={AddItem} />
          <Stack.Screen name="AddItemType" component={AddItemType} />
          <Stack.Screen name="EditItem" component={EditItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
