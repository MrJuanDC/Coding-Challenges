function betterThanAverage(classPoints, yourPoints) {
    // the reduced sum of all elements of the array divided by the array lenght is the average
    //compare average to yourPoints number 
    
    // plug numbers into array, 
    // reduce array to 1 number
    // divide the number by the length of the array to get average points.
    // compare average points to your own points and return result
    
    classPoints.push(yourPoints);
    let totalSum = classPoints.reduce((previousValue, currentValue) => previousValue + currentValue,0);
    totalSum = totalSum / classPoints.length
    if (totalSum < yourPoints){
      return true;
    }
    else if (totalSum > yourPoints){
      return false;
    }
  }
  