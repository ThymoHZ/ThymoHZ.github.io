// Get reference to our Elmements
let number = document.getElementById('number');
let counter = 0;

setInterval(() => {
    if (counter == 50) {
        clearInterval;
    } else {
    counter += 1;
    number.innerHTML = `${counter}%`;
    }
}, 30);