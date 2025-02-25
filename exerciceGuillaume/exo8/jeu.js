function plusPetitElement(arr){
    return Math.min(...arr);//... = rechercher dans un tableau (une array)/ Math.min veux dire math = nombre / min =recuperer le nombre minimum
}
console.log(plusPetitElement([4, 1, 9, 10, 23]))//1
console.log(plusPetitElement([0, 0, 0, 0, 0]))//0