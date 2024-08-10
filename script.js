document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector('.grid-container');
    const rows = 8; // Number of rows
    const cols = 8; // Number of columns

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            ball.style.backgroundColor = getRandomColor();
            
            // Add a margin-left for odd rows to create the staggered effect
            if (i % 2 !== 0 && j === 0) {
                ball.style.marginLeft = "25px"; // Adjust this value according to ball size
            }
            
            gridContainer.appendChild(ball);
        }
    }
});
