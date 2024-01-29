//Finds minimum of 2 parameters
function findMin(input1, input2) {
    let num1 = input1;
    let num2 = input2;

    if (num1 === num2) {
        return (num1);
    }
    else if (num1 < num2) {
        return (num1);
    }
    else {
        return (num2);
    }
}

//Finds if the parameter is even or odd
function isEven(input) {
    let num = input;
    let output = Math.abs((num % 2));

    if (output == 0) {
        return ("true");
    }
    else {
        return ("false");
    }
}

//Finds how many "B"s are in a string parameter
function countBs(input) {
    let str = input;
    let counter = 0;

    if ((parseInt(str) === NaN)) {
        return ("Not a string!");
    }

    for (i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            counter++;
        }
    }

    return (counter);
}

function countChar(input, letter) {
    let str = input;
    let theLetter = letter;
    let counter = 0;

    if ((parseInt(str) === NaN)) {
        return ("Not a string!");
    }

    for (i = 0; i < str.length; i++) {
        if (str[i] === theLetter) {
            counter++;
        }
    }

    return (counter);

}


//Running functions
console.log(findMin(-20, 5));
console.log(isEven(5));
console.log(isEven(10));
console.log(isEven(-2));
console.log(countBs("TheBubbleBowl!"));
console.log(countChar("TheSillySillySillyGooberS", "S"));