const container = document.getElementById('number-container');
let currentNumber = 1;

function addNumbers() {
    for (let i = 0; i < 50; i++) {
        const numberElement = document.createElement('div');
        numberElement.textContent = "1"+"0".repeat(currentNumber);
        container.appendChild(numberElement);
        currentNumber++;
    }
}

function onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        addNumbers();
    }
}

// Initial load
addNumbers();

// Event listener for scrolling
window.addEventListener('scroll', onScroll);
