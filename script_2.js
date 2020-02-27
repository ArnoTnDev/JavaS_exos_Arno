let number = prompt("De quelnombre veux tu calculer le factoriel?")

let j = number
for (var i = 1; i < number; i++){
    j = j * (number - i)
}

console.log(`Le factoriel de ${number} est ${j}`)


