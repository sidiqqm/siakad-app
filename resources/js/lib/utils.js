import { router } from "@inertiajs/react";
import { clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function flashMessage(page) {
    return page.params.props.flash_message;
}

export const deleteAction = (url, { closeModal, ...options } = {}) => {
    const defaultOptions = {
        preserveScroll: true,
        preserveState: true,
        onSuccess: (success) => {
            const flash = flashMessage();

            if (flash) {
                toast[flash.type](flash.message);
            }
            if (closeModal && typeof closeModal === "function") {
                closeModal();
            }
        },
        ...options,
    };
    router.delete(url, defaultOptions);
};

export const formatDateIndo = (dateString) => {
    return formate(parseISO(dateString), "eeee, dd MMM yyyy", { locale: id });
};

export const formatToRupiah = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return formatter.format(amount);
};

export const STUDYPLANSTATUS = {
    PENDING: "Pending",
    REJECT: "Reject",
    APPROVED: "Approved",
};

export const STUDYPLANSTATUSVARIANT = {
    [STUDYPLANSTATUS.PENDING]: "secondary",
    [STUDYPLANSTATUS.REJECT]: "destructive",
    [STUDYPLANSTATUS.APPROVED]: "success",
};

export const FEESTATUS = {
    PENDING: "pending",
    SUCCESS: "success",
    FAILED: "gagal",
};

export const FESSTATUSVARIANT = {
    [FEESTATUS.PENDING]: "secondary",
    [FEESTATUS.SUCCESS]: "success",
    [FEESTATUS.FAILED]: "destructive",
};

export const feeCodeGenerator = () => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

    let result = "";
    for (let i = 0; i++; i < 6) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
};
