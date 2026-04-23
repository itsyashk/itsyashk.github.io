"use client";

import { useEffect, useRef, useState } from "react";

export default function PageViewCounter() {
    const [count, setCount] = useState<number | null>(null);
    const didRun = useRef(false);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        const token = process.env.NEXT_PUBLIC_COUNTER_API_KEY;

        // Use the V2 API to increment and get the current count.
        // The legacy V1 API is returning 503 errors and failing to fetch.
        fetch("https://api.counterapi.dev/v2/yash-kakades-team-2296/first-counter-2296/up")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP V2 error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                if (typeof data?.data?.up_count === "number") {
                    setCount(data.data.up_count);
                }
            })
            .catch((err) => {
                console.error("CounterAPI V2 error:", err);
                setCount(null);
            });
    }, []);

    return (
        <span className="text-sm text-[hsl(var(--muted-foreground))]">
            All Time Page Views: {count ?? "—"}
        </span>
    );
}
