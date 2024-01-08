"use client";

import { uploadCloudinary } from "@/utils";
import React, { ChangeEvent, useState } from "react";

interface FormikProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ImagesUpload = ({ setFieldValue }: FormikProps) => {
  const [images, setImages] = useState<File[]>([]);

  const upload = async () => {
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data?.url);
      }
      setFieldValue("photoURL", arr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
      <button type="button" onClick={upload}>
        Upload
      </button>
      <button type="button" onClick={() => setImages([])}>
        Reset
      </button>
    </>
  );
};

export default ImagesUpload;
