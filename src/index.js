module.exports = function reverse (n) {
let num = Math.abs(n);
return num.toString().split('').reverse().join('');
//< 0 ? (n * -1) : (n * 1);  
}

    