const authEndpoint="https://accounts.spotify.com/authorize?"
const clientID="106c1b20f75d4c5b9fb1681a19006bd2"
const redirectUri="https://172.16.8.66:9090"
const scopes=["user-library-read","playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;