import { createClient } from "@supabase/supabase-js";

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
