// Question 1: Display even numbers from 1 to 100

console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) 
{
    if (i % 2 === 0) 
    {
        console.log(i);
    }
}

// Question 2: Calculator function using switch

function calculate(num1, num2, operator)
{
    let result;

    switch (operator) 
    {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:
            result = "Invalid operator";
    }

    return result;
}

// Example usage
console.log("Addition:", calculate(10, 5, "+"));
console.log("Subtraction:", calculate(10, 5, "-"));
console.log("Multiplication:", calculate(10, 5, "*"));
console.log("Division:", calculate(10, 5, "/"));



// Question 3: Tax calculation using switch

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
            taxRate = 0;
    }

    let taxAmount = salary * taxRate;
    return taxAmount;
}

// Example usage
console.log("Tax on salary 400000:", findTax(400000));
console.log("Tax on salary 800000:", findTax(800000));
console.log("Tax on salary 1200000:", findTax(1200000));
console.log("Tax on salary 2000000:", findTax(2000000));



// Question 4: Sum of products of corresponding digits

function sumOfDigitProducts(n1, n2) 
{
    let result = 0;

    // Convert numbers to strings
    let s1 = n1.toString();
    let s2 = n2.toString();

    // Make both strings same length by padding with zeros
    let maxLength = Math.max(s1.length, s2.length);
    s1 = s1.padStart(maxLength, "0");
    s2 = s2.padStart(maxLength, "0");

    // Multiply corresponding digits
    for (let i = 0; i < maxLength; i++)
    {
        result += parseInt(s1[i]) * parseInt(s2[i]);
    }

    return result;
}

// Example usage
console.log("Result for 6 and 34:", sumOfDigitProducts(6, 34));
