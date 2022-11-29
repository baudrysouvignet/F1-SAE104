let burger = document.getElementById('burger')

function burgerclick() {
    /* permet d'ouvrir et de fermer le menu */
    if (burger.className == "burger open") {
        burger.className = "burger close";
        document.getElementById('navheader').className = "open"; 
    } else if (burger.className == "burger close" || burger.className == "burger closeclick") {
        /* animation de fermer a ouvert */
        burger.className = "burger open";
        document.getElementById('navheader').className = "close";
    }
}


const ratio = 0.1
const options = {
    root: null, /* zonne affichage (l'écran) */
    rootMargin: '0px',
    threshold: ratio /* pourcentage de l'élement visible */
  }

const intersect = function(entries, observer){
    entries.forEach(function (entry) { /* permet de connaitre le pourcentage de visibilté de l'élément */
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('anim_visible')
            observer.unobserve(entry.target) /* arreter d'observer une fois visible */
        }
    });
}

let observer = new IntersectionObserver(intersect, options);
document.querySelectorAll('[class*="anim"]').forEach(function(reveal){
    observer.observe(reveal)/*  boucle tout les élement avce la class .anim */
}) 
