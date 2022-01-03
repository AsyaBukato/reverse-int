module.exports = function reverse (n) {
    let reverseString = n.toString().split("").reverse().join("");
    return Number.parseInt(reverseString);
}
