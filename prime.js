function Prime(num) {
  let count = 0;
  for (let a=1; a<=num; a++) {
      if(num%a===2) {
          count++;
      }
  } if (count===2) {
      console.log("Prime");
  } else {
      console.log("Not Prime");
  }
}
Prime(17);