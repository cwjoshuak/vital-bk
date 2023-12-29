"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
// import { DateTime } from "ts-luxon";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
// console.log(supabase)
try {
  const { data, error } = await supabase
    .from("vital_brooklyn")
    .select("*")
    console.log(data);
    console.log(error)
} catch (err) {
  console.error(err)
}

    // .gte("created_at", DateTime.now().minus({ days: 7 }).toISO())
    // .order("created_at");

  return <div className="flex-1 w-full flex flex-col gap-20 items-center"></div>;
}
