const dataElement = document.getElementById("data");
const storedData = localStorage.getItem("userInput");
if (storedData) {
    dataElement.textContent = storedData;
} else {
    dataElement.textContent = "No hay datos disponibles.";
}
