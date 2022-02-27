// Code your solutions in this file

function countDown(num) {
    while (num >= 0) {
       console.log(num);
       num --;
    }
}

const newArray = [];

function writeCards(array, eventName) {
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
};