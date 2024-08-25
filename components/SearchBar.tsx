import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

const formSchema = z.object({
  search: z.string().trim().min(1, {
    message: "Digite algo para buscar",
  }),
});

export default function SearchBar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const router = useRouter();

  const handlerSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/establishment?search=${data.search}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handlerSubmit)} className="flex w-full">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Faça sua busca..."
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="ghost" className="-ml-14">
          <Search />
        </Button>
      </form>
    </Form>
  );
}
