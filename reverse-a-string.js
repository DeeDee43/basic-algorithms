function reverseString(str) {
  //create an array
  let arr = [];
  //put string in array in reverse
  for(let i=str.length; i>-1; i--){
    arr.push(str.charAt(i));
  }
  //console.log(arr);
  //create a new string
  let strR = "";
  //build new string from array
  for(let i=0; i<arr.length; i++){
    strR += arr[i];
  }
  return strR;
}
reverseString("hello");

//test words: "hello", "Howdy", "Greetings from Earth"
