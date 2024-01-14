"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FormikState } from "formik";
import { replyComment } from "@/actions";

interface initialStateType {
  text: string;
}

interface ResetFormProps {
  resetForm: (nextState?: Partial<FormikState<initialStateType>>) => void;
}

interface ReplyCommentProps {
  coinId: string;
  commentId: string | undefined;
  onClose: () => void;
}

const ReplyComment = ({ coinId, commentId, onClose }: ReplyCommentProps) => {
  const [text, setText] = useState<string>("");

  const initialValues: initialStateType = {
    text: "",
  };

  useEffect(() => {
    const onEscClick = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };

    window.addEventListener("keydown", onEscClick);

    return () => {
      window.removeEventListener("keydown", onEscClick);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  const handleReplyModalSubmit = (
    { text }: initialStateType,
    { resetForm }: ResetFormProps
  ) => {
    if (coinId && commentId && text) replyComment(text, coinId, commentId);
    resetForm();
    onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 p-5"
    >
      <div className="relative w-[500px] bg-white p-12 pt-20 flex justify-center items-center rounded-2xl">
        <button
          type="button"
          className="absolute top-[10px] right-[10px] p-4 z-10"
          onClick={onClose}
        >
          Закрити
        </button>
        <Formik initialValues={initialValues} onSubmit={handleReplyModalSubmit}>
          {({ values, setFieldValue }) => (
            <Form className="w-full">
              <Field
                as="textarea"
                type="text"
                name="text"
                value={text}
                placeholder="Напишіть відповідь"
                className="p-2 mb-5 border border-gray-300 rounded-md w-full resize-none"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("text", e.target.value);
                  setText(e.target.value);
                }}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="p-2 w-[150px] border border-gray-400 rounded-md hover:bg-gray-300 transition ease-in-out block"
                >
                  Ввести
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ReplyComment;
