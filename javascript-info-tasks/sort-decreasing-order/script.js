function sortDecreasingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    console.log(arr);
}

let arr = [5, 2, 1, -10, 8];
sortDecreasingOrder(arr);
