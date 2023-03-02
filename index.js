// home
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreBtnReset = document.getElementById("home-score-btn-reset")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
// guest
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreBtnReset = document.getElementById("guest-score-btn-reset")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

let allScoreBtnReset = document.getElementById("reset-all-btn")

// home score buttons 

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function homeScoreIncreaseReset(){
    homeScoreEl.textContent = 0
    homeScore = 0
}
// guest score buttons

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function guestScoreIncreaseReset(){
    guestScoreEl.textContent = 0
    guestScore = 0
}

function allScoreReset() {
    homeScoreEl.textContent = 0
    homeScore = 0
    guestScoreEl.textContent = 0
    guestScore = 0
}