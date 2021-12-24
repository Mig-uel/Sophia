import axios from "axios";

async function getRandomAdvice() {
  return await axios
    .get("https://api.adviceslip.com/advice")
    .then(response => response.data.slip.advice);
}

async function getSearchAdvice(key) {
  let url = await axios.get(`https://api.adviceslip.com/advice/search/${key}`);
  return url.data;
}

export { getRandomAdvice, getSearchAdvice };