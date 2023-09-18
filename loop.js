///Loops
let roll = [2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < roll.length; i++) {
    console.log(roll[i]);
}

//ForEach Loop

roll.forEach(function (element) {
    console.log(element);
})


let j = 0;
while (j < roll.length) {
    console.log(roll[j]);
    j++;
}


do {
    console.log(roll[j]);
    j++;
} while (j < roll.length);