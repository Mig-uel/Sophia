import { getSearchAdvice } from "./api";

function searchAdvice() {
  let search = document.getElementById("btn-srch");

  search.addEventListener("click", () => {
    document.getElementById("error").innerHTML = "Searching...";

    let key = document.getElementById("key").value;

    getSearchAdvice(key)
      .then(data => {
        if (data.slips) {
          console.log(data);
          displayAdvice(data.slips, data.total_results);
          document.getElementById("error").innerHTML = `${data.total_results} result(s) found`;
        } else {
          document.getElementById("error").innerHTML = "No results found!";
        }
      })
      .catch(error => {
        // console.log(error);
        document.getElementById("error").innerHTML = error;
      });
  });
}

let displayAdvice = (slips, total) => {

}

export { searchAdvice };