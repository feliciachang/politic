import axios from "axios";

const netlifyFunctionsPath = "/.netlify/functions";

// a simple wrapper for making fetch GET requests
// no need to supply the whole URL, only the relative path
export const serverQuery = async (path) => {
  const response = await axios.post(`${netlifyFunctionsPath}/serverQuery`, {
    path: path,
  });
  return response.data;
};

export const serverQueryWithHeader = async (path) => {
  const response = await axios.post(`${netlifyFunctionsPath}/serverQuery`, {
    path: path,
  });
  return response;
};

// this is the path to the backend
const backendURL = "https://thepoliticbackend.org/wp-json/wp/v2";

export const fetchFromAPI = async (relativePath) => {
  return serverQuery(`${backendURL}/${relativePath}`);
};

export const fetchFromAPIWithHeader = async (relativePath) => {
  return serverQueryWithHeader(`${backendURL}/${relativePath}`);
};
