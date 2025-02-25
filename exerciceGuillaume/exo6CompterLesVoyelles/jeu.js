function obtenirVoyelles(mot) {
    const voyelles = 'aeiouyAEIOUY';
    const result = mot.split('').filter(char => voyelles.includes(char));
    return result.join('');
}
const mot = "J'aime les filles et pas les mecs.";
const voyelles = obtenirVoyelles(mot);
console.log(mot)
console.log(voyelles, voyelles.length);