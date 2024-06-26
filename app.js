
// // q1
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             throw new Error("Stack is empty");
//         }
//         return this.items.pop();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }

// function reverseArray(arr) {
//     let stack = new Stack();

//     // Push all elements of the array onto the stack:
//     for (let i = 0; i < arr.length; i++) {
//         stack.push(arr[i]);
//     }

//     // Pop all elements from the stack and place them back into the array:
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = stack.pop();
//     }

//     return arr;
// }


// let arr = [1, 2, 3, 4, 5];
// console.log("Original array:", arr);

// arr = reverseArray(arr);
// console.log("Reversed array:", arr);


// q2



// q3
function recursiveSum(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    } else {
        // Recursive case: sum of the first element and the sum of the rest of the array
        return arr[0] + recursiveSum(arr.slice(1));
        // i wached a vidoe about slice method and tryed to use it
        // i wanna start using method
    }
}

// Example usage
let arr = [1, 2, 3, 4, 5];
console.log("Sum of the array:", recursiveSum(arr));

