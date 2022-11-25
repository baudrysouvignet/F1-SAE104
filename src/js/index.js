let carroussel = document.getElementById("contentCarr");
let timer = Date.now();
let switchback = document.getElementById("back");
let switchnext = document.getElementById("next");
carroussel.style.marginLeft = "0%";

function switchvisibility() {
  if (carroussel.style.marginLeft == "calc(0%)") {
    switchback.style.visibility = "collapse";
  } else if (carroussel.style.marginLeft == "calc(-400%)") {
    switchnext.style.visibility = "collapse";
  } else {
    switchback.style.visibility = "initial";
    switchnext.style.visibility = "initial";
  }
}

function switchcar(choix) {
  if (timer - Date.now() < -600) {
    if (choix == "next") {
      carroussel.style.marginLeft =
        "Calc(" + carroussel.style.marginLeft + " - 100%";
      switchvisibility();
    } else {
      carroussel.style.marginLeft =
        "Calc(" + carroussel.style.marginLeft + " + 100%";
      switchvisibility();
    }
    timer = Date.now();
  }
}
