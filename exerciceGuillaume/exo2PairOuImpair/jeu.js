let out;
for (let i = 2; i < 58; i++){
    out = (i % 2 ?'' : "Pair") + (i % 3 ?'' : "Impair"); // out = permet de dire quer out ressort les arguments 
    console.log(out||i);
}

//fucntion eestParie(n){
//    return n % 2 === 0;
//}
//console.log(eestParie(2)); // true
//nsole.log(eestParie(3)); //false