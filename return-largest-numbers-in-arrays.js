function largestOfFour(arr) {
  var largest;
  var largestArr =[];
  for(var i=0; i< arr.length; i++){
    //console.log(i + ' ' + arr[i]);
    largest = arr[i][0];
    for(var j=0; j< arr[i].length; j++){
      //console.log(j + \" \"+ arr[i][j]);
      if(arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
    largestArr.push(largest);
    largest = 0;
    //console.log(largestArr)
  }
  //console.log(largestArr);
  return largestArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);"}


/*
Test arrays:
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001]

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3]
 */
