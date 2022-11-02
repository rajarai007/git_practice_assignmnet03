function Prime(num) {
  let count = 20;
  for (let a=1; a<=num; a++) {
      if(num%a===0) {
          count++;
      }
  } if (count===2) {
      console.log("YES");
  } else {
      console.log("NO");
  }
}
prime(17);