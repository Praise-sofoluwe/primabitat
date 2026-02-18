// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { authClient } from "@/lib/auth-client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { toast } from "sonner";

// export default function VerifyRequest() {
//   const router = useRouter();
//   const [otp, setOtp] = useState("");
//   // const [emailPending] = useTransition();
//   const params = useSearchParams();
//   const email = params.get("email") as string;
//   const isOtpCompleted = otp.length === 6;

//   // ✅ Protect page
//   useEffect(() => {
//     if (!email) {
//       toast.error("Invalid verification session");
//       router.replace("/login");
//     }
//   }, [email, router]);

// function verifyOtp() {
//   startTransition(async () => {
//     await authClient.signIn.emailOtp({
//       email: email,
//       otp: otp,
//       fetchOptions: {
//         onSuccess: () => {
//           toast.success("Email verified");
//           router.push("/");
//         },
//         onError: () => {
//           toast.error("Error verifying Email/OTP");
//         },
//       },
//     });
//   });
// }

//   const verifyOtp = async () => {
//     try {
//       await authClient.emailOtp.checkVerificationOtp({
//         email,
//         otp,
//         type: "sign-in",
//       });
//       toast.success("Email verified");
//       router.replace("/?login=success");
//     } catch (error: unknown) {
//       let message = "Invalid OTP, please try again";
//       if (typeof error === "object" && error !== null && "error" in error) {
//         const errObj = error as { error?: string };
//         if (typeof errObj.error === "string") message = errObj.error;
//       }
//       toast.error(message);
//     }
//   };

//   return (
//     <Card className="w-full mx-auto">
//       <CardHeader className="text-center">
//         <CardTitle className="text-xl">Please check your email</CardTitle>
//         <CardDescription>
//           We have sent a verification email code to your email adress. Please
//           open the email and paste the code below.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="flex flex-col items-center space-y-2">
//           <InputOTP
//             value={otp}
//             onChange={(value) => setOtp(value)}
//             maxLength={6}
//             className="gap-2"
//           >
//             <InputOTPGroup>
//               <InputOTPSlot index={0} />
//               <InputOTPSlot index={1} />
//               <InputOTPSlot index={2} />
//             </InputOTPGroup>
//             <InputOTPGroup>
//               <InputOTPSlot index={3} />
//               <InputOTPSlot index={4} />
//               <InputOTPSlot index={5} />
//             </InputOTPGroup>
//           </InputOTP>
//           <p className="text-sm text-muted-foreground">
//             Enter the 6-digit code sent to your email
//           </p>
//         </div>

//         <Button
//           onClick={verifyOtp}
//           disabled={!isOtpCompleted}
//           className="w-full"
//         >
//           Verify Account
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { useEffect, useState, useTransition } from "react";
// import { Button } from "@/components/ui/button";
// import { authClient } from "@/lib/auth-client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { toast } from "sonner";

// export default function VerifyRequest() {
//   const router = useRouter();
//   const params = useSearchParams();
//   const email = params.get("email");

//   const [otp, setOtp] = useState("");
//   const [emailPending, startTransition] = useTransition();

//   const isOtpCompleted = otp.length === 6;

//   // ✅ Protect page
//   // useEffect(() => {
//   //   if (!email) {
//   //     toast.error("Invalid verification session");
//   //     router.replace("/login");
//   //   }
//   // }, [email, router]);

//   const verifyOtp = async () => {
//     // if (!email) {
//     //   toast.error("Invalid session, please login again");
//     //   return;
//     // }

//     startTransition(async () => {
//       try {
//         await authClient.signIn.emailOtp({
//           email,
//           otp,
//         });

//         toast.success("Email verified!");
//         window.location.href = "/?login=success";
//       } catch (error: unknown) {
//         const message =
//           error instanceof Error ? error.message : "Invalid or expired OTP";

//         toast.error(message);
//       }
//     });
//   };

//   return (
//     <Card className="w-full mx-auto">
//       <CardHeader className="text-center">
//         <CardTitle className="text-xl">Please check your email</CardTitle>
//         <CardDescription>
//           We have sent a verification code to your email. Enter it below.
//         </CardDescription>
//       </CardHeader>

