import config from "./config";
const axios = require("axios");

const getTrackForName = async (name) => {
  try {
    const rawData = await axios.get(
      `${config.configService.apiUrl}/search?q=${name}&type=track`
    );
    return rawData;
  } catch (error) {
    return "Error: " + error;
  }
};
const getById = async (id) => {
  try {
    const rawData = await axios.get(
      `${config.configService.apiUrl}/tracks/${id}`
    );
    return rawData;
  } catch (error) {
    return "Error: " + error;
  }
};

export default {
  getTrackForName,
  getById,
};
