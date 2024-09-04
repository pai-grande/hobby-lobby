import LatestInvoices from "@/components/ui/tutorial/latest-invoices";
import RevenueChart from "@/components/ui/tutorial/revenue-chart";
import { lusitana } from "@/components/ui/tutorial/fonts";
import CardWrapper, { Card } from "@/components/ui/tutorial/cards";
import { fetchCardData } from "../../lib/data";
// import { Suspense } from "react";
import {
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/components/ui/skeletons";
import { Suspense } from "react";

// Card wrapper : multiple components load in at the same time (like sections)

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardWrapper />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
  //<p>Dashboard Page</p>;)
}

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });
// const form = useForm<z.infer<typeof formSchema>>({
//   resolver: zodResolver(formSchema),
//   defaultValues: {
//     username: "",
//   },
// });
// function onSubmit(values: z.infer<typeof formSchema>) {
//   console.log(values);
// }

// const action = useAction(insertUsername, {
//   onSuccess: () => {
//     toast.success("Username inserted successfully");
//   },
//   onError: () => {
//     toast.error("Server error");
//   },
// });

{
  /* <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="your username..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div> */
}
