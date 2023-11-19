function controlLED(estado) {
    // Enviar el estado al ESP32 mediante una solicitud HTTP
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.24/led?estado=" + estado, true);
    xhr.send();
}
