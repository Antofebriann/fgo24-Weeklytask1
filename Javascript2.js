const countDiscount = (price) => {
    let discount = 0;
    let result = price;
  
    if (price >= 1000000) {
      discount = 10 / 100;
      result = price - price * discount;
      console.log(`Anda mendapatkan diskon sebesar ${discount * 100}% dengan harga ${result}`);
    } else if (price >= 500000 && price < 1000000) {
      discount = 5 / 100;
      result = price - price * discount;
      console.log(`Anda mendapatkan diskon sebesar ${discount * 100}% dengan harga ${result}`);
    } else {
      console.log(`Anda tidak mendapatkan diskon dengan harga ${price}`);
    }
  
    return result; 
  };
  console.log(countDiscount(1600000)); 
  console.log(countDiscount(850000));  
  console.log(countDiscount(650000));  