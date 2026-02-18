"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function LoginSuccessToast() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if user just logged in
    if (searchParams.get("login") === "success") {
      toast.success("Signed in successfully!");
      // Clean up the URL (remove ?login=success)
      router.replace("/");
    }
  }, [searchParams, router]);
  return null;
}
