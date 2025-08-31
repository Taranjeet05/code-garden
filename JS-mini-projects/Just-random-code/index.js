function accum(s) {
  return s
    .split("")
    .map((ch, i) => ch.toUpperCase() + ch.toLowerCase().repeat(i))
    .join("-");
}

// quick checks
console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"
