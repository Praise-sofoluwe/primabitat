import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import White_logo from "@/public/white-logo.png";
import Image from "next/image";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          className="flex items-center gap-2 self-center font-medium"
          href="/"
        >
          <Image src={White_logo} alt="Logo" width={100} height={100} />
          {/* PrimAbitat */}
        </Link>
        {children}
        <div className="text-balance text-center text-xs text-muted-foreground">
          By creating an account, you agree to the{" "}
          <span className="hover:text-primary underline">Terms of Service</span>{" "}
          and our{" "}
          <span className="hover:text-primary underline">Privacy Policy</span>.
          We&apos;ll occasionally send you emails about news, products, and
          service; you can opt-out anytime.
        </div>
      </div>
    </div>
  );
}
