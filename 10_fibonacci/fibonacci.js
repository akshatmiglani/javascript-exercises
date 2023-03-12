const fibonacci = function(n) {
    if(n<0)return "OOPS"
    if(n===0)return 0
    let n1=0;
    let n2=1;
    for (let i = 1; i < n; i++) {
        const temp = n2;
        n2 = n1 + n2;
        n1 = temp;
      }
      return n2;
};

// Do not edit below this line
module.exports = fibonacci;
