"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { doCredentialLogin } from "@/app/actions";

import { useState } from "react";
import { useRouter } from "next/navigation";


const Page = () => {

    const router = useRouter();
    const [error, setError] = useState("");

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData);

            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/graphs");
            }
        } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }
    }

    return (
    <>
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <h1 className="text-2xl font-bold">
                        Sign in to your account
                    </h1>

                    <Link className={buttonVariants({
                        variant: "link",
                        className: "gap-1.5"
                    })} href="/">
                        Don&apos;t have an account?
                        <ArrowRight className="h-4 w-4"/>
                    </Link>
                </div>

                <div className="grid gap-6">
                  <form onSubmit={onSubmit}>
                      <div className="grid gap-2">
                          <div className="grid gap-1 py-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                  className="border mx-2 border-gray-500 rounded"
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="email"
                              />
                          </div>

                          <div className="grid gap-1 py-2">
                              <Label htmlFor="password">Password</Label>
                              <Input
                                  className="border mx-2 border-gray-500 rounded"
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
    </>)
}

export default Page