
const palindromes = (str) => str.split('').reverse().join('') == str
    console.log(palindromes("salas"));
    console.log(palindromes("perro"));


module.exports = palindromes
