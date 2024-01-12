"use client";

import { uploadCloudinary } from "@/utils";
import React, { ChangeEvent, useState } from "react";

interface FormikProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ImagesUpload = ({ setFieldValue }: FormikProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const upload = async () => {
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data?.url);
      }
      setFieldValue("photoURL", arr);
      setIsUploaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-10">
      <input
        type="file"
        multiple
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            const fileList = Array.from(e.target.files);
            setImages(fileList);
          }
        }}
      />
      <button
        type="button"
        onClick={upload}
        className="p-2 mr-8 w-[100px] border border-gray-400 rounded-md hover:bg-gray-300 transition ease-in-out relative"
      >
        Upload{" "}
        {isUploaded && (
          <span className="bg-[url('/success-check.png')] bg-no-repeat bg-center bg-cover w-[20px] h-[20px] absolute top-[-10px] right-[-10px]"></span>
        )}
      </button>
      <button
        type="button"
        onClick={() => {
          setImages([]);
          setIsUploaded(false);
        }}
        className="p-2 w-[100px] border border-gray-400 rounded-md hover:bg-gray-300 transition ease-in-out"
      >
        Reset
      </button>
    </div>
  );
};

export default ImagesUpload;
