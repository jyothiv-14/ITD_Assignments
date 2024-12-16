// 20.  Find the length of the longest substring without repeating characters

let s = 'abcabcbb'
let length = 0;
let start = 0;
let charIndex = {};

for (let end = 0; end < s.length; end++) {
  if (charIndex[s[end]] !== undefined && charIndex[s[end]] >= start) {
    start = charIndex[s[end]] + 1;
  }
  charIndex[s[end]] = end;
  length = Math.max(length, end - start + 1);
}

console.log(length);
