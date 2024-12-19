let currentInput = "";  // Variable to store the current input on the display

// Function to handle button press
function pressButton(value) {
    currentInput += value;  // Append the pressed value to the current input
    document.getElementById('display').value = currentInput;  // Update the display
}

// Function to calculate the expression when '=' is pressed
function calculate() {
    try {
        // Evaluate the expression and display the result
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        // If there's an error (invalid input), display an error message
        document.getElementById('display').value = "Error";
        currentInput = "";  // Reset the input after error
    }
}

// Function to clear the display when 'C' is pressed
function clearDisplay() {
    currentInput = "";  // Clear the current input
    document.getElementById('display').value = "";  // Update the display
}

// Add event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Number and operator keys
    if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        pressButton(key);
    }

    // Calculate the expression when 'Enter' is pressed
    if (key === 'Enter') {
        calculate();
    }

    // Clear the display when 'C' or 'Escape' is pressed
    if (key === 'C' || key === 'Escape') {
        clearDisplay();
    }

    // Handle backspace to remove the last character
    if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);  // Remove the last character
        document.getElementById('display').value = currentInput;  // Update the display
    }
});
