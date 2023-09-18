let fname, Age;

let person = {
    fname: "Prashant",
    Age: 21
};
person.name='John';//Dot Notation

person['name']="Marry";//Bracket Notation

//2 nd method Bracket Notation
let selection='name';
person[selection]="Kunal";


console.log(person.name);