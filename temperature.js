// Function to convert temperature
function convertTemperature() {
    var temperature = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("converted-result");

    // Check if the temperature field is not empty
    if (temperature === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    // Convert based on selected unit
    if (unit === "celsius") {
        // Celsius to Fahrenheit
        var fahrenheit = (temperature * 9/5) + 32;
        result.textContent = fahrenheit.toFixed(2) + " °F";
    } else if (unit === "fahrenheit") {
        // Fahrenheit to Celsius
        var celsius = (temperature - 32) * 5/9;
        result.textContent = celsius.toFixed(2) + " °C";
    }
}
