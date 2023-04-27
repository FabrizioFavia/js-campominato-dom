let cellContainer = document.getElementById("grid");
let startBtn = document.getElementById("start");
let gridWidth = 49;

function difficultySelect(value) {

    gridWidth = value;
}

startBtn.addEventListener("click", function () {

    cellContainer.innerHTML = "";

    for (let i = 1; i <= gridWidth; i++) {

        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (gridWidth == 49) {
            cell.classList.add("easyCell");
        }

        if (gridWidth == 81) {
            cell.classList.add("mediumCell");
        }

        if (gridWidth == 100) {
            cell.classList.add("hardCell");
        }

        cell.append(i);

        cell.addEventListener("click", function () {
            this.classList.toggle("bckgBlue");
            console.log(this.innerText)
        })

        cellContainer.appendChild(cell);
    }
})
