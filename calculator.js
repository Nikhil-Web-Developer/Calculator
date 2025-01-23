// Get elements
const display = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let expression = "";

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        switch (value) {
            case 'AC':
                expression = "";  // Clear the display
                display.value = expression;
                break;
            case 'Del':
                expression = expression.slice(0, -1);  // Delete the last character
                display.value = expression || "0";
                break;
            case '=':
                try {
                    // Evaluate the expression
                    expression = eval(expression);
                    display.value = expression;
                } catch {
                    display.value = "Error";  // Handle invalid expressions
                    expression = "";
                }
                break;
            default:
                expression += value;  // Add the value to the expression
                display.value = expression;
        }
    });
});
