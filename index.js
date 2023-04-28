// Code your solution in this file!
const d = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(d) {
    return ( [d[0], d[1]]);
}
console.log(returnFirstTwoDrivers(d));
returnFirstTwoDrivers(d);

 
const returnLastTwoDrivers = function(d) {
    return ( [d[2], d[3]]);
}
console.log(returnLastTwoDrivers(d));
returnLastTwoDrivers(d);

 
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
//let firstTwoDriver = selectingDrivers[0];
//let lastTwoDriver = selectingDrivers[1];
//console.log(firstTwoDriver);
//console.log(lastTwoDriver);

function createFareMultiplier(fareMultiplier) {
    return function fareQuadloper(fare){
        return fare*fareMultiplier;
    };
}
let f = 50;
fareQuadloper = createFareMultiplier(4);
console.log(fareQuadloper(f));

let g = 100;
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(g));

let h = 200;
const fareTripler = createFareMultiplier(3);
console.log(fareTripler(h));

function selectDifferentDrivers(d, functionName) {
    return functionName(d);
}