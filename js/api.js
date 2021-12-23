import axios from "axios";

async function advice() {
  return axios
    .get("https://api.adviceslip.com/advice")
    .then(response => response.data.slip.advice);
}

export { advice };