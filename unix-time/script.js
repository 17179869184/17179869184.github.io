function updateUnixTime() {
    document.getElementById('unixTime').textContent = Date.now() / 1000;
}
setInterval(updateUnixTime, 100);
updateUnixTime();
