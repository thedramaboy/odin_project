function filterRange(arr, a, b) {
    const filteredArr = [];
    for (number of arr) {
        if (number >= a && number <= b) {
            filteredArr.push(number);
        }
    }
    return filteredArr;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);