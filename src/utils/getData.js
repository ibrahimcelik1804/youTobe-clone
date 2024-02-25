import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    'X-RapidAPI-Key': '4ccd1abe9dmshfd5cf412bfa6ccep16e019jsn88acba8925d2',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  },
};

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
