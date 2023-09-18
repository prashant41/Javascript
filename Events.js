function clicked(){
    console.log("Button Was Clicked")
}
/*
window.onload=function(){
console.log("The document was loaded");
}


first.addEventListener('click',function(){
    console.log("Clicked on Conatiner")
})


first.addEventListener('mouseover',function(){
    console.log("Mouse on Conatiner")
})


first.addEventListener('mouseout',function(){
    console.log("Mouse out Conatiner")
})*/

/*
first.addEventListener('mouseup',function(){
    console.log("Mouseup Conatiner")
})


first.addEventListener('mousedown',function(){
    console.log("Mousedown Conatiner")
})*/

//first.addEventListener('click',function(){
document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>";
console.log("Clicked on Container");
//})


let a=document.querySelectorAll('.container')[1].innerHTML;
first.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=a;
    console.log("Mouseup Conatiner");
})


first.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>U have clicked</b>";
    console.log("Mousedown Conatiner")
})

