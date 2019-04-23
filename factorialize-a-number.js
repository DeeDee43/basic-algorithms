function factorialize(num) {
  let i = 1;
  let factorial = 1;
  if(num == 0){
    return factorial;
  }else{
    while( i <= num){
      factorial *= i;
      i++;
    }
    return factorial;
  }
}

factorialize(0);

//test numbers: 5 returns 120, 10 returns 3628800, 20 returns 2432902008176640000, 0 returns 1
