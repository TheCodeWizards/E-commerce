import react from "react";
import useData from "../Hooks/Data";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const categories = [
    "audio",
    "mobile",
    "laptop",
    "gaming",
    "tv",
    "appliances"
  ]
  const navigate = useNavigate()
  return (
    <div className="bg-[#101829] ">
      <div className="max-w-6xl mx-auto flex items-center flex-wrap py-7  px-4 gap-4 justify-center md:justify-around">

      {
        categories.map((item, index) => (
          <button
          key={index}
          className='bg-gradient-to-r font- from-red-500 uppercase to-purple-500 text-white px-3 py-1 rounded-md mt-2 cursor-pointer'
          onClick={() => navigate(`/category/${item}`)} >{item}</button>
        ))
      }
      </div>

    </div>
  )

}

export default Category