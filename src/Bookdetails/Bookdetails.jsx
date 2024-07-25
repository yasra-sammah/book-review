import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
  const bookDetails = useLoaderData()
  const {bookId} = useParams()
  const bookDetail = bookDetails.find(bookDetail => bookDetail.bookId === bookId)
  console.log(bookDetail)
  return (
    <div>
      <div className="hero w-[1150px] h-[600px]">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={bookDetail.image}
      className="w-[425px] h-[564px] rounded-lg shadow-2xl bg-slate-100 p-14 mr-10" />
    <div>
      <h1 className="text-5xl font-bold mb-3">{bookDetail.bookName}</h1>
      <p className="font-medium mb-3">By : {bookDetail.author}</p>
      <hr />
      <p className="mt-5 mb-3">{bookDetail.category}</p>
      <hr />
      <p className="mt-5 text-base mb-5">
        <strong>Review: </strong>{bookDetail.review}
      </p>
      <div className="flex justify-start items-center gap-5 py-3 mb-5"><strong>Tags</strong>
      <p className="border py-2 px-5 text-[#23BE0A] font-semibold bg-slate-100 rounded-2xl ">{bookDetail.tags[0]}</p>
      <p className="border py-2 px-5 text-[#23BE0A] font-semibold bg-slate-100 rounded-2xl"> {bookDetail.tags[1]}</p>

      </div>
      <hr />
      <div className="mt-7 mb-6">
        <ul>
          <li  className="flex justify-start gap-14 text-gray-500 mb-3">Number of Pages: <p className="font-bold text-xl text-black">{bookDetail.totalPages}</p></li>
          <li className="flex justify-start gap-28  text-gray-500 mb-2">Publisher: <p className="font-bold text-xl text-black">{bookDetail.publisher}</p></li>
          <li className="flex gap-12 text-gray-500 mb-2 ">Year of Publishing: <p className="font-bold text-xl text-black ">{bookDetail.yearOfPublishing}</p></li>
          <li className="flex gap-32 text-gray-500 mb-2">Rating: <p className="font-bold text-xl text-black ">{bookDetail.rating}</p></li>
        </ul>
      </div>
      <div className="flex gap-9">
      <button className="py-3 px-7 border rounded-xl font-bold">
          Read
      </button>
      <button className="btn text-white bg-[#50B1C9]">Wishlist</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default BookDetails;