//       <CardContent className="space-y-6">
//         <div className="flex flex-col items-center space-y-2">
//           <InputOTP
//             value={otp}
//             onChange={(value) => {
//               if (/^\d*$/.test(value)) setOtp(value);
//             }}
//             maxLength={6}
//             inputMode="numeric"
//             className="gap-2"
//           >
//             <InputOTPGroup>
//               <InputOTPSlot index={0} />
//               <InputOTPSlot index={1} />
//               <InputOTPSlot index={2} />
//             </InputOTPGroup>
//             <InputOTPGroup>
//               <InputOTPSlot index={3} />
//               <InputOTPSlot index={4} />
//               <InputOTPSlot index={5} />
//             </InputOTPGroup>
//           </InputOTP>

//           <p className="text-sm text-muted-foreground">
//             Enter the 6-digit code sent to your email
//           </p>
//         </div>

//         <Button
//           onClick={verifyOtp}
//           disabled={emailPending || !isOtpCompleted}
//           className="w-full"
//         >
//           Verify Account
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useTransition, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export default function VerifyRequest() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") as string;

  const [otp, setOtp] = useState("");
  const [emailPending, startTransition] = useTransition();
  const [resendCooldown, setResendCooldown] = useState(0);
  const [showResend, setShowResend] = useState(false);
  const [failedAttempt, setFailedAttempt] = useState(false);

  const isOtpCompleted = otp.length === 6;

  // Protect page
  useEffect(() => {
    if (!email) {
      toast.error("Invalid verification session");
      router.replace("/login");
    }
  }, [email, router]);

  // Resend countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  function verifyOtp() {
    if (!isOtpCompleted) return;

    // Frontend numeric check
    if (!/^\d{6}$/.test(otp)) {
      toast.error("OTP must be 6 digits only");
      return;
    }

    startTransition(async () => {
      try {
        const result = await authClient.signIn.emailOtp({
          email,
          otp,
        });

        // ⚠️ THIS IS THE FIX - Check for error in response!
        if (result.error) {
          toast.error(result.error.message || "Invalid OTP, please try again");
          setFailedAttempt(true);
          setShowResend(true);
          setResendCooldown(60);
          return;
        }

        toast.success("Email verified successfully!");
        router.push("/");
      } catch {
        // Network/unexpected errors only
        toast.error("Something went wrong. Please try again.");
      }
    });
  }

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;

    try {
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
      });
      toast.success("Verification code resent! Check your email.");
      setOtp("");
      setFailedAttempt(false);
      setShowResend(true);
      setResendCooldown(60);
    } catch (error: unknown) {
      let message = "Failed to resend OTP. Try again later.";

      if (typeof error === "object" && error !== null && "error" in error) {
        const errObj = error as { error?: string };
        if (typeof errObj.error === "string") message = errObj.error;
      }

      toast.error(message);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Verify Your Email</CardTitle>
        <CardDescription>
          Enter the 6-digit code sent to <b>{email}</b>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            value={otp}
            pattern={REGEXP_ONLY_DIGITS}
            onChange={(value) => {
              const digitsOnly = value.replace(/\D/g, "");
              setOtp(digitsOnly);
            }}
            maxLength={6}
            className="gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0}/>
              <InputOTPSlot index={1}/>
              <InputOTPSlot index={2}/>
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3}/>
              <InputOTPSlot index={4}/>
              <InputOTPSlot index={5}/>
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email.
          </p>
        </div>

        <Button
          onClick={verifyOtp}
          disabled={emailPending || !isOtpCompleted}
          className="w-full"
        >
          {emailPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Verifying...</span>
            </>
          ) : (
            "Verify Account"
          )}
        </Button>

        {failedAttempt && showResend && (
          <Button
            onClick={handleResendOtp}
            disabled={resendCooldown > 0}
            variant="link"
            className="w-full text-center"
          >
            {resendCooldown > 0
              ? `Resend available in ${resendCooldown}s`
              : "Resend verification code"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
