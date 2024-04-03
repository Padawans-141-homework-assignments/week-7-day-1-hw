// link1 = https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript
// link2 = https://www.codewars.com/kata/53369039d7ab3ac506000467



function evenOrOdd(number) {
    if (number % 2 === 0){
        return "Even"
    }
    else {
        return "Odd"
    }
}

console.log(evenOrOdd(52))
console.log(evenOrOdd(25))

function boolToWord(bool){
    if (bool === true){
        return "Yes"
    }
    else {
        return "No"
    }
}

console.log(boolToWord(true))
console.log(boolToWord(false))