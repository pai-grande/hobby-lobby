"use client";

import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

type FileUploaderProps = {
  imageUrl: string;
  onFieldChange: (url: string) => void;
  setFile: (file: File | null) => void;
};

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFile,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFile: any) => {
    setFile(acceptedFile[0]);
    onFieldChange(convertFileToUrl(acceptedFile[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".svg"] }, // Corrected accept property
    maxSize: 5000000,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-md bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <img
            src="/assets/icons/upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-md">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
