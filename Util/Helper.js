
import axios from 'axios';

const BASE_URL = 'https://mystoredb-4fa1d-default-rtdb.firebaseio.com';

export const addItemHelper = async (item, itemType) => {
  return axios.post(`${BASE_URL}/${itemType}.json`, item);
};

export const editItemHelper = async (item, itemType, itemId) => {
  return axios.put(`${BASE_URL}/${itemType}/${itemId}.json`, item);
};

export const deleteItemHelper = async (itemType, itemId) => {
  return axios.delete(`${BASE_URL}/${itemType}/${itemId}.json`);
};

export const getItemHelper = async (itemType, query) => {
    console.log(`${BASE_URL}/${itemType}.json?${query}`)
  const response = await axios.get(`${BASE_URL}/${itemType}.json?${query}`);

  return response.data ? Object.keys(response.data).map(key => ({
    id: key,
    ...response.data[key]
  })) : [];
};

export const getTypeHelper = async () => {
  const response = await axios.get(`${BASE_URL}/types.json`);
  return response.data ? Object.keys(response.data).map(key => ({
    key: key,
    name: response.data[key].name
  })) : [];
};
