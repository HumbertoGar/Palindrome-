const palindromes = function(str = "") {
   

        let strInver = "";
        let strLong = str.length;
        
       for (let i = 0; i < str.length; i++) {
           
        while(strLong >= 0)
        {
            strInver = strInver + str.charAt(strLong);
            strLong--;
        }
    }
    console.log(strInver);
    
       if (strInver.toLowerCase === str.toLowerCase) {
           return true;
       }else {
           return false;
       }
    }
    
    console.log(palindromoFunc("salas"));



module.exports = palindromes
