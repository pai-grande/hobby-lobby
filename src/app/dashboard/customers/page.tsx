import { getRow } from "@/app/lib/actions_supabase";

export default async function Page() {
  // call supabase action to get row 1
  const row = await getRow(1);
  console.log("row on page", row);
  // display result

  return (
    <div>
      Hel,lo
      <p>This is the created_at: {row}</p>
    </div>
  );
}
