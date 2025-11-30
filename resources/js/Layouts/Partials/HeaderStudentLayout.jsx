import ApplicationLogo from "@/Components/ApplicationLogo";
import NavigationMenu from "@/Components/NavigationMenu";
import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Disclosure } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import {
    IconChevronCompactDown,
    IconLayoutSidebar,
    IconLogout2,
    IconX,
} from "@tabler/icons-react";

export default function HeaderStudentLayout({ url = "" }) {
    return (
        <>
            <Disclosure
                as="nav"
                className="py-4 border-b border-blue-300 border-opacity-25 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 lg:border-none"
            >
                {({ open }) => (
                    <>
                        <div className="px-6 lg:px-24">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <ApplicationLogo
                                        bgLogo="from-orange-500 via-orange-600 to-orange-600"
                                        colorLogo="text-white"
                                        colortText="text-white"
                                    />
                                </div>

                                <div className="flex lg:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-white rounded-xl hover:text-white focus:outline-none">
                                        <span className="absoulute -inset-0.5">
                                            {open ? (
                                                <IconX className="block size-6" />
                                            ) : (
                                                <IconLayoutSidebar className="block size-6" />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </div>

                                <div className="hidden lg:ml-4 lg:block">
                                    <div className="flex items-center">
                                        <div className="hidden lg:mx-10 lg:block">
                                            <div className="flex space-x-4">
                                                <NavigationMenu
                                                    url="#"
                                                    title="Dashboard"
                                                    active={url.startsWith(
                                                        "/student/dashboard"
                                                    )}
                                                />
                                                <NavigationMenu
                                                    url="#"
                                                    title="Jadwal"
                                                    active={url.startsWith(
                                                        "/student/schedules"
                                                    )}
                                                />
                                                <NavigationMenu
                                                    url="#"
                                                    title="Kartu Rencana Studi"
                                                    active={url.startsWith(
                                                        "/student/study-plans"
                                                    )}
                                                />
                                                <NavigationMenu
                                                    url="#"
                                                    title="Kartu Hasil Studi"
                                                    active={url.startsWith(
                                                        "/student/study-results"
                                                    )}
                                                />
                                                <NavigationMenu
                                                    url="#"
                                                    title="Pembayaran"
                                                    active={url.startsWith(
                                                        "/student/fees"
                                                    )}
                                                />
                                            </div>
                                        </div>

                                        {/* profile dropdown */}
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="blue"
                                                    size="xl"
                                                    className="data-[state=open]:text-white flex items-center gap-2 px-2 py-2"
                                                >
                                                    <Avatar className="size-10 rounded-lg">
                                                        <AvatarFallback className="text-blue-600 rounded-lg">
                                                            X
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="grid flex-1 text-sm leading-tight text-left">
                                                        <span className="font-semibold truncate">
                                                            Ahmad
                                                        </span>
                                                        <span className="text-xs truncate">
                                                            ahmad@gmail.com
                                                        </span>
                                                    </div>
                                                    <IconChevronCompactDown className="ml-auto size-4" />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>
                                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                                        <Avatar className="size-8 rounded-lg">
                                                            <AvatarFallback className="text-blue-600 rounded-lg">
                                                                X
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="grid flex-1 text-sm leading-tight text-left">
                                                            <span className="font-semibold truncate">
                                                                ahmad
                                                            </span>
                                                            <span className="text-xs truncate">
                                                                ahmad@gmail.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                </DropdownMenuLabel>

                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={route('/logout')}
                                                        as='button'
                                                        method="post"
                                                        className="flex items-center gap-2"
                                                    >
                                                        <IconLogout2 />
                                                        Logout
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith("/student/dashboard")
                                            ? "bg-blue-500 text-white"
                                            : "text-white hover:bg-blue-500",
                                        "block rounded-md px-3 py-2.5 text-base font-medium"
                                    )}
                                >
                                    Dashboard
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith("/student/schedules")
                                            ? "bg-blue-500 text-white"
                                            : "text-white hover:bg-blue-500",
                                        "block rounded-md px-3 text-base py-2.5 font-medium"
                                    )}
                                >
                                    Jadwal
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith("/student/study-plans")
                                            ? "bg-blue-500 text-white"
                                            : "text-white hover:bg-blue-500",
                                        "block rounded-md px-3 text-base py-2.5 font-medium"
                                    )}
                                >
                                    Kartu Rencana Studi
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith("/student/study-results")
                                            ? "bg-blue-500 text-white"
                                            : "text-white hover:bg-blue-500",
                                        "block rounded-md px-3 text-base py-2.5 font-medium"
                                    )}
                                >
                                    Kartu Hasil Studi
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith("/student/fees")
                                            ? "bg-blue-500 text-white"
                                            : "text-white hover:bg-blue-500",
                                        "block rounded-md px-3 text-base py-2.5 font-medium"
                                    )}
                                >
                                    Pembayaran
                                </Disclosure.Button>
                            </div>
                            <div className="pt-4 pb-3">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <Avatar>
                                            <AvatarFallback>X</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">
                                            Ahmad Sudirma
                                        </div>
                                        <div className="text-sm font-medium text-white">
                                            ahmad@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 mt-3 space-y-1">
                                    <Disclosure.Button
                                        as="button"
                                        href={route('/logout')}
                                        method='post'
                                        className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-500"
                                    >
                                        Logout
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <header className="py-6"></header>
        </>
    );
}
