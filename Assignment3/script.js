// Q1: Remove states starting with vowels
let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Kerala", "Tamil Nadu"];
let newStates = states.filter(function(state) {
    let firstLetter = state[0].toLowerCase();
    return firstLetter !== "a" &&
           firstLetter !== "e" &&
           firstLetter !== "i" &&
           firstLetter !== "o" &&
           firstLetter !== "u";
});
console.log("Q1:", newStates);


// Q2: Reverse sentence words
let str = "I love my India";
let words = str.split(" ");
let reversedWords = words.reverse();
let output = reversedWords.join(" ");
console.log("Q2:", output);


// Q3: INDIA → INDONESIA using splice
let word = "INDIA";
let letters = word.split("");
letters.splice(3, 0, "O", "N", "E", "S");
let newWord = letters.join("");
console.log("Q3:", newWord);


// Q4: Count vowels and consonants
let text = "This is a simple string example";
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();

    if (ch >= "a" && ch <= "z") {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

console.log("Q4: Vowels =", vowelCount, "Consonants =", consonantCount);


// Q5: Replace wrong word
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
console.log("Q5:", correctfn("I hav a pen", "hav", "have"));


// Q6: Numbers greater than 5
let inputArr = [1,2,3,9,10,7,5,4,3];
let result = inputArr.filter(function(num) {
    return num > 5;
});
console.log("Q6:", result);


// Q7: Average using map and reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

let avgResult = students.map(function(student) {
    let total = student.scores.reduce(function(sum, score) {
        return sum + score;
    }, 0);

    let average = total / student.scores.length;

    return {
        name: student.name,
        average: average
    };
});

console.log("Q7:", avgResult);


// Q8: Repeated digit sum
function repeatedSum(num) {
    while (num > 9) {
        let digits = num.toString().split("");
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i]);
        }

        num = sum;
    }
    return num;
}
console.log("Q8:", repeatedSum(456));


// Q9: Count words in paragraph
function countWords(text) {
    let words = text.trim().split(" ");
    return words.length;
}
console.log("Q9:", countWords("This is a simple paragraph for counting words"));


// Q10: Reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Q10:", reverseString("Hello"));


// Q11: Average marks for students
let data = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let finalResult = {};

for (let student in data) {
    let subjects = data[student];
    let total = 0;
    let count = 0;

    for (let subject in subjects) {
        total += subjects[subject];
        count++;
    }

    let average = total / count;
    finalResult[student] = { average: average };
}

console.log("Q11:", finalResult);
