// take user input for the number of rows
let number = parseInt(prompt("Enter the number of rows: "));
let result = "";

// print upper part of the diamond
for (let i = 1; i <= number; i++) {
    // print spaces
    result += " ".repeat(number - i);
    // print stars
    result += "*".repeat(2 * i - 1);
    // move to next line
    result += "\n";
}

// print lower part of the diamond
for (let i = number - 1; i > 0; i--) {
    // print spaces
    result += " ".repeat(number - i);
    // print stars
    result += "*".repeat(2 * i - 1);
    // move to next line
    result += "\n";
}

// output 
console.log(result);


