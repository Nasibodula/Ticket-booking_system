import axios from 'axios';

const API_URL = 'http://localhost:3000/api/events'; // Replace this with your actual API URL

const eventService = {
  hostEvent: async (eventData) => {
    try {
      const response = await axios.post(`${API_URL}/host`, eventData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAllEvents: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Add more functions for other event-related API calls
};

export default eventService;