/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = GetText();
};

function GetText() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  return (
    who[Math.floor(Math.random() * (who.length - 1))] +
    " " +
    action[Math.floor(Math.random() * (action.length - 1))] +
    " " +
    what[Math.floor(Math.random() * (what.length - 1))] +
    " " +
    when[Math.floor(Math.random() * (when.length - 1))]
  );
}
