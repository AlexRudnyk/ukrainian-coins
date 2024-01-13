"use client";

import React, { useState } from "react";
import { useGlobalContext } from "@/context/store";
import { CommentsModal } from ".";

interface CommentsBlockProps {
  id: string;
  commentsNumber: number | undefined;
}

const CommentsBlock = ({ id, commentsNumber }: CommentsBlockProps) => {
  const { isReadCommentsOpen, setIsReadCommentsOpen } = useGlobalContext();
  const [isCommentsModalOpen, setIsCommentsModalOpen] =
    useState<boolean>(false);

  const handleModalClose = () => {
    setIsCommentsModalOpen(!isCommentsModalOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="p-2 w-[150px] border border-gray-400 rounded-md hover:bg-gray-300 transition ease-in-out"
          onClick={() => setIsReadCommentsOpen(!isReadCommentsOpen)}
          disabled={commentsNumber === 0}
        >
          Коментарі ({commentsNumber})
        </button>
        <button
          type="button"
          className="p-2 w-[150px] border border-gray-400 rounded-md hover:bg-gray-300 transition ease-in-out"
          onClick={() => setIsCommentsModalOpen(!isCommentsModalOpen)}
        >
          Коментувати
        </button>
      </div>
      {isCommentsModalOpen && (
        <CommentsModal id={id} onClose={handleModalClose} />
      )}
    </>
  );
};

export default CommentsBlock;
