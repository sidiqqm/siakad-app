import CardStat from "@/Components/CardStat";
import HeaderTitle from "@/Components/HeaderTitle";
import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import { IconBook, IconBooks, IconBuildingSkyscraper, IconDoor, IconLayout2, IconSchool, IconUser, IconUsersGroup } from "@tabler/icons-react";

export default function Dashboard(props) {
    const auth = usePage().props.auth.user;

    return (
        <div className="flex flex-col pb-32 w-full">
            <div className="flex flex-col justify-between items-start mb-8 gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconLayout2}
                />
            </div>

            <div className="grid gap-4 mb-8 lg:grid-cols-4">
                <CardStat
                    data={{
                        title: "Total Mahasiswa",
                        icon: IconUser,
                        background:
                            "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-500",
                        iconClassName: "text-white",
                    }}
                >
                    <div className="text-2xl font-bold">
                        {props.count.students}
                    </div>
                </CardStat>
                <CardStat
                    data={{
                        title: "Total Program Dosen",
                        icon: IconUsersGroup,
                        background:
                            "text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700",
                        iconClassName: "text-white",
                    }}
                >
                    <div className="text-2xl font-bold">
                        {props.count.teachers}
                    </div>
                </CardStat>
                <CardStat
                    data={{
                        title: "Total Kelas",
                        icon: IconDoor,
                        background:
                            "text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700",
                        iconClassName: "text-white",
                    }}
                >
                    <div className="text-2xl font-bold">
                        {props.count.classrooms}
                    </div>
                </CardStat>
                <CardStat
                    data={{
                        title: "Total Mata Kuliah",
                        icon: IconBooks,
                        background:
                            "text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700",
                        iconClassName: "text-white",
                    }}
                >
                    <div className="text-2xl font-bold">
                        {props.count.courses}
                    </div>
                </CardStat>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => (
    <AppLayout title={page.props.page_settings.title} children={page} />
);
