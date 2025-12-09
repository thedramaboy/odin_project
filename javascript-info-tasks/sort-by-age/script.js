let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].age > arr[j+1].age) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name); 