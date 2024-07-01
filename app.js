// 1. Calculate are of rectangle 

const rectangleArea = (b = 5,l = 3) => l * b

console.log(rectangleArea())

 console.log(rectangleArea(4));

//2. Write an arrow function with default parameters that concatenates two strings

const concatenateString = (str1, str2 = " neoG") => str1 + str2

  console.log(concatenateString("Hello", "World")); 
console.log(concatenateString("Hello"))

//3. Write an arrow function with radius and height as default parameter with values 2 and 4 respectively, to calculate the volume of a cylinder.

const cylinderVolume = (r,h = 4) => 3.14 * r*r * h
console.log(cylinderVolume(3))
console.log(cylinderVolume(3, 5))

//4. Write an arrow function with price and quantity as default parameters to calculate the total cost of a shopping cart.

const shoppingCartTotal = (price = 0, quantity = 1) => price * quantity 
 console.log(shoppingCartTotal(10)); 
console.log(shoppingCartTotal(15, 3));
console.log(shoppingCartTotal());


// 5. Write and arrow function with default parameters that generates a user profile. It should take a username, age, and country as parameters.

const generateUserProfile = (name ="Guest", age = 25, country = "Unknown") =>  `Username: ${name} , Age: ${age} , Country: ${country}`

 console.log(generateUserProfile());
 console.log(generateUserProfile("Alice", 30, "USA"));


// 6. Convert this function into an arrow function with default parameter.

const sum = (a,b=5) => a + b

console.log(sum(2, 4)); 
console.log(sum(3)); 

//7. Write an arrow function with base and exponent as default parameters to calculate the power of a number.

const calculatePower = (base,exponent = 1) => base ** exponent

 console.log(calculatePower(2, 3));
 console.log(calculatePower(5));


// 8. Write an arrow function with default parameters that calculates the area of a triangle. The function should take the base and height as parameters.

const triangleArea = (l,b=4) => 0.5 * l * b
 console.log(triangleArea(5))
 console.log(triangleArea(3, 6));

//9. Write an arrow function with default parameters that concatenates two strings. The function should take str1 and str2 as params.

const concatenateStrings = (str1,str2 ="") => str1 + str2
console.log(concatenateStrings("Good"));
