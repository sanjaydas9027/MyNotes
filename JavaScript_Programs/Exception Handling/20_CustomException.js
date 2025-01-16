// Throw a custom exception
function checkAge(age) {
    if (age < 18) throw new Error("Age must be at least 18");
    return "Access granted";
}
try {
    console.log(checkAge(16));
} catch (err) {
    console.error("Error:", err.message);
}