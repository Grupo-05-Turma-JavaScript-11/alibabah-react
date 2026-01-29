export type TimeRange = { start: string; end: string };

export const HOURS: Record<number, TimeRange[]> = {
    0: [
        { start: "12:00", end: "15:00" },
        { start: "18:00", end: "22:00" },
    ],
    1: [],
    2: [
        { start: "12:00", end: "15:00" },
        { start: "18:00", end: "22:00" },
    ],
    3: [
        { start: "12:00", end: "15:00" },
        { start: "18:00", end: "22:00" },
    ],
    4: [
        { start: "12:00", end: "15:00" },
        { start: "18:00", end: "22:00" },
    ],
    5: [
        { start: "12:00", end: "15:00" },
        { start: "18:00", end: "22:00" },
    ],
    6: [
        { start: "12:00", end: "15:00" },
        { start: "18:00", end: "22:00" },
    ],
};

export const DAY_LABEL: Record<number, string> = {
    0: "DOM",
    1: "SEG",
    2: "TER",
    3: "QUA",
    4: "QUI",
    5: "SEX",
    6: "SÁB",
};

function toMinutes(hhmm: string) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
}

function nowMinutes(date = new Date()) {
    return date.getHours() * 60 + date.getMinutes();
}

export function isOpenNow(date = new Date()) {
    const day = date.getDay();
    const mins = nowMinutes(date);
    const ranges = HOURS[day] ?? [];
    return ranges.some((r) => mins >= toMinutes(r.start) && mins < toMinutes(r.end));
}
