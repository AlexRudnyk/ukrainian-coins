"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FormikState } from "formik";
import { ImagesUpload } from ".";
import { addCoin } from "@/actions";
import { useGlobalContext } from "@/context/store";
import { useRouter } from "next/navigation";

interface initialStateType {
  title: string;
  year: string;
  photoURL: string[];
  spec: string;
  price: string;
  description: string;
}

interface ResetFormProps {
  resetForm: (nextState?: Partial<FormikState<initialStateType>>) => void;
}

const AdminForm = () => {
  const { isLoggedIn } = useGlobalContext();
  const router = useRouter();
  const [description, setDescription] = useState<string>("");

  const initialValues: initialStateType = {
    title: "",
    year: "",
    photoURL: [],
    spec: "",
    price: "за домовленістю",
    description: "",
  };

  useEffect(() => {
    isLoggedIn ? router.replace("/admin") : router.replace("/login");
  }, [isLoggedIn, router]);

  const handleSubmit = (
    values: initialStateType,
    { resetForm }: ResetFormProps
  ) => {
    addCoin(values);
    setDescription("");
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col w-[600px]">
          <div>
            <ImagesUpload setFieldValue={setFieldValue} />
          </div>
          <div className="flex flex-col">
            <Field
              type="text"
              name="title"
              placeholder="Назва монети"
              className="mb-5 p-2 rounded-md"
            />
            <Field
              type="text"
              name="year"
              placeholder="Рік випуску"
              className="mb-5 p-2 rounded-md"
            />
            <Field
              type="text"
              name="spec"
              placeholder="Штамп"
              className="mb-5 p-2 rounded-md"
            />
            <Field
              type="text"
              name="price"
              placeholder="Орієнтовна ціна"
              className="mb-5 p-2 rounded-md"
            />
            <Field
              type="text"
              as="textarea"
              value={description}
              name="description"
              placeholder="Опис"
              className="resize-none mb-5 p-2 rounded-md"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setFieldValue("description", e.currentTarget.value);
                setDescription(e.currentTarget.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="p-2 w-[100px] border border-gray-400 rounded-md self-center hover:bg-gray-300 transition ease-in-out"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdminForm;
