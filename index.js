const copyClick = document.querySelector(".copyClick");
const copied = document.querySelector(".copied");
let tabNavs = document.querySelectorAll(".nav-tab");
let tabPanes = document.querySelectorAll(".tab-pane");

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
