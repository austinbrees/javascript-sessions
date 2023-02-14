
let total = 0;
total += 100.1;
console.log(total);


let mynumber = 1;
mynumber ++;
console.log(mynumber)

let mynumber2 = 1;
console.log(++mynumber2);
console.log(mynumber2);

let mynumber3 = 500;
let isMYNumberBig = mynumber3 > 100? 'Big': 'No';
console.log(isMYNumberBig);

let myMoney = 30;
let bankStatement = `You have ${myMoney} in your bank`;
console.log(bankStatement);

let projectCode = "ES45ATETWQ423";
let country = projectCode.startsWith("ES")? "Spain": "Elsewhere...";
console.log(country);


let projectCode2 = "ES45ATETWQ423";
let projectNumber = projectCode2.slice(2, -3);
console.log(projectNumber);

let numberString = "1,24,56,2333,1000";
let numbers = numberString.split(",");
console.log(numbers);

let userInput = "austin.h.brees@student.ie.edu ";
console.log(userInput.trim());

let userInput2 = "austin.h.brees@student.ie.edu, anotheremail@gail.com";
console.log(userInput2.replace(/@/g, "AT"));

let staff = ['Carlos', "John", 'Cheng'];
let doesJohnWorkHere = staff.indexOf('Carlos');
console.log(doesJohnWorkHere);

let numberString2 = "1,2,3,4,5"
let numbersArray = numberString.split(",");
console.log(numbersArray)
numbersArray.push("6");
console.log(numbersArray)
let responese = numbersArray.join(';');
console.log(responese);

let numbers2 = ["1","2","3","4","5"];
numbers2.length = 3;
console.log(numbers2);

let numbers3 = [30, 12, 45, 1000, 1];
console.log(numbers3.sort());

let teacher = {
    name: "Carlos",
    subject: "Javascript",
    classroom: "503"
}
console.log(teacher.name);

function add(x,y) {
    return x + y
}

console.log(add(3,4))
