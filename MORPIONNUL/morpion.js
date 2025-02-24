function estValide(button) { // focntion qui verifie si un boutton est vide sa veux dire "si il est cliquer si il peux etre valdier"

    return button.innerHTML.length == 0 // si le button n'a pas de contenu sa retourne thrue  (la function est validé) / car la case est vide = 0
                                        // lenght == 0 (veux dire tableau est vide)
}

function setSymbol(btn, détermineZeroOuX){ //btn veux dire button en abreviation / setSymbol nombre d'une function
    btn.innerHTML = détermineZeroOuX  //innerHTML permet de modifer la case sur la quelle ont a cliquer (modifier du html)/ symbole nom d'une variable
}


function rechercherVainqueur(pions, joueurs, tour /*= les arguments*/){
    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[1].innerHTML == jouerus[tour] &&
        pions[2].innerHTML == jouerus[tour] 
    ) { 
        pions[0].style.backgroundCOlor = "#f0000";
        pions[1].style.backgroundCOlor = "#f0000";
        pions[2].style.backgroundCOlor = "#f0000";
        return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
    };
}

if (
    pions[3].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == jouerus[tour] &&
    pions[5].innerHTML == jouerus[tour] 
) { 
    pions[3].style.backgroundCOlor = "#f0000";
    pions[4].style.backgroundCOlor = "#f0000";
    pions[5].style.backgroundCOlor = "#f0000";
    return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
}

if (
    pions[6].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == jouerus[tour] &&
    pions[8].innerHTML == jouerus[tour] 
) { 
    pions[6].style.backgroundCOlor = "#f0000";
    pions[7].style.backgroundCOlor = "#f0000";
    pions[8].style.backgroundCOlor = "#f0000";
    return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
}


if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == jouerus[tour] &&
    pions[8].innerHTML == jouerus[tour] 
) { 
    pions[0].style.backgroundCOlor = "#f0000";
    pions[4].style.backgroundCOlor = "#f0000";
    pions[8].style.backgroundCOlor = "#f0000";
    return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
}


if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == jouerus[tour] &&
    pions[6].innerHTML == jouerus[tour] 
) { 
    pions[2].style.backgroundCOlor = "#f0000";
    pions[4].style.backgroundCOlor = "#f0000";
    pions[6].style.backgroundCOlor = "#f0000";
    return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
}


if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[3].innerHTML == jouerus[tour] &&
    pions[6].innerHTML == jouerus[tour] 
) { 
    pions[0].style.backgroundCOlor = "#f0000";
    pions[3].style.backgroundCOlor = "#f0000";
    pions[6].style.backgroundCOlor = "#f0000";
    return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
}


if (
    pions[1].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == jouerus[tour] &&
    pions[7].innerHTML == jouerus[tour] 
) { 
    pions[1].style.backgroundCOlor = "#f0000";
    pions[4].style.backgroundCOlor = "#f0000";
    pions[7].style.backgroundCOlor = "#f0000";
    return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
}


if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == jouerus[tour] &&
    pions[8].innerHTML == jouerus[tour] 
) { 
    pions[2].style.backgroundCOlor = "#f0000";
    pions[5].style.backgroundCOlor = "#f0000";
    pions[8].style.backgroundCOlor = "#f0000";
    return thrue;//le thrue permet de rendre la var jeuEstFini en vraie (alors que de base elle est fausse)
}


function main () {
    let pions = document.querySelectorAll("#jeu");//queryselector selectionne un tableau : etape 1 cree pions
    let joueurs = ["X", "O"];//cree joueur // let = variable (joueur)
    let tour = 0;//cree 
    let jeuEstFini = false; 

    //la fonction fort sert a ajouter un couteur d'evenement sur chaque case du jeu
    for (let i = 0, len = pions.length; i < len; i++){

        pions[i].addEventListener("click", function(){//pas obliger d'appeler d'argument, dans les ()
            if (jeuEstFini) return;//si la partie est terminée ne rien faire / quand il y'a une seul donné "return"(rejouer continuer la partie)

            if (!estValide(this)) { //this renvoie la valeur de l'id cliqué 
                alrte("Occupé")
            }else {
                setSymbol(this, joueurs[tour]); // setSymbol est une function que l'ont va recrée par la suite 
            }                                   //function avec 2 argument
                                                //this = btn et joueurs[tour] = symbole
            jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
            if(jeuEstFini){
                alert("Bravo tu as gagné");
            }
            tour++;
            tour = tour % 2;// pour alterner entre les 2 joueurs

        });        
    }




}
//Démarage jeu
main();

// la fonction main qui permet de pouboir iniitaliser le jeux 
// (dans le code javascript il nexist e pas de cfonction qui permet d'unitialiser 
// unjeux il faut apporter tas lofique) dans tas logique il faur qur tu aille chercher les 9 cases dans le dossier html 
// il me faut une boucles qui commence de 0 regle javascript jusquau nombre maxilum de bouton que tu as lenght permet de calcluler tes 8 case
// puisque tu as le 0 tu dois appuyer sur un bouton pour un O ou Xcest un ecouteur devent (quand tu passes tas souries ou quand tu cliques) 
// nous ont utilise une fonction qui permt que si le joueur a gnganer, a besoin dun tout supplementaire 
// (logique de notre fonciton encore une fois le mode decriture cest normalsi ont ne comprends pas tout) 
// 4a6 semaines pour la logique avec beaucoup de travail purement perso 
// il y a graphicart a fais une serie de vieo en alghorytmie en javascript (regarder ces videos)
//site internet 