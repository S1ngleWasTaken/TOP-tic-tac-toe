
const gameboard = () => {
    const gridSpots = document.querySelectorAll('.grid-spot')
    const restartBtn = document.getElementById('restart-btn')
    let gridSpotValues = ['', '', '', '', '', '', '', '', '']
    let playerSwitcher = 1; // 1 == X | -1 == O
    let playCounter = 0;
    let finished = false;
    const restartGame = () => {
        gridSpotValues = ['', '', '', '', '', '', '', '', '']
        playerSwitcher = 1;
        playCounter = 0;
        finished = false;
        gridSpots.forEach(gridSpot =>{
            gridSpot.textContent = ''
            gridSpot.style.backgroundColor = 'rgb(77, 77, 77)'
        })
        console.log('Game was restarted');
    }
    restartBtn.addEventListener('click', restartGame)
    const checkWin = () => {
        for (let i = 0; i < 9; i += 3) {
            if (gridSpotValues[i] != '' && gridSpotValues[i] == gridSpotValues[i + 1] && gridSpotValues[i + 1] == gridSpotValues[i + 2]) {


                gridSpots[i].style.backgroundColor = 'rgb(102, 102, 102)'
                gridSpots[i + 1].style.backgroundColor = 'rgb(102, 102, 102)'
                gridSpots[i + 2].style.backgroundColor = 'rgb(102, 102, 102)'
                finished = true
            }
        }
        for (let i = 0; i < 3; i++) {
            if (gridSpotValues[i] != '' && gridSpotValues[i] == gridSpotValues[i + 3] && gridSpotValues[i] == gridSpotValues[i + 6]) {
                console.log('pog');
                gridSpots[i].style.backgroundColor = 'rgb(102, 102, 102)'
                gridSpots[i + 3].style.backgroundColor = 'rgb(102, 102, 102)'
                gridSpots[i + 6].style.backgroundColor = 'rgb(102, 102, 102)'
                finished = true
            }
        }
        if ((gridSpotValues[0] != '' && gridSpotValues[0] == gridSpotValues[4] && gridSpotValues[0] == gridSpotValues[8])) {
            console.log('pog');
            gridSpots[0].style.backgroundColor = 'rgb(102, 102, 102)'
            gridSpots[4].style.backgroundColor = 'rgb(102, 102, 102)'
            gridSpots[8].style.backgroundColor = 'rgb(102, 102, 102)'
            finished = true

        } else if (gridSpotValues[2] != '' && gridSpotValues[2] == gridSpotValues[4] && gridSpotValues[2] == gridSpotValues[6]) {
            gridSpots[2].style.backgroundColor = 'rgb(102, 102, 102)'
            gridSpots[4].style.backgroundColor = 'rgb(102, 102, 102)'
            gridSpots[6].style.backgroundColor = 'rgb(102, 102, 102)'
            finished = true
        }

    }

    const playGame = () => {
        gridSpots.forEach(gridSpot => {
            gridSpot.addEventListener('click', function (e) {
                if (playerSwitcher == 1 && this.textContent === '' && finished == false) {
                    this.textContent = 'X'
                    gridSpotValues[this.id] = 'X';
                    playerSwitcher *= -1
                    playCounter++
                    console.log(playCounter);
                    checkWin()
                } else if (playerSwitcher == -1 && this.textContent == '' && finished == false) {
                    this.textContent = 'O'
                    gridSpotValues[this.id] = 'O';
                    playerSwitcher *= -1
                    playCounter++
                    console.log(playCounter);
                    checkWin()
                }
                console.log(gridSpotValues);

            })
        })
    };
    return { playGame }
}



let pog = gameboard()

pog.playGame()

