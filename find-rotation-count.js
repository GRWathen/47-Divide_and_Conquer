function findRotationCount(array) {
    let loIdx = 0;
    let hiIdx = array.length - 1;

    while (loIdx <= hiIdx) {
        let midIdx = Math.floor((loIdx + hiIdx) / 2);
        let midVal = array[midIdx];

        if (midVal < array[hiIdx]) {
            hiIdx = midIdx;
        }
        else {
            loIdx = midIdx + 1;
        }
    }
    return (hiIdx);
}

/*/
console.log(findRotationCount([1, 2, 3, 4, 5])); // 0
console.log(findRotationCount([5, 1, 2, 3, 4])); // 1
console.log(findRotationCount([4, 5, 1, 2, 3])); // 2
console.log(findRotationCount([3, 4, 5, 1, 2])); // 3
console.log(findRotationCount([2, 3, 4, 5, 1])); // 4
console.log();
console.log(findRotationCount([1, 2, 3, 4])); // 0
console.log(findRotationCount([4, 1, 2, 3])); // 1
console.log(findRotationCount([3, 4, 1, 2])); // 2
console.log(findRotationCount([2, 3, 4, 1])); // 3
console.log();
console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0
//*/

module.exports = findRotationCount
