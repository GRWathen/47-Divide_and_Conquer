function findFloor(array, value) {
    let loIdx = 0;
    let hiIdx = array.length - 1;
    let midIdx;

    while (loIdx <= hiIdx) {
        midIdx = Math.floor((loIdx + hiIdx) / 2);
        let midVal = array[midIdx];

        if (midVal > value) {
            hiIdx = midIdx - 1;
        }
        else if (midVal < value) {
            loIdx = midIdx + 1;
        }
        else {
            return (midVal);
        }
    }

    if (array[hiIdx] === undefined) {
        return (-1);
    }
    return (array[hiIdx]);
}

module.exports = findFloor
