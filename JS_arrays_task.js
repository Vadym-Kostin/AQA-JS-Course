/*
1. Написати функцію, яка перетворює строку на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */

const str = "Це довільний текст для створення масиву слів ";
function stringToArray(str) {
    return str.trimEnd().toLowerCase().split(" ").sort();
}

console.log(stringToArray(str));// виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */

const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
    const unique = initialArray.filter((x, i) => initialArray.indexOf(x) === i);
    const sorted = unique.sort((a, b) => a - b);
    return sorted;
}

console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]

/*
3. Написати функцію, яка поверне масив парних чисел
 */

const initialArray2 = [2, 3, 6, 7, 9, 12];
function arrayOfEvens(arr) {
    const evenNumbers = initialArray2.filter((number) => number % 2 === 0);
    return evenNumbers;
}

console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]

/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */

function createArray(element) {
    const result = [];
    for (let i = element; i <= 30; i += element) {
        result.push(i);
    }
    return result;
}

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]