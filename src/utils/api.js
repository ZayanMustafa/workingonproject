// File : utils/api.js


import axios from 'axios';

const API_BASE_URL = 'https://assetreportbackend.vercel.app';

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/admin`);
    return response.data.orders; 
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};