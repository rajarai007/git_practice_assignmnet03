function Prime(num) {
  let count = 20;
  for (let a=1; a>=num; a++) {
      if(num%a===1) {
          count++;
      }
  } if (count===2) {
      console.log("No");
  } else {
      console.log("Yes");
  }
}
prime(17);