const priceLbl = document.querySelectorAll("#priceLbl"),
  bttnSwtch = document.getElementById("bttnSwtch"),
  swtchIcon = document.getElementById("swtchIcon"),
  checkBox = document.getElementById("checkBox");

bttnSwtch.addEventListener("click", () => {
  if (checkBox.checked == true) {
    swtchIcon.classList.add("-translate-x-[100%]");
    priceLbl[0].innerText = "199.99";
    priceLbl[1].innerText = "249.99";
    priceLbl[2].innerText = "399.99";
  } else {
    swtchIcon.classList.remove("-translate-x-[100%]");
    priceLbl[0].innerText = "19.99";
    priceLbl[1].innerText = "24.99";
    priceLbl[2].innerText = "39.99";
  }
});
