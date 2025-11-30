import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import { Toaster } from "@/Components/ui/toaster";
import { flashMessage } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { Fragment, useEffect, useState } from "react";
import { toast } from "sonner";
import Sidebar from "./Partials/Sidebar";
import SidebarResponsive from "./Partials/SidebarResponsive";

export default function AppLayout({ title, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url, props } = usePage();
    const auth = usePage().props.auth.user;
    console.log(auth);
    const flash = props.flash || {};

    useEffect(() => {
        // Handle flash messages
        if (flash.message && flash.type) {
            // Pastikan type yang valid untuk toast
            const validTypes = ["success", "error", "warning", "info"];
            const toastType = validTypes.includes(flash.type)
                ? flash.type
                : "info";

            toast[toastType](flash.message);
        }
    }, [flash]);

    return (
        <>
            <Head title={title} />
            <Toaster position="top-center" richColors />

            {/* Mobile Sidebar Dialog */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                            className="-m-2.5 p-2.5"
                                        >
                                            <IconX className="size-6 text-white" />
                                        </button>
                                    </div>
                                </Transition.Child>

                                {/* Mobile Sidebar Content */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 px-6 pb-2">
                                    <SidebarResponsive auth={auth} url={url} />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Desktop Sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col mx-2 my-2">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 px-6 pb-4 rounded-xl">
                    <Sidebar auth={auth} url={url} />
                </div>
            </div>

            {/* Mobile Header */}
            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <IconLayoutSidebar className="size-6" />
                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-foreground">
                    {title}
                </div>
                <Link href="#">
                    <Avatar>
                        <AvatarFallback>X</AvatarFallback>
                    </Avatar>
                </Link>
            </div>

            {/* Main Content */}
            <main className="py-4 lg:pl-72">
                <div className="px-4">{children}</div>
            </main>
        </>
    );
}
