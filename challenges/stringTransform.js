const reverseString = (str) => {
    return str.split('').reverse().join('');
};

const replaceWithASCII = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) + ' ';
    }
    return result.trim();
};

const transformString = (input) => {
    const length = input.length;
    let result = input;

    // Check if divisible by both 3 and 5
    if (length % 3 === 0 && length % 5 === 0) {
        result = reverseString(result);
        result = replaceWithASCII(result);
    } else {
        // Check if divisible by 3
        if (length % 3 === 0) {
            result = reverseString(result);
        }

        // Check if divisible by 5
        if (length % 5 === 0) {
            result = replaceWithASCII(result);
        }
    }

    return result;
};

// Test the function
const input = "Hello World";
console.log(transformString(input));
