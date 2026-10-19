const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".input")


for (let btn of btns) {
    btn.addEventListener("click", () => {
        if (btn.innerText === "=") {
            display.value = eval(display.value);
        } else if (btn.innerText === "⌫") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value = display.value + btn.innerText;
        }
    });
}

