import img from '../assets/images/pngwing 1.png'
const Header = () => {
  return (
    <div>
      <div className="hero bg-base-200  rounded-lg mt-9">
  <div className="hero-content flex-col w-[1170px] h-[500px] justify-between items-center lg:flex-row-reverse">
    <img
      src={img}
      className="max-w-sm rounded-lg w-[370px] h-[394px]" />
    <div className='w-[526px] h-[281px] '>
      <p className="text-5xl mb-12 leading-tight font-bold">Books to freshen up your bookshelf</p>
      <button className="btn bg-[#23BE0A] text-white">View The List</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Header;