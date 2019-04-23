function findLongestWordLength(str) {
  var words = str.split(' ');
  var longest = 0;
  for(var i = 0; i < words.length; i++){
    if(words[i].length > longest){
      longest = words[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*
Test strings:
"The  quick brown fox jumped over the lazy dog" returns 6
"May the force be with you" returns 5
"Google do a barrel roll" returns 6
"What is the  average airspeed velocity of an unladen swallow" returns 8
"What if we try a super-long word such as otorhinolaryngology" returns 19
 */
