module.exports = function toReadable(number) {
    let nums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numSliced = nums[number.toString().slice(-1)];
    let tensSliced = tens[number.toString().slice(0, 1) - 2];
    let firstInHundreds = nums[number.toString().slice(0, 1)];
    let tensInHundreds = tens[number.toString().slice(1, 2) - 2];
    let secondinHundreds = number.toString().slice(1, 2);
    let lastTwoDigitsInHundreds = nums[number.toString().slice(1, 3)];
    let lastTwoInHundreds = number.toString().slice(1, 3);
    let lastinHundreds = number.toString().slice(-1);

    console.log(number.toString().slice(1, 2));

    if (number < 20) {
        return nums[number];
    } else if (number < 100) {
        if (number % 10 === 0) {
            return tensSliced;
        } else {
            return `${tensSliced} ${numSliced}`;
        }
    } else if (number >= 100) {
        if (lastTwoInHundreds != "00") {
            if (secondinHundreds === "0") {
                return `${firstInHundreds} hundred ${numSliced}`;
            } else if (secondinHundreds === "1") {
                return `${firstInHundreds} hundred ${lastTwoDigitsInHundreds}`;
            } else {
                if (lastinHundreds === "0") {
                    return `${firstInHundreds} hundred ${tensInHundreds}`;
                } else {
                    return `${firstInHundreds} hundred ${tensInHundreds} ${numSliced}`;
                }
            }
        } else if (lastTwoInHundreds === "00") {
            return `${firstInHundreds} hundred`;
        }
    }
};
