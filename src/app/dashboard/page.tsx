"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function Page() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
  //<p>Dashboard Page</p>;)
}
