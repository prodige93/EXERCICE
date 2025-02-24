




function factoriel(a){
    if(a === 0 || a === 1) return 1;
        return a * factoriel(a-1);
}
console.log(factoriel(11));

// function factorielle(n){
//     if( n === 0 || n === 1) {
//         return 1;
//     }else {
//         return n * factorielle(n-1);
//     }
// }
// console.log(factorielle(11));

//exemple pour que je puisse bien finir ma function sur le console.log
//function max(a,b){
//    if(a > b) {
//        return a;
//    }else {
//        return b;
//    }
//}
//console.log(max(1,2)); // 2
//console.log(max(3,2)); // 3