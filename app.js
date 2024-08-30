

//Assignment No 03

//Question No 01

// var age = 18;
// alert("my age is" + age)

//Question No 02

// var visit = 14;
// alert("you have visited our web "  + visit);

//Question No 03

// var birthYear = 2006;
// document.write("my birth year is" +  birthYear);

//Question No 04

// var xyz = "XYZ clothing store";
// var visitorsName = "JhonDoe";
// var productTiitle = "T-Shirt";
// var order = 5;
// document.write(visitorsName + " "+ productTiitle + " " + order + " " + xyz);



//Assignment No 04

//Question No 01

// let abc, abcd = 1, abcde;

//Question No 02

//legal

// var Geeks;
// var Geeks_for_Geeks;
// var $Geeks;
// var _Geeks;

//illegal

// var Geeks123;
// var Geeks-for-Geeks;
// var 123Geeks;
// var Geeks for Geeks;
// var var;
// var true;

//Question No 03

//document.write("<h2>Rules for naming JS variables</h2>");
//document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br>");
//document.write("Variables must begin with a letter, $, or _. For example: $name, _name, or name<br>");
//document.write("Variable names are case sensitive.<br>");
//document.write("Variable names should not be JS keywords.");


//Asignment No 05

//Question No 01

//var num1 = 3;
//var num2 = 5;
//var result = num1 + num2;
//document.write("Sum of " + num1 + " and " + num2 + " is " + result + "<br>");

//Question No 02

//var addition = num1 + num2;
//var subtraction = num1 - num2;
//var multiplication = num1 * num2;
//var division = num1 / num2;
//var modulus = num1 % num2;

//document.write("Addition: " + addition + "<br>");
//document.write("Subtraction: " + subtraction + "<br>");
//document.write("Multiplication: " + multiplication + "<br>");
//document.write("Division: " + division + "<br>");
//document.write("Modulus: " + modulus + "<br>");


//Question No 03

//var val;
//document.write("Value after variable declaration is: " + val + "<br>");
//val = 5;
//document.write("Initial value: " + val + "<br>");
//val++;
//document.write("Value after increment is: " + val + "<br>");
//val += 7;
//document.write("Value after addition is: " + val + "<br>");
//val--;
//document.write("Value after decrement is: " + val + "<br>");
//var remainder = val % 3;
//document.write("The remainder is: " + remainder + "<br>");

//Question No 04

//var ticketPrice = 600;
//var numberOfTickets = 5;
//var totalCost = ticketPrice * numberOfTickets;
//document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

//Question No 05

//var number = 4;
//document.write("<h1>Table of 4<h1/>")
//document.write(number +" x 1 = ", number * "1" + "<br>")
//document.write(number +" x 2 = ", number * "2" + "<br>")
//document.write(number +" x 3 = ", number * "3" + "<br>")
//document.write(number +" x 4 = ", number * "4" + "<br>")
//document.write(number +" x 5 = ", number * "5" + "<br>")
//document.write(number +" x 6 = ", number * "6" + "<br>")
//document.write(number +" x 7 = ", number * "7" + "<br>")
//document.write(number +" x 8 = ", number * "8" + "<br>")
//document.write(number +" x 9 = ", number * "9" + "<br>")
//document.write(number +" x 10 = ", number * "10")

//Question No 06

//var celsius = 25;
//var fahrenheit = (celsius * 9/5) + 32;
//document.write(celsius + "°C is " + fahrenheit + "°F<br>");

//var fahrenheitTemp = 77;
//var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
//document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br>");


//Question No 07

//var priceOfItem1 = 15.99; 
//var priceOfItem2 = 29.99; 

//var quantityOfItem1 = 3; 
//var quantityOfItem2 = 2; 
//var shippingCharges = 5.99; 
//var totalCostOfItem1 = priceOfItem1 * quantityOfItem1;
//var totalCostOfItem2 = priceOfItem2 * quantityOfItem2;
//var subtotal = totalCostOfItem1 + totalCostOfItem2;
//var totalCost = subtotal + shippingCharges;

