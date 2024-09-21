import { getRow } from "@/app/lib/actions_supabase";
import { Button } from "@/components/ui/shadcn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

export default async function Page() {
  // call supabase action to get row 1
  const row = await getRow(1);
  console.log("row on page", row);
  // display result

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Upload clothing</CardTitle>
        <CardDescription>
          Add a piece of clothing to your wardrobe
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your piece clothing" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Type</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Head</SelectItem>
                  <SelectItem value="nuxt">Coat</SelectItem>
                  <SelectItem value="astro">Sweater</SelectItem>
                  <SelectItem value="sveltekit">Shirt</SelectItem>
                  <SelectItem value="sveltekit">Trousers</SelectItem>
                  <SelectItem value="sveltekit">Socks</SelectItem>
                  <SelectItem value="sveltekit">Shoes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Upload</Button>
      </CardFooter>
    </Card>
  );
}
