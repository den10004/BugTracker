const copyClick = document.querySelector(".copyClick");
const copied = document.querySelector(".copied");
const tabNavs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");
const bugBth = document.querySelector(".bugBth");

const modal = document.getElementById("myModal");
const btn = document.querySelector(".myBtn");
const span = document.querySelector(".close");

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

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function closeWindow(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

for (let i = 0; i < tabNavs.length; i++) {
  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      let contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    }
  });
}

copyClick.addEventListener("click", openSnack);
btn.addEventListener("click", openModal);
span.addEventListener("click", closeModal);
window.addEventListener("click", closeWindow);
