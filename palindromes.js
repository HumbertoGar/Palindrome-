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

    
       if (strInver.toLowerCase === str.toLowerCase) {
           return true;
       }else {
           return false;
       }
    }
    
    console.log(palindromes("salas"));
    console.log(palindromes("perro"));



module.exports = palindromes
