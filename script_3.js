let stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let space = " ";
let full = "#";

for(i = 1; i <= stage; i++){
    full = i;
    space = stage - i;
    console.log(" ".repeat(space) + "#".repeat(full));   
}
