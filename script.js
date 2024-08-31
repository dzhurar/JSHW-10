'use strict'


// 1
const applyCallbackToEachElement = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i])); 
    }
    return newArr;
}  
const arr = [1, 2, 3, 4, 5];  
const squareCallback = (number) => Math.pow(number, 2);  
const result = applyCallbackToEachElement(arr, squareCallback);  
console.log(result); // [1, 4, 9, 16, 25]



// 2
const calculateDiscountedPrice = (price, discount, callback) => {
    const result = price - (price * discount / 100);
    callback(result)
};  
const showDiscountedPrice = (result) => console.log(`Discounted price: ${result}`);  
calculateDiscountedPrice(400, 10, showDiscountedPrice); // Discounted price: 90