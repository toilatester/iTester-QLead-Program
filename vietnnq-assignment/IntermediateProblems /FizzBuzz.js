const inputLimit = 15;
function divisibilityFizzBuzz(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Fizz&&Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i + " Does not match with condition");
        }
    }
}

divisibilityFizzBuzz(inputLimit);