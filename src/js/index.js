let carroussel = document.getElementById("contentCarr");
let timer = Date.now();
let switchback = document.querySelector("img#back");
let switchnext = document.querySelector("img#next");
carroussel.style.marginLeft = "calc(0%)";

function switchvisibility() {
  if (carroussel.style.marginLeft == "calc(0%)") {
    switchback.style.visibility = "collapse";
    switchnext.style.visibility = "initial";
  } else if (carroussel.style.marginLeft == "calc(-400%)") {
    switchnext.style.visibility = "collapse";
    switchback.style.visibility = "initial";
  } else {
    switchback.style.visibility = "initial";
    switchnext.style.visibility = "initial";
  }
}

switchvisibility();

document.querySelectorAll("#back, #next").forEach((fleche) => {
  /* ecoute+ boucle */
  fleche.addEventListener("click", function (event) {
    if (timer - Date.now() < -600) {
      if (event.target.id === "next" && event.altKey === true && carroussel.style.marginLeft != "calc(-400%)") {
        carroussel.style.marginLeft = "calc(-400%)";
      } else if (event.target.id === "back" && event.altKey === true && carroussel.style.marginLeft != "calc(0%)") {
        carroussel.style.marginLeft = "calc(0%)";
      } else if (event.target.id === "next" && carroussel.style.marginLeft != "calc(-400%)") {
        carroussel.style.marginLeft =
          "Calc(" + carroussel.style.marginLeft + " - 100%)";
      } else if (event.target.id === "back" && carroussel.style.marginLeft != "calc(0%)") {
        carroussel.style.marginLeft =
          "Calc(" + carroussel.style.marginLeft + " + 100%";
      }
      switchvisibility();
      timer = Date.now();
    }
  });
});
