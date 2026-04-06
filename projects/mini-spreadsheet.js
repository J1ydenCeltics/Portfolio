/**
 * Mini Spreadsheet JS
 * Handles sum and average calculations for mini-spreadsheet.html
 */

(function() {
    const sumBtn = document.getElementById('sum-btn');
    const avgBtn = document.getElementById('avg-btn');
    const resultDisplay = document.getElementById('result');

    function getAllValues() {
        const inputs = document.querySelectorAll('#spreadsheet input');
        return Array.from(inputs).map(input => Number(input.value) || 0);
    }

    sumBtn.addEventListener('click', () => {
        const values = getAllValues();
        const sum = values.reduce((acc, val) => acc + val, 0);
        resultDisplay.textContent = "Sum: " + sum;
    });

    avgBtn.addEventListener('click', () => {
        const values = getAllValues();
        const avg = values.reduce((acc, val) => acc + val, 0) / values.length;
        resultDisplay.textContent = "Average: " + avg.toFixed(2);
    });
})();
