//zadanie1
let napoj={nazwa:"Napoj orzeźwiający",objetosc:500,cena:3.20};
console.log("Oto napoj: ",napoj);
//zadanie2
let napoje=[
    {
        nazwa:"Coca Cola",
        objetosc:330,
        cena:3.59
    },
    {
        nazwa:"Fanta",
        objetosc:500,
        cena:5.50
    },
    {
        nazwa:"Sprite",
        objetosc:700,
        cena:7
    }
];
console.log("Oto tablica napoji: ",napoje);
//zadanie3
napoje.forEach(nazwa => console.log("Nazwa napoju to: ",nazwa.nazwa));
//zadanie4
napoje.push(napoj);
console.log("Oto tablica po dodaniu napoju: ",napoje);
//zadanie5
let kopia_napoje=napoje.slice();
kopia_napoje.pop();
console.log("Oto dlugosc oryginalnej tablicy: ",napoje.length);
console.log("Oto dlugosc kopii tablicy: ",kopia_napoje.length);
//zadanie6
function sumowanie_cen_napoji(napoje)
{
    let suma = 0;
    for(let i = 0;i<napoje.length; i++)
    {
        suma = suma + napoje[i].cena;
    }
    return suma;
}
console.log("Oto cena wszystkich napoji: ",sumowanie_cen_napoji(napoje));