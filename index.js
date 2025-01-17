let homeSum = 0
let awaySum = 0
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

function homeAddOne() {
    homeSum += 1
    homeScore.textContent = homeSum
}

function homeAddTwo() {
    homeSum += 2
    homeScore.textContent = homeSum
}

function homeAddThree() {
    homeSum += 3
    homeScore.textContent = homeSum
}

function awayAddOne() {
    awaySum += 1
    awayScore.textContent = awaySum
}

function awayAddTwo() {
    awaySum += 2
    awayScore.textContent = awaySum
}

function awayAddThree() {
    awaySum += 3
    awayScore.textContent = awaySum
}