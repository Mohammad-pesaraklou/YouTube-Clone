import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { part: "snippet", videoId: "M7FIvfx5J10", maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
