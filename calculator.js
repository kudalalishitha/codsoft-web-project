// Function to perform the calculations
function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers!";
        return;
    }

    var calculationResult;

    // Perform the chosen operation
    if (operation === "add") {
        calculationResult = num1 + num2;
    } else if (operation === "subtract") {
        calculationResult = num1 - num2;
    } else if (operation === "multiply") {
        calculationResult = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            result.textContent = "Cannot divide by zero!";
            return;
        }
        calculationResult = num1 / num2;
    }

    // Display the result
    result.textContent = calculationResult.toFixed(2);
}
