function countZeroes(array) {
    let loIdx = 0;
    let hiIdx = array.length - 1;

    while (loIdx <= hiIdx) {
        let midIdx = Math.floor((loIdx + hiIdx) / 2);
        let val = array[midIdx];

        if (val === 0) {
            if (midIdx === 0) {
                return (array.length - midIdx);
            }
            hiIdx = midIdx - 1;
        } else {
            if (midIdx === (array.length - 1)) {
                return (0);
            }
            loIdx = midIdx + 1;
        }
    }
    return (array.length - loIdx);
}

module.exports = countZeroes
