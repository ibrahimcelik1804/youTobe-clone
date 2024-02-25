import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AiFillBell, AiFillVideoCamera } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <Link to={'/'} className="flex items-center gap-[10px]">
          <img className="w-[47px] " src="/youtube.png" />
          <h1 className="text-2xl max-sm:hidden">YouTobe</h1>
        </Link>
        <form
          className="flex items-center border border-gray-400 rounded-[20px]"
          action=""
        >
          <input
            className="bg-black outline-none rounded-[20px] px-3 py-1"
            type="text"
          />
          <button className="border-l  px-2">
            <GoSearch />
          </button>
        </form>
        <div className="flex gap-3 text-xl cursor-pointer ">
          <AiFillBell className="hover:text-gray-500" />
          <AiFillVideoCamera className="hover:text-gray-500" />
        </div>
      </header>
    </div>
  );
};

export default Header;
