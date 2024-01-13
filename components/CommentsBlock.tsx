import React from "react";

const CommentsBlock = () => {
  return (
    <div className="flex justify-between items-center">
      <button
        type="button"
        className="p-2 w-[150px] border border-gray-400 rounded-md hover:bg-gray-300 transition ease-in-out"
      >
        Коментарі (1)
      </button>
      <button
        type="button"
        className="p-2 w-[150px] border border-gray-400 rounded-md hover:bg-gray-300 transition ease-in-out"
      >
        Коментувати
      </button>
    </div>
  );
};

export default CommentsBlock;
