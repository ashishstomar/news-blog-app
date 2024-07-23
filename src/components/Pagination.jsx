import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const Pagination = ({ pageNum, setPageNum }) => {
  return (
    <div className="text-xl text-white flex justify-center gap-10 items-center mt-8">
      <button
        onClick={() => setPageNum(pageNum - 1)}
        className="border-gray-500 hover:bg-gray-800 flex items-center gap-2 px-6 py-2 border rounded-full"
      >
        <HiArrowCircleLeft />
        <p className="mb-1">Prev</p>
      </button>
      <p className="flex items-center justify-center w-12 h-12 border-2 border-gray-500 rounded-full">
        {pageNum}
      </p>
      <button
        onClick={() => setPageNum(pageNum + 1)}
        className="border-gray-500 hover:bg-gray-800 flex items-center gap-2 py-2 px-6 border rounded-full"
      >
        <p className="mb-1">Next</p>
        <HiArrowCircleRight />
      </button>
    </div>
  );
};

export default Pagination;
