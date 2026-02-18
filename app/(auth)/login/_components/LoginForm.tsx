// "use client";

// // import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// // import { Loader, Linkedin, Loader2, Send } from "lucide-react";
// // import { FaGoogle } from "react-icons/fa";
// // import { useState, useTransition } from "react";
// // import { authClient } from "@/lib/auth-client";
// // import { toast } from "sonner";
// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useEffect } from "react";
// // import { setPassword } from "better-auth/api";
// // import { email } from "better-auth";

// export function LoginForm() {
//   // const router = useRouter();
//   // const searchParams = useSearchParams();
//   // const [googlePending, startGoogleTransition] = useTransition();
//   // const [linkedinPending, startLinkedinTransition] = useTransition();

//   // // state
//   // const [showPassword, setShowPassword] = useState(false);
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   // const [showResendButton, setShowResendButton] = useState(false);

//   // // checks for canceled login
//   // useEffect(() => {
//   //   const error = searchParams.get("error");

//   //   if (error === "user_canceled_login") {
//   //     toast.error("Login was cancelled");
//   //     router.replace("/login");
//   //   }
//   // }, [searchParams, router]);

//   // // ===== SOCIAL LOGIN =====
//   // const handleGoogleAuth = async () => {
//   //   startGoogleTransition(async () => {
//   //     try {
//   //       await authClient.signIn.social({
//   //         provider: "google",
//   //         callbackURL: "/?login=success",
//   //       });
//   //     } catch (error: unknown) {
//   //       let message = "Internal server error";

//   //       if (typeof error === "object" && error !== null && "error" in error) {
//   //         const errObj = error as { error?: string }; // safe type
//   //         if (typeof errObj.error === "string") {
//   //           message = errObj.error;
//   //         }
//   //       }
//   //       toast.error(message);
//   //     }
//   //   });
//   // };

//   // const handleLinkedinAuth = async () => {
//   //   startLinkedinTransition(async () => {
//   //     try {
//   //       await authClient.signIn.social({
//   //         provider: "linkedin",
//   //         callbackURL: "/?login=success",
//   //       });
//   //     } catch (error: unknown) {
//   //       let message = "Internal server error";

//   //       if (typeof error === "object" && error !== null && "error" in error) {
//   //         const errObj = error as { error?: string }; // safe type
//   //         if (typeof errObj.error === "string") {
//   //           message = errObj.error;
//   //         }
//   //       }
//   //       toast.error(message);
//   //     }
//   //   });
//   // };

//   // // ===== EMAIL LOGIN =====
//   // const handleEmailsignIn = async () => {
//   //   try {
//   //     await authClient.signIn.email({
//   //       email,
//   //       password,
//   //     });
//   //     toast.success("Signed in successfully, redirecting...");
//   //   } catch (error: unknown) {
//   //     let message = "Internal server error";

//   //     if (typeof error === "object" && error !== null && "error" in error) {
//   //       const errObj = error as { error?: string; code?: string };

//   //       if (
//   //         errObj.code === "EMAIL_NOT_VERIFIED" ||
//   //         errObj.error?.includes("verify")
//   //       ) {
//   //         message = "Please verify your email before logging in";
//   //         toast.error(message);
//   //         setShowResendButton(true);
//   //         return;
//   //       }

//   //       if (errObj.error === "INVALID_EMAIL_OR_PASSWORD") {
//   //         message = "Invalid email or password";
//   //       } else if (typeof errObj.error === "string") {
//   //         message = errObj.error;
//   //       }
//   //     }

//   //     toast.error(message);
//   //   }
//   // };

//   // const resendVerificationEmail = async () => {
//   //   try {
//   //     await authClient.emailOtp.sendVerificationOtp({
//   //       email: email,
//   //       type: "email-verification",
//   //     });

//   //     toast.success("Verification email sent! Check your inbox");
//   //   } catch (error: unknown) {
//   //     let message = "Failed to send verification email";

