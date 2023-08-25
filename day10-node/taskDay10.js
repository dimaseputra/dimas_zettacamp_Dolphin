// let myFirstFavoriteBook = 'perihal gendis';
// const mySecondFavoriteBook = 'Laskar Pelangi';

// console.log(myFirstFavoriteBook == mySecondFavoriteBook);

// //divider of number two
// console.log('=======');
// const priceOfPerihalGendis = 150000;
// const priceOfLaskarPelangi = 110000;
// console.log(
//   priceOfLaskarPelangi > priceOfPerihalGendis
//     ? `highest price is Laskar Pelangi : ${priceOfLaskarPelangi}`
//     : `highest price is Perihal Gendis : ${priceOfPerihalGendis}`
// );
// const averagePrice = (priceOfLaskarPelangi + priceOfPerihalGendis) / 2;
// console.log(`Average Price of Books : ${averagePrice} `);

// const priceOfBook = averagePrice <= 500000 ? 'Cheap' : 'Expensive';
// console.log(priceOfBook);

// //try to use array
const books = [
  {
    Title: 'Ayat Ayat Cinta',
    Author: 'El Shirazy',
  },
  {
    Title: 'Dilan',
    Author: 'Pidi Baiq',
  },
  {
    Title: 'Masih Ada Hari Esok',
    Author: 'Pipiet Senja',
  },
];
console.log(books[0].Title === books[1].Title);

console.log(books);
books.push({ Title: 'spiderman', Author: 'Marvel', Years: '2001' });
console.log('');
//books[1].Years = 2012;

console.log(books);
const boo = {
  Title: 'Tips Jitu Lolos UTBK',
  Author: 'El Rumi',
};
console.log(boo);
books.push(boo);
//boo.years = 2001;
console.log(books);
