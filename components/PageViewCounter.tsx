"use client";

import { useEffect, useRef, useState } from "react";

export default function PageViewCounter() {
    const [count, setCount] = useState<number | null>(null);
    const didRun = useRef(false);

    useEffect(() => {
        // avoids double increment in React strict mode during dev
        if (didRun.current) return;
        didRun.current = true;

        fetch("https://api.counterapi.dev/v1/itsyashk-github-io/home-page-views/up", {
            cache: "no-store",
        })
            .then((res) => res.json())
            .then((data) => setCount(typeof data?.value === "number" ? data.value : null))
            .catch((err) => {
                console.error("page view counter error:", err);
                setCount(null);
            });
    }, []);

    return (
        <span className="text-xs text-[hsl(var(--muted-foreground))]">
            page views · {count ?? "—"}
        </span>
    );
}