//   //     if (typeof error === "object" && error !== null && "error" in error) {
//   //       const errObj = error as { error?: string }; // safe type
//   //       if (typeof errObj.error === "string") {
//   //         message = errObj.error;
//   //       }
//   //     }
//   //     toast.error(message);
//   //   }
//   // };

//   return (
//     <div>
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-xl">Welcome back!</CardTitle>
//           <CardDescription>Login with your account</CardDescription>
//         </CardHeader>

//         <CardContent className="flex flex-col gap-4">
//           {/* Social Buttons */}
//           {/* <Button
//             className="w-full"
//             variant="outline"
//             onClick={handleGoogleAuth}
//             disabled={googlePending}
//           >
//             {googlePending ? (
//               <>
//                 <Loader className="size-4 animate-spin" />
//                 <span>Loading...</span>
//               </>
//             ) : (
//               <>
//                 <FaGoogle className="size-4" />
//                 Sign in with Google
//               </>
//             )}
//           </Button> */}

//           {/* <Button
//             className="w-full"
//             variant="outline"
//             onClick={handleLinkedinAuth}
//             disabled={linkedinPending}
//           >
//             {linkedinPending ? (
//               <>
//                 <Loader className="size-4 animate-spin" />
//                 <span>Loading...</span>
//               </>
//             ) : (
//               <>
//                 <Linkedin className="size-4" />
//                 <span>Sign in with LinkedIn</span>
//               </>
//             )}
//           </Button> */}

//           {/* Divider */}
//           <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//             <span className="relative z-10 bg-card px-2 text-muted-foreground">
//               Or continue with Email
//             </span>
//           </div>

//           {/* Email & Password */}
//           <div className="grid gap-3">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 // value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   // type={showPassword ? "text" : "password"}
//                   // value={password}
//                   // onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="pr-10"
//                 />
//                 <button
//                   type="button"
//                   // aria-label={showPassword ? "Hide password" : "Show password"}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
//                   // onClick={() => setShowPassword((prev) => !prev)}
//                 >
//                   {/* {showPassword ? "Hide" : "Show"} */}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* <Button onClick={handleEmailsignIn}>
//             <>
//               <Loader2 className="size-4 animate-spin" />
//               <span>Loading...</span>
//             </>
//             <>
//               <Send className="size-4" />
//               <span>Continue with Email</span>
//             </>
//           </Button>

//           {showResendButton && (
//             <Button
//               onClick={resendVerificationEmail}
//               variant="link"
//               className="text-sm text-blue-600"
//             >
//               Resend verification email
//             </Button>
//           )} */}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// // "use client";

// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Loader, Linkedin, Loader2, Send } from "lucide-react";
// // import { FaGoogle } from "react-icons/fa";
// // import { useState, useTransition } from "react";
// // import { authClient } from "@/lib/auth-client";
// // import { toast } from "sonner";
// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useEffect } from "react";

// // export function LoginForm() {
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
// //   const [googlePending, startGoogleTransition] = useTransition();
// //   const [linkedinPending, startLinkedinTransition] = useTransition();
// //   const [emailTransition, startEmailTransition] = useTransition();

// //   // state
// //   const [email, setEmail] = useState("");
// //   // const [otp, setOtp] = useState("");
// //   // const [showOtpInput] = useState(false);
// //   // const [showResendButton, setShowResendButton] = useState(false);

// //   // checks for canceled login
// //   useEffect(() => {
// //     const error = searchParams.get("error");

// //     if (error === "user_canceled_login") {
// //       toast.error("Login was cancelled");
// //       router.replace("/login");
// //     }
// //   }, [searchParams, router]);

