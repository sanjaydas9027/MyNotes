// Remove junk characters from a string
function removeJunk(str) {
    
    return str.replace(/[^a-zA-Z0-9 ]/g, "");
}
console.log(removeJunk("hello@@#$ wor@ld!"));

/**
 * Notes:
 * /[^a-zA-Z0-9 ]/g: This regular expression matches any character that is not (the ^ negates the pattern) a letter (a-zA-Z), 
 * a digit (0-9), or a space.
 * The g flag ensures that the replacement is done globally (throughout the entire string).
 */