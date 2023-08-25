// Amount of discount
// Price after discount
// Amount of tax
// Price after tax
function purchasing(nameOfBook, PriceOfBook, percentageTax, percentageDiscount) {
  console.log('');
  const percent = 100;
  console.log(`Title Of Book : ${nameOfBook}`);
  const totalTax = (percentageTax / percent) * PriceOfBook;
  console.log(`Tax : ${percentageTax}% and Amount Tax : ${totalTax}`);
  const taxOfBooks = PriceOfBook + totalTax;
  console.log(`Total After Tax : ${taxOfBooks}`);

  console.log('');

  const totalDiscount = (percentageDiscount / percent) * PriceOfBook;
  console.log(`Discount ${percentageDiscount}% And Total Discount : ${totalDiscount} `);
  const discountOfBooks = PriceOfBook - totalDiscount;
  console.log(`Total After Discount : ${discountOfBooks}`);
  const isDiscountPrice = percentageDiscount > 0 ? true : false;
  console.log('Get a Diskon : ' + isDiscountPrice);

  const totalPrice = taxOfBooks - totalDiscount;
  console.log(`Total Price : ${totalPrice}`);
}

purchasing('perihal gendis', 200000, 5, 20);

//tes arrow func
// const buyBook = (nameOfBook, PriceOfBook, percentageTax, percentageDiscount) => {
//   console.log('');
//   const percent = 100;
//   console.log(`Title Of Book : ${nameOfBook}`);
//   const totalTax = (percentageTax / percent) * PriceOfBook;
//   console.log(`Tax : ${percentageTax}% and Amount Tax : ${totalTax}`);
//   const taxOfBooks = PriceOfBook + totalTax;
//   console.log(`Total After Tax : ${taxOfBooks}`);

//   console.log('');

//   const totalDiscount = (percentageDiscount / percent) * PriceOfBook;
//   console.log(`Discount ${percentageDiscount}% And Total Discount : ${totalDiscount} `);
//   const discountOfBooks = PriceOfBook - totalDiscount;
//   console.log(`Total After Discount : ${discountOfBooks}`);
//   const isDiscountPrice = percentageDiscount > 0 ? true : false;
//   console.log('Get a Diskon : ' + isDiscountPrice);

//   const totalPrice = taxOfBooks - totalDiscount;
//   console.log(`Total Price : ${totalPrice}`);
// };
// buyBook('Laskar Pelangi', 400000, 15, 20);
