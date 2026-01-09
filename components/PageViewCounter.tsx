"use client";

import { useEffect, useRef, useState } from "react";

export default function PageViewCounter() {
    const [count, setCount] = useState<number | null>(null);
    const didRun = useRef(false);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        const token = process.env.NEXT_PUBLIC_COUNTER_API_KEY;

        // 1. V2 API (Fire-and-forget for History/Analytics)
        // We use the 'team' namespace as invoked in the dashboard.
        // We don't await this or use its result because of CORS/Auth limitations on reading.
        fetch("https://api.counterapi.dev/v2/yash-kakades-team-2296/first-counter-2296/up")
            .catch(e => console.warn("V2 Tracking silent fail:", e));

        // 2. V1 API (Legacy - For Displaying Total Count)
        // We use the original 'workspace' namespace that was working previously to show "107+".
        fetch("https://api.counterapi.dev/v1/yash-kakades-workspace/first-counter-2296/up")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP V1 error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                if (typeof data?.count === "number") setCount(data.count);
                else if (typeof data?.value === "number") setCount(data.value);
            })
            .catch((err) => {
                console.error("CounterAPI V1 error:", err);
                setCount(null);
            });
    }, []);

    return (
        <span className="text-sm text-[hsl(var(--muted-foreground))]">
            All Time Page Views: {count ?? "—"}
        </span>
    );
}
