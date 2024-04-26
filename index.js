
let nomeHeroi = "Dante";
let xpHeroi = 7890;

if(xpHeroi <= 1000 ){
    xpHeroi = "Ferro";
}else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    xpHeroi = "Bronze";
}else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    xpHeroi = "Prata";
}else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    xpHeroi = "Ouro";
} else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    xpHeroi = "Platina";
}else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    xpHeroi = "Ascendte";
}else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    xpHeroi = "Imortal";
}else if(xpHeroi >= 10001){
    xpHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${xpHeroi}`)

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/