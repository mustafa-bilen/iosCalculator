let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (btn[i].innerHTML == "AC") {
        value.innerHTML = "";
      } else {
        value.innerHTML += btn[i].innerHTML;
      }
    }
  });
}
