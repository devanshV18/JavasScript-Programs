let count = 0;

document.getElementById("decbtn").onclick = function(){
    count -=1;
    document.getElementById("count").innerHTML = count;
}


document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("count").innerHTML = count;

}



document.getElementById("Incbtn").onclick = function(){
    count += 1;
    document.getElementById("count").innerHTML = count;

}


// let x = Math.floor(Math.random()*6); //gives a random decimal between 0 and 5

// console.log(x);

// let y = Math.floor(Math.random()*6)+1;//generates a random number betweeen 1 and 6
// console.log(y);



let a = Math.floor(Math.random()*6)+1;
let b = Math.floor(Math.random()*6)+1;
let c = Math.floor(Math.random()*6)+1;


// console.log(a);
// console.log(b);
// console.log(c);


document.getElementById("rollbtn").onclick = function(){
 a = Math.floor(Math.random()*6)+1;
 b = Math.floor(Math.random()*6)+1;
 c = Math.floor(Math.random()*6)+1;

 document.getElementById("alabel").innerHTML = a;
 document.getElementById("blabel").innerHTML = b;
 document.getElementById("clabel").innerHTML = c;
}