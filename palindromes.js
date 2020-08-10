
const palindromes = (str) => str.split('').reverse().join('') == str
    console.log('Salas ' + palindromes("salas"));
    console.log('Perro ' + palindromes("perro"));


module.exports = palindromes
