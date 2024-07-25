
import Book from "../Book/Book";
import { useEffect, useState } from "react";


const Books = () => {
 const [books , setBooks] = useState([])

 useEffect(()=>{
  fetch('bookshop.json')
  .then(res => res.json())
  .then(data => setBooks(data))
 },[])
  return (
    <div>
      <h2 className="flex justify-center mt-12 font-bold text-3xl">Books</h2>

      <div className="grid md:grid-cols-3 gap-5  w-[1200px] mx-auto mt-5">
      {
        books.map(book => <Book book={book} key={book.bookId}></Book>)
      }
      </div>
    </div>
  );
};

export default Books;