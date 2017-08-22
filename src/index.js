var simulateProgress = require('simulate-progress');
var loaderElement = document.querySelector('.loader');
var precentage;
var buttons = document.querySelectorAll('button');
function progressCallback(percent) {

  precentage.style.width = percent + '%';

}

function finishCallback(){

  precentage.classList.add('finished');

}

function startSimulation(){

  precentage.classList.remove('finished');

  simulateProgress(progressCallback, finishCallback);

}

buttons.forEach(function(button) {

  button.addEventListener('click', function() {

    precentage = this.parentNode.childNodes[1].childNodes[1];
    startSimulation();


  });

});