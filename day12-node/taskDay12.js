function purchasing(nameOfBook, PriceOfBook, percentageTax, percentageDiscount, stock, purchasedAmount) {
  console.log('');
  const percent = 100;
  let totalDiscount = 0;
  let discountOfBooks = 0;
  let totalTax = 0;
  let taxOfBooks = 0;
  if (purchasedAmount <= stock && stock > 0) {
    if (percentageDiscount > 0) {
      totalDiscount = (percentageDiscount / percent) * PriceOfBook;
      console.log(`Discount ${percentageDiscount}% And Total Discount : ${totalDiscount} `);
      discountOfBooks = PriceOfBook - totalDiscount;
      console.log(`Total After Discount : ${discountOfBooks}`);
    } else {
      percentageDiscount = 0;
      discountOfBooks = PriceOfBook;
      console.log(`you don't get a discount`);
      console.log(`Total After Discount : ${discountOfBooks}`);
    }
    console.log('');
    if (percentageTax > 0) {
      totalTax = (percentageTax / percent) * PriceOfBook;
      console.log(`Tax : ${percentageTax}% and Amount Tax : ${totalTax}`);
      taxOfBooks = PriceOfBook + totalTax;
      console.log(`Total After Tax : ${taxOfBooks}`);
    } else {
      percentageTax = 0;
      taxOfBooks = 0;
      console.log(`you don't get a Tax`);
      console.log(`Total After Tax : ${taxOfBooks}`);
    }
    const priceAfterTaxAndDiscound = totalTax + discountOfBooks;
    let totalPrice = 0;
    for (let i = 0; i < purchasedAmount; i++) {
      if (stock > 0) {
        totalPrice += priceAfterTaxAndDiscound;
        stock--;
      } else {
        break;
      }
    }
    console.log('');
    const stockBook = stock + purchasedAmount;
    console.log(`Title Of Book : ${nameOfBook}`);
    console.log(`Stock Of Book : ${stockBook}`);
    console.log(`purchased amount : ${purchasedAmount} `);
    console.log(`Original Price : ${PriceOfBook}`);
    console.log(`Total Price : ${totalPrice}`);
  } else {
    console.log(`Title Of Book : ${nameOfBook}`);
    console.log(`Original Price : ${PriceOfBook}`);
    console.log(`Stock Of Book : ${stock}`);
    if (purchasedAmount > stock) {
      console.log('out of stock');
      console.log(`Max of Books You Can Buy : ${stock}`);
    }
  }

  console.log('');

  //divider
}

purchasing('perihal gendis', 200000, 3, 10, 4, 4);
