// Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
//Your output should be: [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]
const arr1 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const evenToOdd = num => num % 2 === 0 ? num + 1 : num
console.log(arr1.map(evenToOdd))
//-----------------------------------------

// Get the names in an array for only those who have a cycle.
// Your output should be: ['Tanay', 'Tanvi']
const family = [{
        name: 'Tanay',
        haveCycle: true
    },
    {
        name: 'Akanksha',
        haveCycle: false
    },
    {
        name: 'Tanvi',
        haveCycle: true
    },
    {
        name: 'Kanak',
        haveCycle: false
    }
];
const cycleTrueOrNot = (initial, current) => current.haveCycle ? [...initial, current.name] : [...initial]
console.log(family.reduce(cycleTrueOrNot, []))

// Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
// Your output should be: [2, 6, 8, 4]
const arr2 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const lessThanEight = num => num <= 8 && num % 2 === 0
console.log(arr2.filter(lessThanEight))

// Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.
// Your output should be: ['repeat']
const arr3 = ['eat', 'sleep', 'repeat', 'code'];
const moreThanFive = str => str.length > 5
console.log(arr3.filter(moreThanFive))

// Given an array. Write a function to get the sum of all elements which are greater than 50.
// Your output should be: 190
const arr4 = [1, 2, 3, 58, 5, 6, 62, 8, 70];
const sumOfAll = (initial, current) => current > 50 ? current + initial : initial
console.log(arr4.reduce(sumOfAll, 0))

// Given an array. Write a function to find the product of all elements which are even.
// Your output should be: 96
const arr5 = [1, 2, 3, 7, 5, 6, 8, 9];
const productOfEven = (initial, current) => current % 2 === 0 ? current * initial : initial
console.log(arr5.reduce(productOfEven))

// Given an array of objects. Write a function to find the sum of ages of each person.
// Your output should be: 121 /*** 60+36+16+9 ***/
const arr6 = [{
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
]
const sumOfAge = (initial, current) => current.age + initial
console.log(arr6.reduce(sumOfAge, 0))

// Given an array. Convert it in to an object with key as the index of each element and value as the element itself.
// Your output should be: {'0': "You", '1': "all", '2': "are", '3': "rockstars"}
const arr7 = ["You", "all", "are", "rockstars"];
const keyAsIndex = (initial, current, currentIndex) => ({
    ...initial,
    [currentIndex]: current
})
console.log(arr7.reduce(keyAsIndex, {}))

// Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 
// Your Output should be: [{
//         name: "Apple",
//         type: "fruit"
//     },
//     {
//         name: "Mango",
//         type: "fruit"
//     },
//     {
//         name: "Potato"
//         type: "vegetable"
//     },
//     {
//         name: "Guava",
//         type: "fruit"
//     },
//     {
//         name: "Capsicum",
//         type: "vegetable"
//     }
// ]
const arr8 = [{
        name: "Apple"
    },
    {
        name: "Mango"
    },
    {
        name: "Potato"
    },
    {
        name: "Guava"
    },
    {
        name: "Capsicum"
    }
]
const arrWithType = obj => {
    if (obj.name.length > 5) {
        obj.type = "Vegetable"
    } else {
        obj.type = "Fruit"
    }
    return obj
}
console.log(arr8.map(arrWithType))

// Given an array of objects.
// **Question:**
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.
const inventory = [{
        name: 'fans',
        quantity: 3
    },
    {
        name: 'chimneys',
        quantity: 0
    },
    {
        name: 'bulbs',
        quantity: 5
    },
    {
        name: 'stove',
        quantity: 1
    }
];
const lessThanTwo = num => num.quantity < 2
console.log(inventory.filter(lessThanTwo))

const totalQuantity = (initial, current) => current.quantity + initial
console.log(inventory.reduce(totalQuantity, 0))

const quantityZero = num => num.quantity === 0
console.log(inventory.find(quantityZero))

// Given an array. Write a function to join all elements of the array with a hyphen in between them.
// Your output should be: Violet - Indigo - Blue - Green - Yellow - Orange - Red
const arr9 = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
console.log(arr9.join('-'))

// Write a function that accepts a number as input and inserts hyphens between every two even numbers.
// Your output should be: 2 - 23456 - 87
const numberArr = 24345687
const hyphenBetweenEven = num => [...String(num)]
    .reduce((initial, current) =>
        initial.slice(-1)[0] % 2 === 0 && current % 2 === 0 ? [...initial, "-", current] : [...initial, current], [])
    .join('')
console.log(hyphenBetweenEven(numberArr))

// Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())
// If your input is: "neogrammer"      If your input is: "neoG"
// Your output should be: "NEOGRAMMER"      Your output should be: "NEOG"
const str = "neogrammer"
const splitStr = str.split("")
const upperCase = str => str.toUpperCase()
console.log(splitStr.map(upperCase).join(''))

const input = [1, [2, [3, 4], 5], 6]

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) :
        arr.slice();
};

console.log(flatDeep(input, Infinity))
// [1, 2, 3, 4, 5, 6]