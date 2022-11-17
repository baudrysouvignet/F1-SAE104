let burger = document.getElementById('burger')
let burgercontent = document.getElementById('burgercontent')

function burgeretatzero(){
    if (burger.className == "burger open"){ /* permetde retourner a l'état voulu lors de l'arret du mouse down */
        burger.style.width = "20px";
    } else if (burger.className == "burger closeclick"){
        burger.className = "burger close";
    } 
}

burgercontent.addEventListener("mouseenter", function( event ) { /* permet de savoir si la souris passe au dessus de la div content */
    document.getElementById("burgercontent").onmousedown = function () { /* animation mouse down */
        if (burger.className == "burger open"){
            burger.style.width = "10px";
        } else if (burger.className == "burger close"){
            burger.className = "burger closeclick";
        } 
        document.getElementById("burgercontent").onmouseup = function () { /* retour a au style de base si l'utilisateur ne click aps */
            burgeretatzero()
        }
    };


    burgercontent.addEventListener("mouseleave", function( event ) { /* permet def orcer le retour a l'état de base quand la souris quitte al div content */
        burgeretatzero()
        console.log("je quitte")
    });
});


function burgerclick(){ /* permet d'ouvrir et de fermer le menu */
    if (burger.className == "burger open"){
        burger.className = "burger animation";
        burger.style.width = "00px";

        document.getElementById('header').className = "open";/* animation menu */
        setTimeout(function() { /* etat ferme */
            burger.className = "burger close";
        }, 300);

        
    } else if (burger.className == "burger close" || burger.className == "burger closeclick"){ /* animation de fermer a ouvert */
        burger.className = "burger animation";
        burger.style.width = "00px";
        
        document.getElementById('header').className = "close"; /* animation menu */
        setTimeout(function() { /* etat ferme */
            burger.className = "burger open";
            burger.style.width = "20px";
        }, 300);
    } 
    
}