function updateUnixTime() {
    const unixTimeElement = document.getElementById('unixTime');
            unixTimeElement.textContent = Math.floor(Date.now() / 1000);
        }

        setInterval(updateUnixTime, 1000);
        updateUnixTime();