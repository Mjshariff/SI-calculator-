function updateRate() {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function compute() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);
    
    if (principal <= 0 || isNaN(principal)) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    const interest = (principal * rate * years) / 100;
    const amount = principal + interest;
    const year = new Date().getFullYear() + years;

    const result = document.getElementById("result");
    result.innerHTML = `If you deposit <mark>$${principal}</mark>,<br>
                        at an interest rate of <mark>${rate}%</mark>.<br>
                        You will receive an amount of <mark>$${interest}</mark>,<br>
                        in the year <mark>${year}</mark><br>`;
}
function updateRate() {
    const rateVal = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateVal + '%';
}

function compute() {
    // Get values from input fields
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);

    // Validate inputs
    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number for the principal amount.");
        return;
    }
    
    if (isNaN(years) || years <= 0) {
        alert("Enter a positive number for the number of years.");
        return;
    }

    // Calculate simple interest
    const interest = (principal * rate * years) / 100;

    // Display the result
    document.getElementById('result').innerText = interest.toFixed(2);
}
