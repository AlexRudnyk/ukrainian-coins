"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useGlobalContext } from "@/context/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialValues = {
  password: "",
};

const LoginPageClient = () => {
  const [password, setPassword] = useState<string>("");
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsLoggedIn(true);
    }
  }, [password, setIsLoggedIn]);

  useEffect(() => {
    isLoggedIn && router.replace("/admin");
  }, [isLoggedIn, router]);

  const handleLoginFormSubmit = (
    { password }: { password: string },
    { resetForm }: { resetForm: any }
  ) => {
    setPassword(password);
    resetForm();
  };

  return (
    <div className="w-[1280px] mx-auto mt-10">
      <Link
        href="/"
        className="underline inline-block mb-10 text-lg ml-10 relative"
      >
        <span className="before:absolute before:content-'' before:w-6 before:h-6 before:left-[-30px] before:top-[3px] before:bg-[url('/left-arrow-svgrepo-com.svg')]" />
        На головну
      </Link>
      <Formik initialValues={initialValues} onSubmit={handleLoginFormSubmit}>
        <Form>
          <Field type="password" name="password" className="mr-5" />
          <button type="submit">Ввести</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPageClient;
