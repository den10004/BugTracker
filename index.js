const copyClick = document.querySelector(".copyClick");
const copied = document.querySelector(".copied");

function openSnack() {
  if (copied.style.display == "none") {
    copied.style.display = "block";
    setTimeout(function () {
      copied.style.display = "none";
    }, 1000);
  } else {
    copied.style.display = "none";
  }
}

copyClick.addEventListener("click", openSnack);