// //   // ===== SOCIAL LOGIN =====
// //   const handleGoogleAuth = async () => {
// //     startGoogleTransition(async () => {
// //       try {
// //         await authClient.signIn.social({
// //           provider: "google",
// //           callbackURL: "/?login=success",
// //         });
// //       } catch (error: unknown) {
// //         let message = "Internal server error";
// //         if (typeof error === "object" && error !== null && "error" in error) {
// //           const errObj = error as { error?: string };
// //           if (typeof errObj.error === "string") message = errObj.error;
// //         }
// //         toast.error(message);
// //       }
// //     });
// //   };

// //   const handleLinkedinAuth = async () => {
// //     startLinkedinTransition(async () => {
// //       try {
// //         await authClient.signIn.social({
// //           provider: "linkedin",
// //           callbackURL: "/?login=success",
// //         });
// //       } catch (error: unknown) {
// //         let message = "Internal server error";
// //         if (typeof error === "object" && error !== null && "error" in error) {
// //           const errObj = error as { error?: string };
// //           if (typeof errObj.error === "string") message = errObj.error;
// //         }
// //         toast.error(message);
// //       }
// //     });
// //   };

// //   // ===== EMAIL LOGIN =====
// //   const handleEmailSignIn = () => {
// //     if (!email) {
// //       toast.error("Email is required");
// //       return;
// //     }

// //     // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     // if (!emailRegex.test(email)) {
// //     //   toast.error("Please enter a valid email address");
// //     //   return;
// //     // }

// //     startEmailTransition(async () => {
// //       try {

// //         await authClient.emailOtp.sendVerificationOtp({
// //           email,
// //           type: "sign-in",
// //         });
// //         toast.success("Check your email for the verification code");
// //         router.push(`/verify-request?email=${encodeURIComponent(email)}`);
// //       } catch (error: unknown) {
// //         let message = "Failed to send verification email";

// //         if (typeof error === "object" && error !== null && "error" in error) {
// //           const errObj = error as { error?: string }; // safe type
// //           if (typeof errObj.error === "string") {
// //             message = errObj.error;
// //           }
// //         }
// //         toast.error(message);
// //       }
// //     });
// //   };

// //   // const handleVerifyOtp = async () => {
// //   //   try {
// //   //     await authClient.signIn.emailOtp({
// //   //       email,
// //   //       otp,
// //   //     });
// //   //     toast.success("Logged in successfully!");
// //   //     router.replace("/?login=success");
// //   //   } catch (error: unknown) {
// //   //     let message = "Invalid OTP, please try again";
// //   //     if (typeof error === "object" && error !== null && "error" in error) {
// //   //       const errObj = error as { error?: string };
// //   //       if (typeof errObj.error === "string") message = errObj.error;
// //   //     }
// //   //     toast.error(message);
// //   //   }
// //   // };

// //   // Resend OTP
// //   // const resendOtp = async () => {
// //   //   try {
// //   //     await authClient.emailOtp.sendVerificationOtp({
// //   //       email,
// //   //       type: "email-verification",
// //   //     });
// //   //     toast.success("OTP sent again. Check your inbox.");
// //   //   } catch (error: unknown) {
// //   //     let message = "Failed to resend OTP";
// //   //     if (typeof error === "object" && error !== null && "error" in error) {
// //   //       const errObj = error as { error?: string };
// //   //       if (typeof errObj.error === "string") message = errObj.error;
// //   //     }
// //   //     toast.error(message);
// //   //   }
// //   // };

// //   return (
// //     <div>
// //       <Card>
// //         <CardHeader>
// //           <CardTitle className="text-xl">Welcome back!</CardTitle>
// //           <CardDescription>Login with your account</CardDescription>
// //         </CardHeader>

// //         <CardContent className="flex flex-col gap-4">
// //           {/* Social Buttons */}
// //           <Button
// //             className="w-full"
// //             variant="outline"
// //             onClick={handleGoogleAuth}
// //             disabled={googlePending}
// //           >

