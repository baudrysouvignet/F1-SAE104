let burger = document.getElementById("burger");
let burgercontent = document.getElementById("burgercontent");

function fermer() {
  if (burger.className == "burger open") {
    burger.className = "burger close";
    document.getElementById("navheader").className = "open flex-c";
  } else if (
    burger.className == "burger close" ||
    burger.className == "burger closeclick"
  ) {
    burger.className = "burger open";
    document.getElementById("navheader").className = "close flex-c";
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
  input.addEventListener(
    "change",
    function (event) {
      event.stopPropagation();
      clicker(event.target.id);
    },
    { capture: true }
  );
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

const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");
const texta = document.querySelector("#texteareacl");
function clickCL(nom) {
  if (nom == 1) {
    info1.className = "selected";
    info2.className = null;
    info3.className = null;
    texta.innerHTML =
      "Charles leclerc a commencé petit avec le karting, ces premières années ont été très importantes pour son développement en tant que pilote. Il a commencé le karting à l'âge de six ans et a rapidement gravi les échelons, remportant plusieurs championnats en France et en Italie. Son succès en karting lui a valu une place à la Ferrari Driver Academy";
  } else if (nom == 2) {
    info2.className = "selected";
    info1.className = null;
    info3.className = null;
    texta.innerHTML =
      "Les succès de Charles Leclerc en karting lui ont valu une place à la Ferrari Driver Academy, ses débuts en monoplace se sont faits en Championnat de France F4 2013. Il a remporté le championnat dès sa première année et a remporté la Formula Renault 2.0 Alps 2014 et le Championnat d'Europe FIA ​​Formula 3 2015. En 2016, il est passé en GP3 Series, où il a remporté le championnat dès sa première année.";
  }
  else if (nom == 3) {
    info3.className = "selected";
    info1.className = null;
    info2.className = null;
    texta.innerHTML =
      "Charles Leclerc a eu la chance d'atteindre la Formule 1, c'est un pilote très talentueux et il a réussi dans les catégories juniors. Il a fait ses débuts en 2018 avec Sauber, et en 2019, il a rejoint Ferrari. Il est depuis devenu l'un des pilotes les plus titrés de la grille, remportant plusieurs courses et terminant deuxième du championnat des pilotes 2022. Il est connu pour son style de conduite agressif et sa capacité à repousser les limites de la voiture. Il est également connu pour sa solide éthique de travail et son dévouement à s'améliorer en tant que conducteur.";
  }
}
