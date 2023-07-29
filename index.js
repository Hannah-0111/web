let panel1;
let nTimerID;
let labTotal;
let nTotalMember;

window.onload=function() {
    this.init();
    this.initEventListener();
}
function init() {
    this.panel1 = document.getElementById("panel1");
    this.nTimerID = 0;
    this.labTotal = document.getElementById("lab_total");
    this.nTotalMember = 0;
}
function initEventListener() {
    let btnStart = document.getElementById("btn_start");
    btnStart.addEventListener("click", function() {
        startTimer();
    }, false);
    let btnStop = document.getElementById("btn_stop");
    btnStop.addEventListener("click", function() {
        stopTimer();
    }, false);
}
function startTimer() {
    if(this.nTimerID==0) {
        this.nTotalMember = Number(this.labTotal.value);
        this.nTimerID = setInterval(this.createNumber, 20);
    }
}
function stopTimer() {
    if(this.nTimerID) {
        clearInterval(this.nTimerID)
        this.nTimerID = 0;
        this.showWinner();
    }
}
function createNumber() {
    let nNum = 1+Math.floor(Math.random()*this.nTotalMember);
    this.panel1.innerHTML = nNum;
    this.panel1.style.fontSize = 100+(Math.random()*100)+"px";
}
function showWinner() {
    this.panel1.style.color = "#ff0000";
    this.panel1.style.fontSize = "200px";
}
function resetPanelStyle() {
    this.panel1.style.color = "#000000";
}