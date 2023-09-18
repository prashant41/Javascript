let element = document.getElementById("click");
alert(element);

let clas = document.getElementsByClassName("container");
console.log(clas);
//clas[0].style.background="yellow";
clas[0].classList.add("bg-primary");
clas[0].classList.add("text");
clas[0].classList.add("bg-primary");
/*
console.log(element.innerHTML);
console.log(element.innerText);

console.log(clas[0].innerHTML);
console.log(clas[1].innerText);*/

let tn=document.getElementsByTagName('div');
console.log(tn);

//Create Element
createdElement=document.createElement('p');
createdElement.innerText="This is Paragraph";
tn[0].appendChild(createdElement);

createdElement2=document.createElement('b');
createdElement2.innerText="This is Bold";
tn[0].replaceChild(createdElement2,createdElement);

//removeChild(element);

//document.title;
//document.URL;
//document.links;
//documnent.images;
//documents.domain;


//Selecting Using Query
sel=document.querySelector('.container')
console.log(sel)

sel=document.querySelectorAll('.container')
console.log(sel)