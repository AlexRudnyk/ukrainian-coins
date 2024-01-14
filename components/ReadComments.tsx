"use client";

import { CommentType } from "@/types";
import React, { useState } from "react";
import { useGlobalContext } from "@/context/store";
import { deleteComment } from "@/actions";
import { ReplyComment } from ".";

interface ReadCommentsProps {
  id: string;
  comments: CommentType[] | undefined;
}

const ReadComments = ({ id: coinId, comments }: ReadCommentsProps) => {
  const { isReadCommentsOpen, isLoggedIn } = useGlobalContext();
  const [isReplyCommentOpen, setIsReplyCommentOpen] = useState<boolean>(false);

  const handleDeleteCommentBtnClick = (commentId: string | undefined) => {
    if (coinId && commentId) deleteComment(coinId, commentId);
  };

  const handleReplyCommentBtnClick = () => {
    setIsReplyCommentOpen(!isReplyCommentOpen);
  };

  const handleReplyCommentModalClose = () => {
    setIsReplyCommentOpen(!isReplyCommentOpen);
  };

  return (
    <>
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
                {comment.reply && (
                  <div className="mt-3 border-t border-t-gray-400">
                    <p className="my-3 text-gray-500">Олександр</p>
                    <p className="pl-3">{comment.reply}</p>
                  </div>
                )}
                {isLoggedIn && (
                  <div className="flex items-center self-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteCommentBtnClick(comment._id)}
                      className="mr-10"
                    >
                      Видалити
                    </button>
                    <button type="button" onClick={handleReplyCommentBtnClick}>
                      Відповісти
                    </button>
                  </div>
                )}
                {isReplyCommentOpen && (
                  <ReplyComment
                    onClose={handleReplyCommentModalClose}
                    coinId={coinId}
                    commentId={comment._id}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ReadComments;
