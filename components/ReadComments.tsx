"use client";

import { CommentType } from "@/types";
import React from "react";
import { useGlobalContext } from "@/context/store";
import { deleteComment } from "@/actions";

interface ReadCommentsProps {
  id: string;
  comments: CommentType[] | undefined;
}

const ReadComments = ({ id: coinId, comments }: ReadCommentsProps) => {
  const { isReadCommentsOpen, isLoggedIn } = useGlobalContext();

  const handleDeleteCommentBtnClick = (commentId: string | undefined) => {
    if (coinId && commentId) deleteComment(coinId, commentId);
  };

  return (
    <div>
      {isReadCommentsOpen && (
        <ul>
          {comments?.map((comment: CommentType) => (
            <li
              key={comment._id}
              className="p-3 border border-gray-400 rounded-md mb-5 last:mb-0 flex flex-col"
            >
              <p className="mb-3 text-gray-500">{comment.userName}</p>
              <p className="mb-3 pl-3">{comment.text}</p>
              <p className="self-end text-gray-500">
                {comment.date.toLocaleDateString()}
              </p>
              {isLoggedIn && (
                <button
                  type="button"
                  onClick={() => handleDeleteCommentBtnClick(comment._id)}
                >
                  Видалити
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReadComments;
