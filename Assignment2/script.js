// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) 
{
    if (i % 2 === 0)
    {
        console.log(i);
    }
}


// 2. Calculator function using switch
function calculator(num1, num2, operator)
{
    switch (operator)
    {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log("Calculator Results:");
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));


// 3. Tax calculation using switch
function findTax(salary)
{
    let taxRate;

    switch (true)
    {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return "Invalid salary";
    }

    return salary * taxRate;
}

console.log("Tax Calculation:");
console.log(findTax(400000));
console.log(findTax(800000));
console.log(findTax(1200000));
console.log(findTax(2000000));


// 4. Sum of products of corresponding digits
function sumOfDigitProducts(n1, n2)
{
    let s1 = n1.toString().padStart(Math.max(n1.toString().length, n2.toString().length), "0");
    let s2 = n2.toString().padStart(Math.max(n1.toString().length, n2.toString().length), "0");

    let sum = 0;

    for (let i = 0; i < s1.length; i++)
    {
        sum += parseInt(s1[i]) * parseInt(s2[i]);
    }

    return sum;
}

console.log("Sum of digit products:");
console.log(sumOfDigitProducts(6, 34)); // Expected: 24
