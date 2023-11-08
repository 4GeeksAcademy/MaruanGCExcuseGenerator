/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = function() {
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
  document.getElementById("excuse").innerHTML =
    who[random(0, 3)] +
    " " +
    action[random(0, 3)] +
    " " +
    what[random(0, 2)] +
    " " +
    when[random(0, 4)];

  console.log("Hello Rigo from the console!");
};
