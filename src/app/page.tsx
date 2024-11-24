"use client"

import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      try {
        const formData = new FormData(event.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch(`/api/register`, {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        });

        response.status === 201 && router.push('/timer');
        router.refresh()
        

      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error(String(e));
        }
      }
    }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
        <div className="mx-auto flex w-full max-w-sm flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
                <h1 className="text-2xl font-bold">Register Account</h1>

                <Link
                    className={buttonVariants({
                        variant: "link",
                        className: "gap-1.5",
                    })}
                    href="/sign-in"
                >
                    Already have an account?
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="grid gap-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                className="border border-gray-500 rounded"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                            />
                        </div>

                        <div className="grid gap-1">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                className="border border-gray-500 rounded"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>

                        <Button>Register</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}

export default Page