// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
    
}

function distanceTravelledInFeet(start, destination) {
return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    if(distanceInFeet <= 400) {
        return 0
    } else
    if( distanceInFeet > 400 && distanceInFeet < 2000){
        return (distanceInFeet - 400) * 0.02
    } else
    if(distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25
    }
    else{
       return 'cannot travel that far'}
}
