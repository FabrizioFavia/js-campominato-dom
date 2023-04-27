let cellContainer = document.getElementById("grid");
let startBtn = document.getElementById("start");
let cellNumber = 49;
let points = 0;


function difficultySelect(value) {

    cellNumber = value;
}

startBtn.addEventListener("click", function () {

    cellContainer.innerHTML = "";
    points = 0;
    let bombArray = [];
    bombArray = getBombNumber(cellNumber);
    console.log(bombArray);

    for (let i = 1; i <= cellNumber; i++) {

        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (cellNumber == 49) {
            cell.classList.add("easyCell");
        }

        if (cellNumber == 81) {
            cell.classList.add("mediumCell");
        }

        if (cellNumber == 100) {
            cell.classList.add("hardCell");
        }

        cell.append(i);

        if (bombArray.includes(parseInt(cell.innerText))) {
            cell.addEventListener("click", function () {
                this.classList.toggle("bckgRed");
                console.log(`Hai perso, il tuo punteggio è ${points}`);
                let cells = document.getElementsByClassName("cell");

                for (let i = 0; i < cells.length; i++) {
                    cells[i].classList.add("disable");
                    
                }
            })
        } else {
            cell.addEventListener("click", function () {
                this.classList.toggle("bckgBlue");
                points += 1;
                console.log(points);
            })
        }

        cellContainer.appendChild(cell);
    }


})

function getBombNumber(cellNumber) {
    let bombArray = [];
    let bomb;

    while (bombArray.length < 16) {

        bomb = (Math.floor(Math.random() * cellNumber));

        if (bombArray.includes(bomb) == false) {
            bombArray.push(bomb);
        }

    }

    return bombArray;
}
