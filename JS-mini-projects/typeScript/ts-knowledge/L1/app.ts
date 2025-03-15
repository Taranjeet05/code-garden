function add(num1 : number, num2 : number, printResult : boolean, goodText : string, badText: string) {
  if (printResult === true) {
    alert(goodText);
    return num1 + num2;
  } else {
    alert(badText)
    return badText
  }
}

const n1 = 54; // number
const n2 = 54; // number

const printResult = true;
const goodText = 'We let you see the result check console ✅'
const badText = 'We are not let you see the result because your result is false.❌'
const ans = add(n1, n2, printResult, goodText , badText);

console.log(ans);
