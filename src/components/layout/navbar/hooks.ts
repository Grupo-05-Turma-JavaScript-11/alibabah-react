import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useNowTick(intervalMs = 30_000) {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const id = window.setInterval(() => setNow(new Date()), intervalMs);
        return () => window.clearInterval(id);
    }, [intervalMs]);

    return now;
}

export function useCloseOnRouteChange(onClose: () => void) {
    const location = useLocation();

    useEffect(() => {
        onClose();
    }, [location.pathname]);
}

export function useEscapeToClose(onClose: () => void) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
}

export function useBodyScrollLock(locked: boolean) {
    useEffect(() => {
        document.body.style.overflow = locked ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [locked]);
}
