import {
  Home,
  Calendar,
  ChevronDownIcon,
  BookOpen,
  LogOut,
  LayoutDashboard,
  UserCog,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSignOut } from "@/hooks/use-signout";

interface iAppProps {
  name: string;
  email: string;
  image: string | null | undefined;
}

export function UserDropdown({ email, name, image }: iAppProps) {
  const handleSignOut = useSignOut();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-auto p-0 hover:bg-transparent" variant="ghost">
          <div className="relative">
            <Avatar>
              <AvatarImage
                alt="Profile image"
                src={image ?? `https://avatar.vercel.sh/${email}`}
              />

              {/* {Overlay Letter} */}
              {!image && (
                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                  {(name?.[0] ?? email?.[0] ?? "U").toUpperCase()}
                </span>
              )}
              <AvatarFallback>
                {name?.[0]?.toUpperCase() ?? email?.[0]?.toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
            <span className="-end-0.5 -bottom-0.5 absolute size-3 rounded-full border-2 border-background bg-emerald-500">
              <span className="sr-only">Online</span>
            </span>
          </div>
          <ChevronDownIcon
            aria-hidden="true"
            className="opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate font-medium text-foreground text-sm">
            {name}
          </span>
          <span className="truncate font-normal text-muted-foreground text-xs">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/">
              <Home aria-hidden="true" className="opacity-60" size={16} />
              <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/courses">
              <BookOpen aria-hidden="true" className="opacity-60" size={16} />
              <span>My Courses</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/events">
              <Calendar aria-hidden="true" className="opacity-60" size={16} />
              <span>My Events</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/admin">
              <LayoutDashboard
                aria-hidden="true"
                className="opacity-60"
                size={16}
              />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profile">
              <UserCog aria-hidden="true" className="opacity-60" size={16} />
              <span>Profile/Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => handleSignOut()}>
          <LogOut aria-hidden="true" className="opacity-60" size={16} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
