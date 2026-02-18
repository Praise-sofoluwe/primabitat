// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { GithubIcon } from "lucide-react";
// import { useState } from "react";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div>
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-xl">Welcome back!</CardTitle>
//           <CardDescription>
//             Login with your Github Email Account
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="flex flex-col gap-4">
//           <Button className="w-full" variant="outline">
//             <GithubIcon className="size-4" />
//             Sign in with Github
//           </Button>

//           <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//             <span className="relative z-10 bg-card px-2 text-muted-foreground">
//               Or continue with Email
//             </span>
//           </div>

//           <div className="grid gap-3">
//             {/* Email Field */}
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input type="email" placeholder="m@example.com" />
//             </div>

//             {/* password filed */}
//             <div className="grid gap-2">
//               <label htmlFor="password">Password</label>
//               <div className="relative">
//                 <Input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   placeholder="Enter your password"
//                   className="pr-10"
//                 />
//                 <button
//                   type="button"
//                   id="toggleButton"
//                   className="absolute right-3 top-1/2 -translate-y-1/2"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             <Button>Continue With Email</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// SECOND

import { auth } from "@/lib/auth";
import { LoginForm } from "./_components/LoginForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/");
  }
  return <LoginForm />;
}

// ORIGINAL

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { GithubIcon } from "lucide-react";

// export default function LoginPage() {
//   return (
//     <div>
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-xl">Welcome back!</CardTitle>
//           <CardDescription>
//             Login with your Github Email Account
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="flex flex-col gap-4">
//           <Button className="w-full" variant="outline">
//             <GithubIcon className="size-4" />
//             Sign in with Github
//           </Button>

//           <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//             <span className="relative z-10 bg-card px-2 text-muted-foreground">
//               Or continue with
//             </span>
//           </div>

//           <div className="grid gap-3">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input type="email" placeholder="m@example.com" />
//             </div>

//             <Button>Continue with Email</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
