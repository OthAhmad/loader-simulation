var simulateProgress = require('simulate-progress');
var loaderElement = document.querySelector('.loader');
var precentage = document.querySelector('.progress');
function progressCallback(percent) {

precentage.style.width = 'percent';
}

function finishCallback(){

  loaderElement.classList.add('finished');

}
function startSimulation(){

 loaderElement.classList.remove('loader');

simulateProgress(progressCallback, finishCallback);
}

startSimulation();