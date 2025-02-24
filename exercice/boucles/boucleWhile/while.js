let nombreSecret = Math.floor(Math.random()*10)+1;
let devine = 0;
while (devine !== nombreSecret) {
    devine = parseInt(prompt("deviner un nombre entre 1 et 10"),10);
    if (devine < nombreSecret){
        console.log("nombre trop petit");
    }else if (devine > nombreSecret){
        console.log("nombre trop grand");
    }else (
        console.log("bravo vous avez gagné")
    )
}

/*function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(10);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}*/






/*function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/
