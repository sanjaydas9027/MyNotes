// Reverse words in a sentence

function reverseWords(sentence) {
  // return sentence.split(" ").reverse().join(" "); // Shortcut method
  let words = sentence.split(" ");
  console.log(words);
  let rev = "";
  for (let i = words.length - 1; i >= 0; i--) {
    rev = rev + words[i] + " ";
  }
  return rev;
}
console.log(reverseWords("Hello world from JavaScript"));
