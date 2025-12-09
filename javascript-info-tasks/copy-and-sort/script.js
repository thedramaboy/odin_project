function copySorted(arr) {
    let sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        for (let i = 0; i < sortedArr.length - 1; i++) {
            let first = parseInt(sortedArr[i].charCodeAt(0));
            let second = parseInt(sortedArr[i + 1].charCodeAt(0));
            if (first > second) {
                let temp = sortedArr[i];
                sortedArr[i] = sortedArr[i+1];
                sortedArr[i+1] = temp;
            }
            console.log(first, second)
        }
    }
    return sortedArr;
}

let arr = ['HTML', 'JavaScript', 'CSS']
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr)
