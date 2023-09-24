import SignIn from "@/components/Signin";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="absolute inset-0">
      <div className="flex flex-col items-center justify-center h-full max-w-2xl gap-20 mx-auto">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          Home
        </Link>
        <SignIn />
      </div>
    </div>
  );
}
