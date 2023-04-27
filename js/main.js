let cellContainer = document.getElementById("grid");
let startBtn = document.getElementById("start");
let cellNumber = 49;


function difficultySelect(value) {

    cellNumber = value;
}

startBtn.addEventListener("click", function () {

    cellContainer.innerHTML = "";

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
        

        let bomb = getBombNumber(cellNumber);


        getBombNumber(cellNumber);

        if (bomb == cell.innerText) {
            cell.addEventListener("click", function () {
                this.classList.toggle("bckgRed");
            })
        } else {
            cell.addEventListener("click", function () {
                this.classList.toggle("bckgBlue");
                console.log(this.innerText);
            })
        }

        cellContainer.appendChild(cell);
    }


})

function getBombNumber(cellNumber) {

    let bomb;

    for (let i = 1; i <= 16; i++) {

        bomb = (Math.floor(Math.random() * cellNumber));
        console.log(bomb);
        
    }
    
    return bomb;
}
