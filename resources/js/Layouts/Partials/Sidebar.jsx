import NavLink from "@/Components/NavLink";
import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import { Link } from "@inertiajs/react";
import {
    IconBooks,
    IconBuildingSkyscraper,
    IconCalendar,
    IconCalendarTime,
    IconCircleKey,
    IconDoor,
    IconDroplet,
    IconDroplets,
    IconLayout2,
    IconLogout2,
    IconMoneybag,
    IconSchool,
    IconUser,
    IconUsers,
    IconUsersGroup,
} from "@tabler/icons-react";

export default function Sidebar({ auth, url }) {
    return (
        <nav className="flex flex-col flex-1">
            <ul role="list" className="flex flex-col flex-1">
                <li className="-mx-6">
                    <Link
                        href="#"
                        className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-white gap-x-4 hover:bg-blue-800"
                    >
                        <Avatar>
                            <AvatarFallback>{auth.name.substring(0,1)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-left">
                            <span className="font-bold truncate">
                                {auth.name}
                            </span>
                            <span className="truncate">{auth.role_name}</span>
                        </div>
                    </Link>
                </li>

                {auth.roles.some((role) => ["Admin"].includes(role)) && (
                    <>
                        <NavLink
                            url="#"
                            active={url.startsWith("/admin/dashboard")}
                            title="Dashboard"
                            icon={IconLayout2}
                        />

                        <div className="px-3 py-2 text-xs font-medium text-white">
                            Master
                        </div>
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/faculties")}
                            title="Fakultas"
                            icon={IconBuildingSkyscraper}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/departments")}
                            title="Program Studi"
                            icon={IconSchool}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/academic-years")}
                            title="Tahun Ajaran"
                            icon={IconCalendarTime}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/classroom")}
                            title="Kelas"
                            icon={IconDoor}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/roles")}
                            title="Peran"
                            icon={IconCircleKey}
                        />

                        <div className="px-3 py-2 text-xs font-medium text-white">
                            Pengguna
                        </div>
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/student")}
                            title="Mahasiswa"
                            icon={IconUsers}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/teacher")}
                            title="Dosen"
                            icon={IconUsersGroup}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/operator")}
                            title="Operator"
                            icon={IconUser}
                        />

                        <div className="px-3 py-2 text-xs font-medium text-white">
                            Akademik
                        </div>
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/courses")}
                            title="Mata Kuliah"
                            icon={IconBooks}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/schedules")}
                            title="Jadwal"
                            icon={IconCalendar}
                        />

                        <div className="px-3 py-2 text-xs font-medium text-white">
                            Pembayaran
                        </div>
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/fees")}
                            title="Uang Kuliah Tunggal"
                            icon={IconMoneybag}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/fee-groups")}
                            title="Golongan UKT"
                            icon={IconDroplets}
                        />
                    </>
                )}
                {auth.roles.some((role) => ["Teacher"].includes(role)) && (
                    <>
                        <NavLink
                            url="#"
                            active={url.startsWith("/teacher/dashboard")}
                            title="Dashboard"
                            icon={IconLayout2}
                        />

                        <div className="px-3 py-2 text-xs font-medium text-white">
                            Akademik
                        </div>
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/courses")}
                            title="Mata Kuliah"
                            icon={IconBooks}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/schedules")}
                            title="Jadwal"
                            icon={IconCalendar}
                        />
                    </>
                )}
                {auth.roles.some((role) => ["Operator"].includes(role)) && (
                    <>
                        <NavLink
                            url="#"
                            active={url.startsWith("/operator/dashboard")}
                            title="Dashboard"
                            icon={IconLayout2}
                        />

                        <div className="px-3 py-2 text-xs font-medium text-white">
                            Pengguna
                        </div>
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/student")}
                            title="Mahasiswa"
                            icon={IconUsers}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/teacher")}
                            title="Dosen"
                            icon={IconUsersGroup}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/operator")}
                            title="Operator"
                            icon={IconUser}
                        />

                        <div className="px-3 py-2 text-xs font-medium text-white">
                            Akademik
                        </div>
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/courses")}
                            title="Mata Kuliah"
                            icon={IconBooks}
                        />
                        <NavLink
                            url="/admin/users"
                            active={url.startsWith("/admin/schedules")}
                            title="Jadwal"
                            icon={IconCalendar}
                        />
                    </>
                )}

                <div className="px-3 py-2 text-xs font-medium text-white">
                    Lainnya
                </div>
                <NavLink
                    url={route("logout")}
                    method="post"
                    as="button"
                    active={url.startsWith("logout")}
                    title="Logout"
                    icon={IconLogout2}
                />
            </ul>
        </nav>
    );
}
