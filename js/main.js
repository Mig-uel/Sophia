import { randomAdvice } from "./randomAdvice";
import { searchAdvice } from "./search";


if (document.location.pathname === '/' ||
  document.location.pathname.indexOf('index') > -1) {
  randomAdvice();
}
else if (document.location.pathname.indexOf('search') > -1)
  searchAdvice();