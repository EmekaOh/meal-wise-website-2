let slides1 = document.getElementsByClassName("card-1")[0];
let slides2 = document.getElementsByClassName("card-2")[0];
let slides3 = document.getElementsByClassName("card-3")[0];
let slides4 = document.getElementsByClassName("card-4")[0];

let btn = document.getElementById("button");

let previous = document.getElementById("left");
let next = document.getElementById("right");

previous.addEventListener("click", function () {
  if (
    slides1.classList == "card background-white card-1 display-block" &&
    slides2.classList == "card background-white card-2 display-block"
  ) {
    slides1.classList.remove("display-block");
    slides1.classList.add("display-none");
    slides2.classList.remove("display-block");
    slides2.classList.add("display-none");

    slides3.classList.remove("display-none");
    slides3.classList.add("display-block");
    slides4.classList.remove("display-none");
    slides4.classList.add("display-block");
  } else if (
    slides3.classList == "card background-white card-3 display-block" &&
    slides4.classList == "card background-white card-4 display-block"
  ) {
    slides4.classList.remove("display-block");
    slides4.classList.add("display-none");

    slides2.classList.remove("display-none");
    slides2.classList.add("display-block");
  } else if (
    slides2.classList == "card background-white card-2 display-block" &&
    slides3.classList == "card background-white card-3 display-block"
  ) {
    slides3.classList.remove("display-block");
    slides3.classList.add("display-none");

    slides1.classList.remove("display-none");
    slides1.classList.add("display-block");
  }
});

next.addEventListener("click", function () {
  if (
    slides1.classList == "card background-white card-1 display-block" &&
    slides2.classList == "card background-white card-2 display-block"
  ) {
    slides1.classList.remove("display-block");
    slides1.classList.add("display-none");

    slides3.classList.remove("display-none");
    slides3.classList.add("display-block");
  } else if (
    slides2.classList == "card background-white card-2 display-block" &&
    slides3.classList == "card background-white card-3 display-block"
  ) {
    slides2.classList.remove("display-block");
    slides2.classList.add("display-none");

    slides4.classList.remove("display-none");
    slides4.classList.add("display-block");
  } else if (
    slides3.classList == "card background-white card-3 display-block" &&
    slides4.classList == "card background-white card-4 display-block"
  ) {
    slides1.classList.remove("display-none");
    slides1.classList.add("display-block");
    slides2.classList.remove("display-none");
    slides2.classList.add("display-block");

    slides3.classList.remove("display-block");
    slides3.classList.add("display-none");
    slides4.classList.remove("display-block");
    slides4.classList.add("display-none");
  }
});