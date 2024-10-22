console.log()
console.log('Numer Zadania 1');
console.log('----------------');
console.log()
let Kontakty=[
    {
        name:"Maxwell",
        phone:"(0191)7196495",
        email:"Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name:"Raja Villareal",
        phone:"08663982895",
        email:"posuere.vulputate@sed.com"
    },
    {
        name:"Helen Richards",
        phone:"08001111",
        email:"libero@convallis.edu"
    }
];
console.log(Kontakty);
console.log()
console.log('Numer Zadania 2');
console.log('----------------');
console.log()

let nowy_kontakt=
    {
        name:"Maisie Haley",
        phone:"0913 531 3030",
        email:"risus.Quisque@urna.ca."
    };
Kontakty.push(nowy_kontakt);
console.log(Kontakty);
console.log("Oto pierwszy i ostatni kontakt: ");
console.log(Kontakty[0],Kontakty[3]);
console.log("Oto dlugosc listy: ",Kontakty.length);