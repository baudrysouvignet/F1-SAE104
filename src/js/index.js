const carrousel = document.getElementById('carrousel')
const text = document.getElementById('carrtextimg')

/* texte a écrire a gauche de l'image */
const tpos1 = "Charle Leclerc au circuit de SPA (Belgique)."
const tpos2 = "Max Verstapend durant la bataille pour le titre (2021)"
const tpos3 = "Pit Top de l'écurie ferrari."

function swip(pos){
    console.log(carrousel.className)
    if (pos == "add"){
        if (carrousel.className == "image pos2"){
            carrousel.className = "image pos3";
            text.innerHTML = tpos3
        }else if (carrousel.className == "image pos1"){
            carrousel.className = "image pos2";
            text.innerHTML = tpos2
        } else{
            carrousel.className = "image pos1";
            text.innerHTML = tpos1
        }
    }else if (pos=="remove"){
        if (carrousel.className == "image pos2"){
            carrousel.className = "image pos1";
            text.innerHTML = tpos1
        }else if (carrousel.className == "image pos3"){
            carrousel.className = "image pos2";
            text.innerHTML = tpos2
        }else{
            text.innerHTML = tpos3
        }
    }
}