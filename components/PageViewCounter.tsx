"use client";

import { useEffect, useRef, useState } from "react";

export default function PageViewCounter() {
    const [count, setCount] = useState<number | null>(null);
    const didRun = useRef(false);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        const token = process.env.NEXT_PUBLIC_COUNTER_API_KEY;

        // V2 API (Recommended - Supports Analytics/History)
        if (token) {
            fetch("https://api.counterapi.dev/v2/yash-kakades-workspace/first-counter-2296/up", {
                headers: { "Authorization": `Bearer ${token}` }
            })
                .then((res) => {
                    if (!res.ok) throw new Error(`HTTP V2 error! status: ${res.status}`);
                    return res.json();
                })
                .then((data) => {
                    if (typeof data?.count === "number") setCount(data.count);
                    else if (typeof data?.value === "number") setCount(data.value);
                    else console.error("Unexpected V2 response format:", data);
                })
                .catch((err) => {
                    console.error("CounterAPI V2 error:", err);
                    setCount(null);
                });
        }
        // Fallback to V1 API (Legacy - Basic Count Only)
        else {
            fetch("https://api.counterapi.dev/v1/yash-kakades-workspace/first-counter-2296/up")
                .then((res) => {
                    if (!res.ok) throw new Error(`HTTP V1 error! status: ${res.status}`);
                    return res.json();
                })
                .then((data) => {
                    if (typeof data?.count === "number") setCount(data.count);
                    else if (typeof data?.value === "number") setCount(data.value);
                    else console.error("Unexpected V1 response format:", data);
                })
                .catch((err) => {
                    console.error("CounterAPI V1 error:", err);
                    setCount(null);
                });
        }
    }, []);

    return (
        <span className="text-sm text-[hsl(var(--muted-foreground))]">
            All Time Page Views: {count ?? "—"}
        </span>
    );
}
