function confirmEnding(str, target) {
//"Never give up and good luck will find you."
// -- Falcor
  //console.log(target.length)
  var ending = str.slice(-target.length)
  //console.log(ending);
  if(ending == target){
    return true;
  }else{
    return false;
  }
}

confirmEnding("Congratulation", "on");

/*
Test strings:
"Bastian", "n" returns true
"Congratulation", "on" returns true
"Connor", "n" returns false
"Walking on water and developing software from a specification are easy if both are frozen", "specification" returns false
"He has to give me a new name", "name" returns true
"Open sesame", "same" returns true
"Open sesame", "pen" returns false
"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain" returns false
"Abstraction", "action" returns true
 */