// //               <>
// //                 <Loader className="size-4 animate-spin" />
// //                 <span>Loading...</span>
// //               </>
// //             :
// //               <>
// //                 <FaGoogle className="size-4" />
// //                 Sign in with Google
// //               </>

// //           </Button>

// //           <Button
// //             className="w-full"
// //             variant="outline"
// //             onClick={handleLinkedinAuth}
// //             disabled={linkedinPending}
// //           >
// //             {linkedinPending ? (
// //               <>
// //                 <Loader className="size-4 animate-spin" />
// //                 <span>Loading...</span>
// //               </>
// //             ) : (
// //               <>
// //                 <Linkedin className="size-4" />
// //                 <span>Sign in with LinkedIn</span>
// //               </>
// //             )}
// //           </Button>

// //           {/* Divider */}
// //           <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
// //             <span className="relative z-10 bg-card px-2 text-muted-foreground">
// //               Or continue with Email
// //             </span>
// //           </div>

// //           {/* Email Input */}

// //           <div className="grid gap-2">
// //             <Label htmlFor="email">Email</Label>
// //             <Input
// //               id="email"
// //               type="email"
// //               placeholder="m@example.com"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>

// //           {/* OTP Input */}
// //           {/* {showOtpInput && (
// //             <div className="grid gap-2">
// //               <Label htmlFor="otp">Enter OTP</Label>
// //               <Input
// //                 id="otp"
// //                 type="text"
// //                 placeholder="Enter the code"
// //                 value={otp}
// //                 onChange={(e) => setOtp(e.target.value)}
// //               />
// //               <Button onClick={handleVerifyOtp}>
// //                 <Send className="size-4" />
// //                 <span>Verify OTP</span>
// //               </Button>
// //               {showResendButton && (
// //                 <Button
// //                   onClick={resendOtp}
// //                   variant="link"
// //                   className="text-sm text-blue-600"
// //                 >
// //                   Resend OTP
// //                 </Button>
// //               )}
// //             </div>
// //           )} */}

// //           <Button onClick={handleEmailSignIn} disabled={emailTransition}>
// //             {emailTransition ? (
// //               <>
// //                 <Loader2 className="size-4 animate-spin" />
// //                 <span>Loading...</span>
// //               </>
// //             ) : (
// //               <>
// //                 <Send className="size-4" />
// //                 <span>Continue with Email</span>
// //               </>
// //             )}
// //           </Button>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }

// New code

"use client";

import { useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader, Loader2, Send, Linkedin } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  // const [otp, setOtp] = useState("");
  // const [showOtpInput, setShowOtpInput] = useState(false);
  // const [showResendButton, setShowResendButton] = useState(false);

  const [googlePending, startGoogleTransition] = useTransition();
  const [linkedinPending, startLinkedinTransition] = useTransition();
  const [emailTransition, startEmailTransition] = useTransition();
  // const [verifyPending, startVerifyTransition] = useTransition();
  const router = useRouter();

  // ===== SOCIAL LOGIN =====
  const handleGoogleAuth = async () => {
    startGoogleTransition(async () => {
      try {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: "/?login=success",
        });
      } catch (error: unknown) {
        let message = "Internal server error";
        if (typeof error === "object" && error !== null && "error" in error) {
          const errObj = error as { error?: string };
          if (typeof errObj.error === "string") message = errObj.error;
        }
        toast.error(message);
      }
    });
  };

  const handleLinkedinAuth = async () => {
    startLinkedinTransition(async () => {
      try {
        await authClient.signIn.social({
          provider: "linkedin",
          callbackURL: "/?login=success",
        });
      } catch (error: unknown) {
        let message = "Internal server error";
        if (typeof error === "object" && error !== null && "error" in error) {
          const errObj = error as { error?: string };
          if (typeof errObj.error === "string") message = errObj.error;
        }
        toast.error(message);
      }
    });
  };

  // ===== EMAIL LOGIN =====
  const handleEmailSignIn = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    startEmailTransition(async () => {
      try {
        // send OTP
        await authClient.emailOtp.sendVerificationOtp({
          email: email,
          type: "sign-in",
        });
        toast.success("OTP Sent");
        router.push(`/verify-request?email=${email}`);
        // setShowOtpInput(true);
        // setShowResendButton(true);
      } catch (error: unknown) {
        let message = "Failed to send verification email";
        if (typeof error === "object" && error !== null && "error" in error) {
          const errObj = error as { error?: string };
          if (typeof errObj.error === "string") message = errObj.error;
        }
        toast.error(message);
      }
    });
  };

  // ===== VERIFY OTP =====
  // const handleVerifyOtp = async () => {
  //   if (!otp) {
  //     toast.error("Please enter the verification code");
  //     return;
  //   }

  //   startVerifyTransition(async () => {
  //     try {
  //       await authClient.signIn.emailOtp({
  //         email,
  //         otp,
  //       });
  //       toast.success("Logged in successfully!");
  //       // router.replace("/"); // Commented for single-page testing
  //     } catch (error: unknown) {
  //       let message = "Invalid code, please try again";
  //       if (typeof error === "object" && error !== null && "error" in error) {
  //         const errObj = error as { error?: string };
  //         if (typeof errObj.error === "string") message = errObj.error;
  //       }
  //       toast.error(message);
  //     }
  //   });
  // };

  // // ===== RESEND OTP =====
  // const resendOtp = async () => {
  //   startEmailTransition(async () => {
  //     try {
  //       await authClient.emailOtp.sendVerificationOtp({
  //         email,
  //         type: "sign-in",
  //       });
  //       toast.success("Verification code resent! Check your inbox.");
  //     } catch (error: unknown) {
  //       let message = "Failed to resend OTP";
  //       if (typeof error === "object" && error !== null && "error" in error) {
  //         const errObj = error as { error?: string };
  //         if (typeof errObj.error === "string") message = errObj.error;
  //       }
  //       toast.error(message);
  //     }
  //   });
  // };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Welcome back!</CardTitle>
          <CardDescription>Login with your account</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {/* Google Login */}
          <Button
            className="w-full"
            variant="outline"
            onClick={handleGoogleAuth}
            disabled={googlePending}
          >
            {googlePending ? (
              <>
                <Loader className="size-4 animate-spin" />{" "}
                <span>Loading...</span>
              </>
            ) : (
              <>
                <FaGoogle className="size-4" /> <span>Sign in with Google</span>
              </>
            )}
          </Button>

          {/* LinkedIn Login */}
          <Button
            className="w-full"
            variant="outline"
            onClick={handleLinkedinAuth}
            disabled={linkedinPending}
          >
            {linkedinPending ? (
              <>
                <Loader className="size-4 animate-spin" />{" "}
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Linkedin className="size-4" />{" "}
                <span>Sign in with LinkedIn</span>
              </>
            )}
          </Button>

          {/* Divider */}
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">
              Or continue with Email
            </span>
          </div>

          {/* Email Input */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button onClick={handleEmailSignIn} disabled={emailTransition}>
            {emailTransition ? (
              <>
                <Loader2 className="size-4 animate-spin" />{" "}
                <span>Sending OTP...</span>
              </>
            ) : (
              <>
                <Send className="size-4" /> <span>Continue with Email</span>
              </>
            )}
          </Button>

          {/* OTP Input & Verify
          {showOtpInput && (
            <div className="grid gap-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter the code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button onClick={handleVerifyOtp} disabled={verifyPending}>
                {verifyPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> <span>Verify Code</span>
                  </>
                )}
              </Button>

              {showResendButton && (
                <Button onClick={resendOtp} variant="link" className="text-sm text-blue-600">
                  Resend verification code
                </Button>
              )}
            </div>
          )} */}
        </CardContent>
      </Card>
    </div>
  );
}
