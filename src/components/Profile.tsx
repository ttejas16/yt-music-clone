import { ReactNode } from "react";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Cast,
    HelpCircleIcon,
    History,
    LucideLogIn,
    LucideSquareUser,
    MessageSquareWarning,
    Settings,
    ShieldClose,
    UploadCloud,
    UsersIcon,
    Youtube
} from "lucide-react";

function Profile(): ReactNode {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar >
                    <AvatarImage src="/profile.jpg" className="h-7 w-7 cursor-pointer rounded-full" />
                    <AvatarFallback>TJ</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-72 bg-neutral-800 border-none text-white py-3" align={"end"}>
                <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-neutral-800 focus:text-white">
                        <div className="flex gap-x-4">
                            <Avatar >
                                <AvatarImage src="/profile.jpg" className="h-8 w-8 rounded-full" />
                            </Avatar>
                            <div className="flex flex-col scale-[1] gap-y-1 text-[0.95rem]">
                                <p>Literal Trash</p>
                                <p>@trashLiterally</p>
                                <a className="text-sm text-blue-400 cursor-pointer">Manage Your Google Account</a>
                            </div>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-neutral-500" />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1 ">
                            <LucideSquareUser strokeWidth={1} />
                            <p className="pl-4">Your Channel</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1">
                            <Youtube strokeWidth={1} />
                            <p className="pl-4">Get Music Premium</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >

                        <div className="flex justify-center items-center py-1 h-full">
                            <UsersIcon strokeWidth={1} />
                            <p className="pl-4">Switch Account</p>
                        </div>

                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1">
                            <LucideLogIn strokeWidth={1} />
                            <p className="pl-4">Sign out</p>
                        </div>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-neutral-500" />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1">
                            <UploadCloud strokeWidth={1} />
                            <p className="pl-4">Upload music</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1">
                            <History strokeWidth={1} />
                            <p className="pl-4">History</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1">
                            <Settings strokeWidth={1} />
                            <p className="pl-4">Settings</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1">
                            <ShieldClose strokeWidth={1} />
                            <p className="pl-4">Terms And Privacy Policy</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer">
                        <div className="flex justify-center items-center py-1">
                            <HelpCircleIcon strokeWidth={1} />
                            <p className="pl-4">Help</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-neutral-700 focus:text-white cursor-pointer" >
                        <div className="flex justify-center items-center py-1">
                            <MessageSquareWarning strokeWidth={1} />
                            <p className="pl-4">Send Feedback</p>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Profile;