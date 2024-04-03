//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(a_string, a_list){
    for(let i = 0; i < a_list.length; i++){
        if (a_string.includes(a_list[i])){
            console.log(`Matched ${a_list[i]}`);
        }
        else {
            console.log("No Matches.");
        }
    }
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arra = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i<arr.length; i++){
        if (i === 0){
            arr.splice(i, 1, "even index");
        }
        else if (i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
        else {
            continue;
        }
    }
    return arr
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

console.log(replaceEvens(arra))