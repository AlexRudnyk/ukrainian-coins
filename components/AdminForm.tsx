"use client";

import React, { useEffect } from "react";
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
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <ImagesUpload setFieldValue={setFieldValue} />
          <Field type="text" name="title" placeholder="title" />
          <Field type="text" name="year" placeholder="year" />
          <Field type="text" name="spec" placeholder="spec" />
          <Field type="text" name="price" placeholder="price" />
          <Field type="text" name="description" placeholder="description" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AdminForm;
