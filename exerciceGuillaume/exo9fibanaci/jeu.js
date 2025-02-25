function fibannaci(n){
    const suite = [0, 1];
    for (let i = 2; i < n; i++){
        suite.push(suite[i - 1] + suite[i-2]);
    }
    return suite;
}
console.log(fibannaci(10));



// for(let i = 1; i <= 50; i++){
//     out = ( i % 1 ?"" : "FIZZ") + (i % 3 ?"" : "BUZZ");
//     console.log(out||i);
// }