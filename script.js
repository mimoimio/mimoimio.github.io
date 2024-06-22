document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const convertBtn = document.getElementById('convertBtn');
    const resultDisplay = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const number = parseInt(numberInput.value);
        if (!isNaN(number)) {
            const binarySteps = [];
            let quotient = number;

            while (quotient > 0) {
                const remainder = quotient % 2;
                binarySteps.push({ quotient, remainder });
                quotient = Math.floor(quotient / 2);
            }

            const binaryResult = binarySteps.reverse().map(step => step.remainder).join('');
            const binaryList = binarySteps.reverse().map((step, index) => {
                return `<li class="binary-step">
                            <span>Step ${index + 1}</span>
                            <span>${step.quotient} ÷ 2 = ${Math.floor(step.quotient / 2)}</span>
                            <span>Remainder = ${step.remainder}</span>
                        </li>`;
            });

            resultDisplay.innerHTML = `<p>Binary Conversion Steps:</p><ul>${binaryList.join('')}</ul><p>Final Binary Result: ${binaryResult}</p>`;
        } else {
            resultDisplay.textContent = 'Please enter a valid number.';
        }
    });
});
