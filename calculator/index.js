const display=getElementById(displayBtn);
document.getElementById("eightBtn").onclick = function(){ document.getElementById(displayBtn).textContent ="8"
}
function animateDisplay() {
    display.style.transform = "scale(1.05)";
    setTimeout(() => {
        display.style.transform = "scale(1)";
    }, 100);
}