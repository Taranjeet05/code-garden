function add(num1, num2, printResult, goodText, badText) {
    if (printResult === true) {
        alert(goodText);
        return num1 + num2;
    }
    else {
        alert(badText);
        return badText;
    }
}
var n1 = 54; // number
var n2 = 54; // number
var printResult = true;
var goodText = 'We let you see the result check console ✅';
var badText = 'We are not let you see the result because your result is false.❌';
var ans = add(n1, n2, printResult, goodText, badText);
console.log(ans);
