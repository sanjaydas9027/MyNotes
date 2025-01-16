// Reverse characters of a string without changing the position of non-alphabetic elements
function reversePreserveNonAlpha() {
  let str = "a@b#c";
  let length = str.length;
  let i = 0;
  let rev = "";
  let l=length-1;
  while (i < length) {
    let char = str.charAt(i);
    if (!(/[a-zA-Z]/.test(char))) {
        rev = rev + str.charAt(i);
    
    }else{
        rev = rev + str.charAt(l);
    }

    // console.log(char, " :-: ");
    l--;
    i++;
  }
  console.log("Reverse: ", rev);
}

// Example usage:
reversePreserveNonAlpha(); // Output: c@b%a
