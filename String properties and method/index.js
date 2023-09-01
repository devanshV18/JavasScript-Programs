let username = "Bro code";

let len = username.length;

console.log(len)

let charatIndex = username.charAt(0);
console.log(charatIndex);

let occurence = username.indexOf("o");
let loccurence = username.lastIndexOf("o");

console.log(occurence);
console.log(loccurence);

// ??to remove any empty space at start or end only! VVVI

username = username.trim();

console.log(username);


username = username.toLowerCase();
console.log(username)

username = username.toUpperCase();
console.log(username);

let phonenumber = "123-456-789";

//replace the given character with the specified ones

phonenumber = phonenumber.replaceAll("-","/");
console.log(phonenumber);

//to remove dashes and just display the string as phonenumber

phonenumber = phonenumber.replaceAll("/","");
console.log(phonenumber);


//slice() - extracts a section of a string and returns it as a new string, without modifying the original string

let fullname = "Devansh Verma";

let fname;
let lname;

// lname = fullname.slice(8); //if end index isnt mentioned in the argument then it takes the string till end
// fname = fullname.slice(0,7);

// console.log(fullname);
// console.log(fname);
// console.log(lname);


// efficient way

lname = fullname.slice(fullname.indexOf(" ")+1);
fname = fullname.slice(fullname.indexOf("D"),fullname.indexOf("h")+1);
console.log(fullname);

console.log(fname);
console.log(lname);
