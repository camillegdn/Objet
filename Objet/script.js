"use a strict"

/*

Anoncer un Objet student avec name, favoritefood, city

Ajouter tous les caractères de chaque catégories entre elles -> nbr

Si nbr -> pair -> console.log("Pair")
Si nbr -> impaire -> console.log("Impaire")

*/

let student={
    name:'Nicolas',
    favoriteFood:"Salade",
    city:"Paris",
}
let values=Object.values(student);//mettre en tableau les valeurs qu'on récupère -> ici student
console.log(values);//montrer le tableau
let count=values.reduce((acc,value)=>acc+value.length,0) //pour compter le nombre de caractéristique 
console.log(count);