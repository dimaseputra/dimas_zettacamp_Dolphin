let listOfBooks = [
  {
    nameOfBook: 'Perihal Gendis',
    author: 'Sapardi',
    priceOfBook: 95000,
    percentageDiscount: 20,
    percentageTax: 5,
    stock: 5,
  },
  {
    nameOfBook: 'Laskar Pelangi',
    author: 'Sapardi',
    priceOfBook: 80000,
    percentageDiscount: 10,
    percentageTax: 3,
    stock: 14,
  },
];

// listOfBooks.push({
//   nameOfBook: 'Trik Jitu UTBK',
//   author: 'Anonim',
//   priceOfBook: 900000,
//   percentageDiscount: 10,
//   percentageTax: 3,
//   stock: 2,
// });

function purchasing(book, purchasedAmount, creditPerMonth) {
  console.log('');
  const percent = 100;
  let totalDiscount = 0;
  let discountOfBooks = 0;
  let totalTax = 0;
  let taxOfBooks = 0;

  if (book.percentageDiscount > 0) {
    totalDiscount = (book.percentageDiscount / percent) * book.priceOfBook;
    console.log(`Discount ${book.percentageDiscount}% And Total Discount : ${totalDiscount} `);
    discountOfBooks = book.priceOfBook - totalDiscount;
    console.log(`Total After Discount : ${discountOfBooks}`);
  } else {
    percentageDiscount = 0;
    discountOfBooks = book.priceOfBook;
    console.log(`you don't get a discount`);
    console.log(`Total After Discount : ${discountOfBooks}`);
  }
  console.log('');
  if (book.percentageTax > 0) {
    totalTax = (book.percentageTax / percent) * book.priceOfBook;
    console.log(`Tax : ${book.percentageTax}% and Amount Tax : ${totalTax}`);
    taxOfBooks = book.priceOfBook + totalTax;
    console.log(`Total After Tax : ${taxOfBooks}`);
  } else {
    percentageTax = 0;
    taxOfBooks = 0;
    console.log(`you don't get a Tax`);
    console.log(`Total After Tax : ${taxOfBooks}`);
  }
  let stockBook = book.stock;
  const priceAfterTaxAndDiscound = totalTax + discountOfBooks;
  let totalPrice = 0;
  // console.log(stock);
  for (let i = 0; i < purchasedAmount; i++) {
    if (book.stock > 0) {
      totalPrice += priceAfterTaxAndDiscound;
      // console.log(book.stock);
      book.stock--;
    } else {
      // console.log('ss');
      break;
    }
  }
  console.log('');

  const currentDate = new Date();

  let dueDates = [];
  for (let i = 1; i <= creditPerMonth; i++) {
    let dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, currentDate.getDate());
    dueDates.push(dueDate.toLocaleDateString());
    // console.log(typeof Date);
  }
  const loanInterest = 500;

  let creditPrice = totalPrice / dueDates.length;
  for (i = 0; i < creditPerMonth; i++) {
    creditPrice += loanInterest;
  }

  console.log('');

  console.log(`Title Of Book : ${book.nameOfBook}`);
  console.log(`Author Of Book : ${book.author}`);
  console.log(`Stock Of Book : ${stockBook}`);
  console.log(`Remaining Stock : ${book.stock}`);
  console.log(`purchased amount : ${purchasedAmount} `);
  console.log(`Original Price : ${book.priceOfBook}`);
  console.log(`Price After Tax And Discount : ${priceAfterTaxAndDiscound}`);
  console.log(`Total Price : ${totalPrice}`);
  console.log(`Total Credit : ${creditPerMonth} Month`);
  if (creditPerMonth > 0)
    console.log(`Due Dates : ${creditPerMonth === 1 ? dueDates.slice(-1) : dueDates[0] + ' - ' + dueDates.slice(-1)}`); //[dueDates.length - 1]
  if (creditPerMonth > 1) console.log('Due Dates Details :');
  dueDates.forEach((dueDate) => {
    console.log(dueDate);
  });

  if (creditPerMonth > 0) console.log(`Total Price Per Month : ${Math.round(creditPrice)}`);

  if (book.stock > 0) console.log(`you can order ${book.stock} book more`);
  else console.log(`out of stock, you can't buy any more`);
  console.log('');
}

purchasing(listOfBooks[0], 3, 5);
//console.log(listOfBooks);
