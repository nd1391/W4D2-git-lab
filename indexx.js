minusOne(10);        // 9
minusOne(100);       // 99
minusOne(Infinity);  // Infinity

function minusOne (num) {
 console.log(num - 1)
}


makeSentence('I', 'want', 'chimichangas');

function makeSentence (str1, str2, str3) {
    return (`Oh boy, do ${str1} ${str2} ${str3} or what?`)
}

console.log(makeSentence('I', 'want', 'chimichangas'))


getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]


function getLastElement(arr) {
    return arr.slice(-1)
}
// using a loop to get the last index in an array without knowing how many indecies in the array
function getLastElement1(arr) {
    for (let i = 0; i < arr.length -1; i++)
    return arr[arr.length -1]
}

console.log(getLastElement1([1, 2, 3, 4, 5, 6, 8]));
console.log(getLastElement([[1, 2, 3], [4, 5, 6]]));

// Jacqueline
// Blake
// Jeffrey
// Nicolas