import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircle2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfileButton = () => {
  const { userId, signOut } = useAuth();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {/* <AvatarImage src="/img/shadcn.jpg" /> */}
          <div className="flex justify-center items-center">
            {userId ? (
              <UserCircle2 />
            ) : (
              <div className="hover:border-neutral-400 sm:border-white border-black/70 border-2 rounded-full p-1 px-4 ">
                <Link
                  href="/"
                  className="hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold "
                >
                  Join
                </Link>
              </div>
            )}
          </div>
          {/* <AvatarFallback>OS</AvatarFallback> */}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {userId ? (
          <>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Subscription
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut(() => router.push("/"))}
            >
              Log out
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Log in
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
