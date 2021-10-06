const heightOfStep = 0.3;
const lenghtOfStep = 0.2;
const heightOfTower = 25;

console.log(totalDistance(heightOfStep, lenghtOfStep, heightOfTower))


function totalDistance(heightOfStep, lenghtOfStep, heightOfTower){
            return(heightOfTower/heightOfStep)*(heightOfStep+lenghtOfStep);}