let binary = Array(32).fill(0);

    function toggleBit(event) {
        const index = event.target.getAttribute('data-index');
        binary[index] = binary[index] === 0 ? 1 : 0;
        event.target.textContent = binary[index];
    }

    function binaryToDecimal(binaryArray) {
        let binaryStr = binaryArray.join('');
        let int = parseInt(binaryStr, 2);
        let sign = (int >> 31) === 0 ? 1 : -1;
        let exponent = ((int >> 23) & 0xff) - 127;
        let mantissa = (int & 0x7fffff) | 0x800000;
        return sign * mantissa * Math.pow(2, exponent - 23);
    }

    document.querySelectorAll('.binary-button').forEach(button => {
        button.addEventListener('click', toggleBit);
      button.addEventListener('click', update);
    });

    function update() {
        const decimal = binaryToDecimal(binary);
        document.getElementById('result').textContent = decimal.toLocaleString('fullwide', {useGrouping: false});;
    };
