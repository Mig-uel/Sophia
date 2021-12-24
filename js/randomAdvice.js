import { getRandomAdvice } from "./api";

function randomAdvice() {
  getRandomAdvice()
    .then(data => {
      // console.log(data);
      document.getElementById("advice").innerHTML = data;
    })
    .catch(error => {
      console.log(error);
    });

  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    getRandomAdvice()
      .then(data => {
        // console.log(data);
        document.getElementById("advice").innerHTML = data;
      })
  });
}

export { randomAdvice };