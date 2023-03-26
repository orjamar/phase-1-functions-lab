// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;  
  } else {
    return 42 - distance;
  }
}

const block = 264;

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * block;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
      return (destination-start) * block;
    } else {
        return (start-destination) * block;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance<400) {
        return 0;
    } else if (distance<=2000) {
        return ((distance-400) * 0.02);
    } else if (distance<=2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}