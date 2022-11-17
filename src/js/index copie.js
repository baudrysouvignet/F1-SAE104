const carrousel = document.getElementById('carrousel')
const text = document.getElementById('fstchoicedesc')
const tpos2 = "Max Verstapend."

function swip(pos){
    console.log(carrousel.className)
    if (pos == "add"){
        if (carrousel.className == "image pos2"){
            carrousel.className = "image pos3";
            text.innerHTML = "??"
        }else if (carrousel.className == "image pos1"){
            carrousel.className = "image pos2";
            text.innerHTML = tpos2
        } else{
            carrousel.className = "image pos1";
        }
    }else if (pos=="remove"){
        if (carrousel.className == "image pos2"){
            carrousel.className = "image pos1";
            text.innerHTML = "Charle Leclerc au circuit de SPA (Belgique)."
        }else if (carrousel.className == "image pos3"){
            carrousel.className = "image pos2";
            text.innerHTML = tpos2
        }else{
            carrousel.className = "image pos3";
        }
    }
}