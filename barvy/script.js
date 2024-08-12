document.addEventListener('DOMContentLoaded', function () {
    const colorDisplay = document.getElementById('colorDisplay');
    const rgbValuesElement = document.getElementById('rgbValues');
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    redSlider.addEventListener('input', handleSliderInput);
    greenSlider.addEventListener('input', handleSliderInput);
    blueSlider.addEventListener('input', handleSliderInput);
    function handleSliderInput() {
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;
        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        updateColor(color);
        updateRGBValues(redValue, greenValue, blueValue);
    }
    function updateColor(color) {
        colorDisplay.style.backgroundColor = color;
    }
    function updateRGBValues(red, green, blue) {
        rgbValuesElement.textContent = `R G B: ${red}, ${green}, ${blue}`;
    }
});
