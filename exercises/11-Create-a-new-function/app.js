/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(x) {
    return Math.floor(Math.random()*x)
}
console.log(generateRandom(9))