//task1
console.log("Zadanie 1");
console.log(2*3+1);// expected 7
console.log(2**4); // expected 16
console.log(5*1); // expected 5
console.log(8**2-5**2);// expected 39
//task2
console.log("Zadanie 2");
console.log(4*5==20);
console.log(6*5==30);
console.log(-17<0);
console.log(25>1);
console.log(2+2<2*4);
//task3
console.log("Zadanie 3");
console.log(true!=false);
console.log(false==false);
console.log(false!=false<true);
console.log(true>false==false<true);
//task4
console.log("Zadanie 4");
let a = 10;
let b = 5;
let c;
c=a+b;
console.log("Oto wartosc zmiennej c: ",c);
console.log(a>=0 && b>=0);
//task5
console.log("Zadanie 5");
let x =3;
let y =4;
let z =5;
let najwieksza = Math.max(x,y,z);
if(najwieksza==y)
{
    if(y<x+z)
    {
        console.log("Da sie stworzyc trojkat.");
        let s =(y+x+z)/2;
        let pole = Math.sqrt(s*(s-x)*(s-y)*(s-z));
        console.log("Pole trojkata wynosi: ",pole);
    }
    else
    {console.log("Nie sie stworzyc trojkat.");}
}
if(najwieksza==x)
{
    if(x<y+z)
    {
        console.log("Da sie stworzyc trojkat.");
        let s =(y+x+z)/2;
        let pole = Math.sqrt(s*(s-x)*(s-y)*(s-z));
        console.log("Pole trojkata wynosi: ",pole);
    }
    else
    {console.log("Nie sie stworzyc trojkat.");}
}
if(najwieksza==z)
{
    if(z<x+y)
    {
        console.log("Da sie stworzyc trojkat.");
        let s =(y+x+z)/2;
        let pole = Math.sqrt(s*(s-x)*(s-y)*(s-z));
        console.log("Pole trojkata wynosi: ",pole);
    }
    else
    {console.log("Nie sie stworzyc trojkat.");}
}


