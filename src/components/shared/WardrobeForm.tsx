"use client";

import { wardrobeFormSchema } from "@/app/lib/validator";
import { uploadImage } from "@/app/lib/actions_supabase";
import { PieceSizeEnum } from "@/enums/wardrobe.enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUploader } from "../ui/FileUploader";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";

const WardrobeForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const initialValues = {
    title: "",
    size: "",
    price: "",
    description: "",
    image: "",
    sold_out: false,
  };

  const form = useForm<z.infer<typeof wardrobeFormSchema>>({
    resolver: zodResolver(wardrobeFormSchema),
    defaultValues: initialValues,
  });
  async function onSubmit(values: z.infer<typeof wardrobeFormSchema>) {
    console.log("values: ", values);
    let uploadedImageUrl = values.image;
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        uploadedImageUrl = (await uploadImage(formData)) || uploadedImageUrl;
      }
      console.log("values: ", values);
    } catch (error) {
      console.log("Error while uploading file: ", error);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Name"
                    {...field}
                    className="textarea rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Size"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sold_out"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="checkbox"
                    onClick={() => {
                      setIsChecked(!isChecked);
                      field.onChange(!isChecked);
                    }}
                    checked={isChecked} // Use checked instead of value
                    {...field}
                    className="checkbox-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="textarea rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFile={(file: File | null) => setFile(file)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Upload"}
        </Button>
      </form>
    </Form>
  );
};

export default WardrobeForm;
