import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.NEXT_SUPABASE_ROLE_KEY;

export async function getRow(value: number) {
  try {
    console.log("Fetching row with value1:", value);
    const supabase = createClient(supabaseUrl!, supabaseKey!);
    const { data, error } = await supabase
      .from("table_test")
      .select("*")
      .eq("value1", value)
      .single();
    console.log("Fetched data:", data);
    if (error) throw Error(error.message);
    return data.created_at;
  } catch (err) {
    console.error("Error finding:", err);
  }
}

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  try {
    const supabase = createClient(supabaseUrl!, supabaseKey!);

    const { data, error } = await supabase.storage
      .from("wardrobe-images")
      .upload(uuidv4(), file);

    if (error) throw Error(error.message);

    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data.fullPath}`;
  } catch (err) {
    console.log("Error inserting image:", err);
  }
}
