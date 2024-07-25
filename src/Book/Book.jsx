import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const Book = ({book}) => {
  const {bookId,image,bookName,author,rating,category,tags} = book
 
  return (
    
       <Link to={`/book/${bookId}`}  className="card  w-[374px] border">
  <figure className="bg-gray-100 my-6 p-4 mx-7 rounded-lg">
    <img className="w-36 h-48  "
      src={image}/>
  </figure>
  <div className="card-body">
    <div className="flex gap-6 items-center ">
      <p className="  p-2 text-green-600 font-semibold bg-gray-100 rounded-xl ">{tags[0]}</p>
      <p className=" p-2 text-green-600 font-semibold bg-gray-100 rounded-xl">{tags[1]}</p>
    </div>
    <h2 className="card-title mt-2">{bookName}</h2>
    <p className="font-semibold">By: {author}</p>
    <hr className="border-dashed bottom-1 text-green-600 mt-3" />
    <div className="flex">
      <p>{category}</p>
      <h2 className="flex justify-center items-center gap-1">{rating}
      <CiStar  className=""/>
      </h2>
    </div>
    
  </div>
</Link>
    
  );
};

export default Book;