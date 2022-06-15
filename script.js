const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);

checkBox();

function checkBox() {
  const triggerbottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box, index) => {
    const cardNumber = index + 1;
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerbottom) {
      box.style.fontSize = "100px";
      if (cardNumber % 6 == 1) {
        box.innerText = "s";
        box.style.color = "#363062";
        box.style.backgroundColor = "#E9D5CA";
      }
      if (cardNumber % 6 == 2) {
        box.innerText = "a";
        box.style.color = "#C2DED1";
        box.style.backgroundColor = "#354259";
      }
      if (cardNumber % 6 == 3) {
        box.innerText = "y";
        box.style.color = "#242F9B";
        box.style.backgroundColor = "#DBDFFD";
      }
      if (cardNumber % 6 == 4) {
        box.innerText = "o";
        box.style.color = "#FFE3A9";
        box.style.backgroundColor = "#FF5D5D";
      }
      if (cardNumber % 6 == 5) {
        box.innerText = "o";
        box.style.color = "#371B58";
        box.style.backgroundColor = "#7858A6";
      }
      if (cardNumber % 6 == 0) {
        box.innerText = "j";
        box.style.color = "#121212";
        box.style.backgroundColor = "#E0DECA";
      }

      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
