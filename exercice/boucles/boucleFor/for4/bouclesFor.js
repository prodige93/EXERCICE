for ( let i = 1, out; i < 130; i++ ) {
    out(i % 6 ?'':"eliass") + (i % 4 ?'':"rachid");//?'' = si i est different de 0 return rien else return eliass or rachid 
    console.log(out||i);
}