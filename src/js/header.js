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