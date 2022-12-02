let burger = document.getElementById("burger");
let burgercontent = document.getElementById("burgercontent");

function fermer() {
  if (burger.className == "burger open") {
    burger.className = "burger close";
    document.getElementById("navheader").className = "open";
  } else if (
    burger.className == "burger close" ||
    burger.className == "burger closeclick"
  ) {
    burger.className = "burger open";
    document.getElementById("navheader").className = "close";
  }
}

burgercontent.addEventListener(
  "click",
  function (event) {
    event.stopPropagation();
    if (event.target.id === "burgercontent") {
      fermer();
    }
  },
  { capture: true }
);

document.querySelector("nav").addEventListener(
  "click",
  function (event) {
    event.stopPropagation();
  },
  { capture: true }
);

document.body.addEventListener("click", function () {
  burger.className = "burger open";
  document.getElementById("navheader").className = "close";
});

/**
 * @param {PointerEvent} event
 * */

const clicker = function (id) {
  let color =
    id === "CL"
      ? "255, 255, 0"
      : id === "MV" || id === "SP"
      ? "255, 162, 0"
      : id === "GR"
      ? "97, 149, 233"
      : "255, 255, 0"; /* choix des couleurs */

  document.querySelector("#piloteimgvote").style.backgroundColor =
    "rgba(" + color + ", 0.4)";
  document.querySelector("#piloteimgvote_img").src =
    "src/img/pilote/" + id + "/Portrait1.png";
};

document.querySelectorAll("input[type=radio]").forEach((input) => {
  /* ecoute+ boucle */
  input.addEventListener("change", function (event) {
    clicker(event.target.id);
  });
});

/* animation apparition */

const ratio = 0.3;
const options = {
  root: null /* zonne affichage (l'écran) */,
  rootMargin: "0px",
  threshold: ratio /* pourcentage de l'élement visible */,
};

const intersect = function (entries, observer) {
  entries.forEach(function (entry) {
    /* permet de connaitre le pourcentage de visibilté de l'élément */ if (
      entry.intersectionRatio > ratio
    ) {
      entry.target.classList.add("anim_visible");
      observer.unobserve(
        entry.target
      ); /* arreter d'observer une fois visible */
    }
  });
};

let observer = new IntersectionObserver(intersect, options);
document.querySelectorAll('[class*="anim"]').forEach(function (reveal) {
  observer.observe(reveal); /*  boucle tout les élement avce la class .anim */
});