function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatStr = "";
  if(num >= 0){
    while(num > 0){
      repeatStr += str;
      num--;
    }
    //console.log(repeatStr)
  }else{
    return "";
  }
    return repeatStr;
  }
  repeatStringNumTimes("abc", 3);

/*
Test strings:
"*", 3 returns "***".
"abc", 3 returns "abcabcabc".
"abc", 4 returns "abcabcabcabc".
"abc", 1 returns "abc".
"*", 8 returns "********".
"abc", -2 returns "".
*/
