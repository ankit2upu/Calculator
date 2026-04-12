let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        // AC → Clear all
        if (value === "AC") {
            string = "";
            inputBox.value = string;
        }

        // DE → Delete last character
        else if (value === "DE") {
            string = string.slice(0, -1);
            inputBox.value = string;
        }

        // = → Evaluate expression
        else if (value === "=") {
            try {
                string = eval(string).toString();
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        }

        // % → Percentage
        else if (value === "%") {
            try {
                string = (eval(string) / 100).toString();
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        }

        // Default → Numbers & operators
        else {
            string += value;
            inputBox.value = string;
        }
    });
}); 