import { getSearchAdvice } from "./api";

function searchAdvice() {
  let search = document.getElementById("btn-srch");

  search.addEventListener("click", () => {
    document.getElementById("message").innerHTML = "Searching...";

    let key = document.getElementById("key").value;

    if (key.length > 0) {

      getSearchAdvice(key)
        .then(data => {
          if (data.slips) {
            console.log(data);
            displayAdvice(data.slips, data.total_results);
            document.getElementById("message").innerHTML = `${data.total_results} result(s) found`;
            document.getElementById("key").value = "";
          } else {
            document.getElementById("message").innerHTML = "No results found!";
          }
        })
        .catch(error => {
          // console.log(error);
          document.getElementById("message").innerHTML = error;
        });
    }
    else
      document.getElementById("message").innerHTML = "Please enter a keyword or term!";
  });
}

let displayAdvice = (slips, total) => {
  let advice = document.getElementById("advice-text");

  if (total <= 1) {
    advice.innerHTML = slips[0].advice;
  }
  else {
    let random = Math.floor(Math.random() * slips.length);
    advice.innerHTML = slips[random].advice;
  }
}

export { searchAdvice };