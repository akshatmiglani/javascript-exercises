const palindromes = function (str) {
    let revstr="";
    str.toLowerCase();
    for(let i=str.length-1;i>=0;i--){
        revstr+=str[i];
    }
    if(str === revstr){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
