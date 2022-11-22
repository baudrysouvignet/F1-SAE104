let carroussel = document.getElementById('contentCarr')
let timer = Date.now()
carroussel.style.marginLeft = "0%"

function switchvisibility() {
    if (carroussel.style.marginLeft == "calc(0%)") {
        document.getElementById('back').style.visibility = "collapse";
    } else if (carroussel.style.marginLeft == "calc(-500%)") {
        document.getElementById('next').style.visibility = "collapse";
    } else {
        document.getElementById('back').style.visibility = "initial";
        document.getElementById('next').style.visibility = "initial";
    }
}

function switchcar(choix) {
    if (timer - Date.now() < -600) {
        if (choix == "next") {
            carroussel.style.marginLeft = "Calc(" + carroussel.style.marginLeft + " - 100%";
            switchvisibility();
        } else {
            carroussel.style.marginLeft = "Calc(" + carroussel.style.marginLeft + " + 100%";
            switchvisibility();
        }
        timer = Date.now();
    }
}