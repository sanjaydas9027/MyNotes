// Exception handling with try..catch..finally
try {
    const num = parseInt("invalid");
    if (isNaN(num)) throw new Error("Not a number");
    console.log(num);
} catch (err) {
    console.error("Error:", err.message);
} finally {
    console.log("Execution completed");
}