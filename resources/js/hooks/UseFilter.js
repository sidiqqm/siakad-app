import pkg from "lodash";
import { useCallback, useEffect } from "react";
import { router } from "@inertiajs/react";

export default function UseFilter({ route, values, only, wait = 300 }) {
    const { debounce, pickBy } = pkg;

    const reload = useCallback(
        debounce((query) => {
            router.get(route, pickBy(query), {
                only,
                preserveState: true,
                preserveScroll: true,
            });
        }, wait),
        [route, only, wait]
    );

    useEffect(() => reload(values), [values, reload]);

    useEffect(() => {
        return () => reload.cancel();
    }, [reload]);

    return { values };
}
