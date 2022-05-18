// do not edit this section
const book = {
  name: 'Clean Code',
  author: 'Robert C. Martin',
  category: 'Cooking',
  isbn: {
    isbn10: '9780132350884',
    asin: '0132350882'
  },
  publisher: 'Prentice Hall',
  dimensions: '10x12x2'
}

const isbn13 = '978-0132350884'

// TODO: write code in this section to pass the tests. You will need to add new code
// as well as modify some of the existing code

// Set this to the book name
const name = book.name

// Set this to the isbn 10 value
const isbn10 = book.isbn.isbn10

// this may not be necessary but I assume that's why the isbn13 value is up there
book.isbn.isbn13 = isbn13

//changing cooking to equal programming
book.category = 'Programming'

//changing book pages to = 464
book.pages = 464

//book not containing dimensions key
book.dimensions = undefined

//book not containing asin key
delete book.isbn.asin
// Do not edit this exported object
module.exports = {
  name: name,
  isbn10: isbn10,
  book: book
}
