/* let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'jonas')


javascriptIsFun = 'yes!'
console.log(javascriptIsFun)
console.log(typeof javascriptIsFun)


let year;
console.log(year);
console.log(typeof year);

*/


// let, const and var
// let year = 2001;
// year = 2002;
// console.log(year)

// const man = 21;
// man = 22;

// var world = 'hello';
// world = 'none';
// console.log(world)

// Math operator
// const now = 2025;
// const ageSamian = now - 1998;
// const ageRejuan = now - 2001;

// console.log(ageSamian - 2, ageRejuan / 2);

// let firstname = 'Rejuanul';
// let lastname = 'Islam'
// console.log(firstname + ' ' + lastname)


// Assignment operator
// let x = 5 + 10;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageSamian > ageRejuan)



// Coding Challenge #1
// for data 1
// task 1
// let markMass = 78;
// let markHeight = 1.69; 

// let johnMass =  92;
// let johnHeight = 1.95; 

// // task 2
// let marksBMI = markMass / (markHeight * markHeight) ;
// console.log(marksBMI);

// let johnsBMI = johnMass / (johnHeight * johnHeight) ;
// console.log(johnsBMI);


// // task 3
// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);



// // for data 2
// // task 1
// markMass = 95;
// markHeight = 1.88; 

// johnMass =  85;
// johnHeight = 1.76; 

// // task 2
// marksBMI = markMass / (markHeight * markHeight) ;
// console.log(marksBMI);

// johnsBMI = johnMass / (johnHeight * johnHeight) ;
// console.log(johnsBMI);


// // task 3
// markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);

// let firstName = "Rejuanul";
// let lastName = "Islam";
// let age = 24;
// let mylocation = "Chattogram";

// let myself = `My name is ${firstName +" " + lastName}. I am ${age} years old. I live in ${mylocation}.`
// console.log(myself)


// const age = 19;


// if(age >= 18){
//     console.log("Rejuan can drive cars")
// }

// else {
//     console.log("Rejuan can't drive")
// }


// const birthYear = 1999;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// }
// else {
//     century = 21;
// }

// console.log(century)


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Task 1
// if(BMIMark > BMIJohn){
//     console.log("Mark's BMI is higher than John's!")
// }

// else {
//     console.log("John's BMI is higher than Mark's!")
// }

// // Task 2
// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
// }

// else {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
// }


// const inputYear = '1991';
// console.log(Number(inputYear) + 18)

// let n = '1' + 1; // 11
// n = n - 1; // 10
// console.log(n)


// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));


// let money = 12;
// if(money){
//     console.log("Dont spend it all");
// }
// else {
//     console.log("You should get a job")
// }

// let height;
// if(height){
//     console.log("Height is defined")
// }
// else {
//     console.log("Height is not undefined")
// }


// let age = 18;
// if(age === 18) console.log('You are adult')


// let favNumber = Number(prompt("Enter your fav number: "));
// console.log(favNumber);
// console.log(typeof favNumber);
// if (favNumber === 23) {
//     console.log("23 is very cool number");
// }
// else if (favNumber === 7) {
//     console.log("7 is very cool number");
// }
// else {
//     console.log("Number is not 23 or 7");
// }


// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision)
// console.log(hasDriverLicense || hasGoodVision)

// Dolphins and Koalas
// tasks 1
// let scoreDolphins = Number(prompt("Enter Dolphins score: "));
// let scoreKoalas = Number(prompt("Enter Koalas score: "));

// if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// }

// else if (scoreDolphins < scoreKoalas) {
//     console.log("Koalas win the trophy");
// }

// // else if (scoreDolphins === scoreKoalas) {
// //     console.log("Koalas win the trophy");
// }


// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("Gym day");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code example");
//         break;
//     case 'friday':
//     case 'saturday':
//         console.log("Prepare theory");
//         break;
//     case 'sunday':
//         console.log("Enjoy the weeknd");
//         break;
//     default:
//         console.log("Not a valid day");
// }


// const day = "saturday";

// if(day === "monday"){
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// }

// else if(day === "tuesday"){
//     console.log("Gym day");
// }

// else if(day === "wednesday" || day === "thursday"){
//     console.log("Write code example");
// }

// else if(day === "friday" || day === "saturday"){
//     console.log("Prepare theory");
// }

// else if(day === "sunday"){
//     console.log("Enjoy the weeknd");
// }

// else {
//     console.log("Not a valid day");
// }


// Conditional operator

// const age = 22;
// // age >= 18 ? console.log("I like to drink wine") : 
// // console.log("I like to drink water")

// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink)


// let drink2;
// if(age >= 18){
//     drink2 = 'Wine';
// }
// else {
//     drink2 = 'Water';
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`)


// Coding Exercise 4
const bill = 275;
let tip;
// let calculate;

// Task 1
if(bill <= 300 && bill >= 50){
    tip = 15/100;
    calculate = `${bill + (bill * tip)}`  
} 

else {
    tip = 20/100;
    calculate = `${bill + (bill * tip)}` 
}

console.log(calculate);

tip = bill <= 300 && bill >= 50 ? bill * 15/100 : bill * 20/100;
console.log(tip)


// Task 2
console.log(`The bill was 275, the tip was ${tip}, and the total value ${bill + tip}`)