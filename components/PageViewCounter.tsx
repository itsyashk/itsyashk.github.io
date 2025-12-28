"use client";

import { useEffect, useRef, useState } from "react";

export default function PageViewCounter() {
    const [count, setCount] = useState<number | null>(null);
    const didRun = useRef(false);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        // Direct V1 API call - No NPM packages required
        // Slug constructed from dashboard info: yash-kakades-workspace / first-counter-2296
        fetch("https://api.counterapi.dev/v1/yash-kakades-workspace/first-counter-2296/up")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                if (typeof data?.count === "number") {
                    setCount(data.count);
                } else if (typeof data?.value === "number") {
                    setCount(data.value);
                } else {
                    console.error("Unexpected response format:", data);
                }
            })
            .catch((err) => {
                console.error("counterapi error:", err);
                setCount(null);
            });
    }, []);

    return (
        <span className="text-sm text-[hsl(var(--muted-foreground))]">
            All Time Page Views: {count ?? "—"}
        </span>
    );
}
