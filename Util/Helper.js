
import axios from 'axios';

const BASE_URL = 'https://search-e214d-default-rtdb.firebaseio.com/';

export const DATABASE = {
  typeDB: 'ItemType',
  itemDB: 'ItemDB'
}

export const addItemHelper = async (item, itemType) => {
  return axios.post(`${BASE_URL}/${itemType}.json`, item);
};

export const editItemHelper = async (item, itemType, itemId) => {
  return axios.put(`${BASE_URL}/${itemType}/${itemId}.json`, item);
};

export const deleteItemHelper = async (itemType, itemId) => {
  return axios.delete(`${BASE_URL}/${itemType}/${itemId}.json`);
};

export const getItemHelper = async (itemType, key) => {
  let uri = `${BASE_URL}/${itemType}.json`
  if (key) {
    uri = `${uri}?orderBy="category/id"&equalTo="${key}"`
  }
  const response = await axios.get(uri);
  return response.data ? Object.keys(response.data).map(key => ({
    id: key,
    ...response.data[key]
  })) : [];
};

export const getTypeHelper = async () => {
  const response = await axios.get(`${BASE_URL}/${DATABASE.typeDB}.json`);
  return response.data ? Object.keys(response.data).map(key => ({
    key: key,
    name: response.data[key].name
  })) : [];
};
