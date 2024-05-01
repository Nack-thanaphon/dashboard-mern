import { useGetIdentity } from "@refinedev/core";
import React, { useState } from "react";
import Form from "../components/common/Form";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";

function CreateProperties() {
  const { data: user } = useGetIdentity<any>();

  // console.log(user);

  const [properImage, setProperImage] = useState({ name: "", url: "" });

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit
  } = useForm();

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => {
      return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });
    };
    reader(file).then((result: string) =>
      setProperImage({ name: file?.name, url: result })
    );
  };

  const onFinishHadler = async (data: FieldValues) => {
    if (!properImage.name) return alert("Please upload an image");
    await onFinish({
      ...data,
      photo: properImage.url,
      email: user.email
    });
  };

  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHadler}
      propertyImages={properImage}
    />
  );
}

export default CreateProperties;
