import { advice } from "./api";

advice()
  .then(data => {
    console.log(data);
    document.getElementById("advice").innerHTML = data;
  })
  .catch(error => {
    console.log(error);
  });

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  advice()
    .then(data => {
      console.log(data);
      document.getElementById("advice").innerHTML = data;
    })
});