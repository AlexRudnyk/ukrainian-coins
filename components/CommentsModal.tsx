"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FormikState, ErrorMessage } from "formik";
import * as yup from "yup";
import { addComment } from "@/actions";

interface initialStateType {
  userName: string;
  text: string;
}

interface ResetFormProps {
  resetForm: (nextState?: Partial<FormikState<initialStateType>>) => void;
}

interface CommentsModalProps {
  id: string;
  onClose: () => void;
}

const schema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "Щонайменше 2 символи")
    .max(16, "Не більше 16 символів")
    .required("Ім'я обов'язкове поле"),
  text: yup
    .string()
    .min(2, "Щонайменше 2 символи")
    .max(777, "Не більше 777 символів")
    .required("Текст обов'язкове поле"),
});

const CommentsModal = ({ id, onClose }: CommentsModalProps) => {
  const [text, setText] = useState<string>("");

  const initialValues: initialStateType = {
    userName: "",
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

  const handleCommentsModalSubmit = (
    values: initialStateType,
    { resetForm }: ResetFormProps
  ) => {
    addComment(values, id);
    resetForm();
    setText("");
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
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleCommentsModalSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="w-full">
              <div className="relative">
                <Field
                  type="text"
                  name="userName"
                  placeholder="Введіть своє ім'я"
                  className="p-2 mb-5 border border-gray-300 rounded-md w-full"
                />
                <div className="absolute top-[37px] text-red-600">
                  <ErrorMessage name="userName" />
                </div>
              </div>
              <div className="relative">
                <Field
                  as="textarea"
                  type="text"
                  name="text"
                  value={text}
                  placeholder="Напишіть коментар"
                  className="p-2 mb-5 border border-gray-300 rounded-md w-full resize-none"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("text", e.target.value);
                    setText(e.target.value);
                  }}
                />
                <div className="absolute top-[77px] text-red-600">
                  <ErrorMessage name="text" />
                </div>
              </div>
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

export default CommentsModal;
