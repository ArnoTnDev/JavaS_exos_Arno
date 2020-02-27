const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 },
];
console.log("Q.1 Est-ce que tous les livres ont été au moins empruntés une fois ?")
for(let index in books){
    if(books[index].rented >= 1){
        console.log(" " + " " + "Tous les livre on été empruntés au moins une fois")
    }
}  //coment faire pour que le boucle passe sur tout les rented avant d'envoyer le console log

console.log("Q.2 Quel est le livre le plus emprunté ?")
most_rent = books[0]
for(let index in books){
    if(most_rent.rented < books[index].rented){
        most_rent = books[index].title
    } else if(most_rent > books[index].rented){
    }
}
console.log(`le livre qui a été emprunté le plus de fois est ${most_rent}`)
// console.log(books[most_rented].title)
