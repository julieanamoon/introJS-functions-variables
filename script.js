//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."


let jobTitle = `UX Designer`; 
let geoLocation = `Toronto`;
let annualSalary = 80000;
let compName = `Shopify`;
let item1 = document.querySelector("#ex1");
item1.innerHTML = (`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${compName}.`)


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear= 2020;
let birthYear = 1994; 
let sum = currentYear - birthYear;
let item2 = document.querySelector("#ex2");
item2.innerHTML = ("They are " + sum + " years old");


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge= 26;
let maxAge= 94;
let estAmount= 3;
let total= (estAmount * 360) * (maxAge - currentAge);
let item3 = document.querySelector("#ex3");
item3.innerHTML = ("You will need " + total + " to last you until the ripe old age of " + maxAge + "!");


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 3;
let circumference = 3.141592 * 2*radius;
let area = 3.141592 * radius*radius;
let item4 = document.querySelector("#ex4");
item4.innerHTML = ("The circumference is " + circumference.toFixed(2) + ". The area is " + area.toFixed(2))


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

// testing out back-ticks (` `) and evaluator symbol ${}!!
let celsius = 7;
let cInf = celsius / 5 * 9 + 32;
let fahrenheit = 86;
let FInc = (fahrenheit - 32) * 5 / 9;
let item5 = document.querySelector("#ex5");
item5.innerHTML = (`${celsius}°C is ${cInf}°F. ${fahrenheit}°F is ${FInc}°C`);


// EXERCISE 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber (number) {
    return number ** 2
   }
   
   let numToSq = 3
   let item6 = document.querySelector("#ex6");
   item6.innerHTML = (`The result of squaring the number ${numToSq} is ${squareNumber(numToSq)}`)
   
   
   
   // EXERCISE 7
   // Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
   
      function halfNumber (number) {
        return number / 2
       
       }
    
       let numToHalf = 5
       let item7 = document.querySelector("#ex7");
       item7.innerHTML = (`Half of ${numToHalf} is ${halfNumber(numToHalf)}`)

   
   // EXERCISE 8
   // Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
      
function percentOf (numbOne, numbTwo) {
    return numbOne / numbTwo * 100
   
   }

      let numToPercentOne = 2, numToPercentTwo = 4
      let item8 = document.querySelector("#ex8");
      item8.innerHTML = (`${numToPercentOne} is ${percentOf(numToPercentOne,numToPercentTwo)}% of ${numToPercentTwo}`)

   
   // EXERCISE 9
   // Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
   //      Bonus: Round the result so there are only two digits after the decimal.
   
//    function areaOfCircle (radius) {
//        let area = 3.141592 * radius*radius
//        let item9 = document.querySelector("#ex9");
//        area = area.toFixed(2);
//        item9.innerHTML = (`The area for a circle with radius ${radius} is ${area}`)
//        return area
//       }
      
//       areaOfCircle (2)


      function areaOfCircle (radiuss) {
        return areaa = (3.141592 * radiuss**2)
       }
       
       let radiuss = 2
       let item9 = document.querySelector("#ex9")
       item9.innerHTML =  (`The area for a circle with radius ${radiuss} is ${areaOfCircle(radiuss).toFixed(2)}`)
    

       
   
   // EXERCISE 10
   // Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
   //      1. Take half of the number and store the result.
   //      2. Square the result of #1 and store that result. 
   //      3. Calculate the area of a circle with the result of #2 as the radius.   
   //      4. Calculate what percentage that area (#3) is of the squared result (#2).
   
   
   function runAll(number) {
    let half = halfNumber(number)
    let squared = squareNumber(half)
    let area = areaOfCircle(squared)
    let percent = percentOf(squared, area)
    let item10 = document.querySelector("#ex10")
    item10.innerHTML = (`Half of ${number} is ${half}.
    The result of squaring the number ${half} is ${squared}.
    The area for a circle with radius ${squared} is ${area.toFixed(2)}.
    ${squared} is % ${percent.toFixed(2)} of ${area.toFixed(2)}.
    `)

  }
  
  runAll(20);


    
    
// IGNORE THIS.
// Half of 20 is 10
// The result of squaring the number 10 is 100
// The area for a circle with radius 100 is 31415.92
// 100 is 0.31830995240629595% of 31415.92
     
     