//document.write("<h2>Receipt</h2>");
//document.write("<p>Item 1: $" + priceOfItem1.toFixed(2) + " x " + quantityOfItem1 + " = $" + totalCostOfItem1.toFixed(2) + "</p>");
//document.write("<p>Item 2: $" + priceOfItem2.toFixed(2) + " x " + quantityOfItem2 + " = $" + totalCostOfItem2.toFixed(2) + "</p>");
//document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
//document.write("<p>Shipping Charges: $" + shippingCharges.toFixed(2) + "</p>");
//document.write("<p><strong>Total Cost: $" + totalCost.toFixed(2) + "</strong></p>");

//Question No 08

//var totalMarks = 980; 
//var marksObtained = 804; 
//var percentage = (marksObtained / totalMarks) * 100;

//document.write("<h2>Marks Sheet</h2>");
//document.write("<p>Total Marks: " + totalMarks + "</p>");
//document.write("<p>Marks Obtained: " + marksObtained + "</p>");
//document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

//Question No 09

//var USDToPKRRate = 104.80;
//var RiyalToPKRRate = 28;
//var amountInUSD = 10;
//var amountInRiyal = 25;

//var totalInPKR = (amountInUSD * USDToPKRRate) + (amountInRiyal * RiyalToPKRRate);
//document.write("<h1><strong>Currency in PKR</strong></h1>")
//document.write("Total in Pakistani Rupees: " + totalInPKR);

//Question No 10

//var initialNumber = 5;
//var result = (((initialNumber + 5) * 10) / 2);
//document.write("<h1>Result: " + result + "</h1>");

//Question No 11

// var currentYear = 2024;
// var birthYear = 1992;
     
// var BirthdayHasOccurred = currentYear - birthYear;
// var BirthdayHasNotOccurred = BirthdayHasOccurred - 1;
// document.write("<h1>They are either " + BirthdayHasOccurred + " or " + BirthdayHasNotOccurred + " years old</h1>");

//Question No 12

// var radius = 20; 
// var pi = 3.142;        
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;
// document.write("<h1>The Geometrizer</h1>")
// document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
// document.write("The area is: " + area.toFixed(2));

                                 
//Question No 13

// var snack = "Chocolate Chip"; 
// var currentage = 25; 
// var maxage = 80; 
// var amountperday = 3; 
// var yearsLeft = maxage - currentage; 
// var totalAmountNeeded = yearsLeft * 365 * amountperday;
// document.write("<h1>The Lifetime Supply Calculator</h1>")
// document.write("Favourite snack: " + snack + "<br>")
// document.write("Current age: " + currentage + "<br>")
// document.write("Estimeated maximum age: " + maxage + "<br>")
// document.write("Ammount of snacks per day: " + 3 + "<br>")
// document.write("You will need " + totalAmountNeeded + " " + snack + " to last you until the ripe old age of " + maxage );

//Assignment 06
  
//Question No 1

// document.write("<h1>Result<h1/>");
// document.write("The value of a is: 10 <br><small>------------------------------</small><br>");
// num = 10;
// num++;
// document.write("The value of ++a is: 11 <br>");
// document.write("Now the value of a is :", num ,"<br><br>");
// num = 11;
// num++;
// document.write("The value of ++a is: 11 <br>");
// document.write("Now the value of a is :", num ,"<br><br>");
// num = 12;
// num--;
// document.write("The value of a is: 11 <br>");
// document.write("Now the value of a is :", num ,"<br><br>");
// num = 11;
// --num;
// document.write("The value of a is: 11 <br>");
// document.write("Now the value of a is :", num);

//Question No 02

// var a = 2;
// var b = 1;
 
// var result = --a - --b + ++b + b--;
 
// console.log("Final value of a: " + a); // 1
// console.log("Final value of b: " + b); // 0
// console.log("Final result: " + result); // 3
