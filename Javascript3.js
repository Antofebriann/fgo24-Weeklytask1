const printSquare = (num) => {
    for (let i = 1; i <= num; i++) {
      let line = "";
      for (let j = 1; j <= num; j++) {
        line += j + " ";
      }
      console.log(line);
    }
  };
  
  printSquare(3);
  printSquare(5);
  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combine = [...arr1, ...arr2];
  console.log(combine);
  