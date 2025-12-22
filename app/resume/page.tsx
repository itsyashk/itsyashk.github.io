'use client';

import { Download, FileText } from "lucide-react";
import { profile } from "@/lib/data";

export default function ResumePage() {
    const resumePath = "/resume.pdf";

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-[calc(100vh-100px)] flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Resume</h1>
                </div>

                <a
                    href={resumePath}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-blue-600 transition-colors"
                >
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                </a>
            </div>

            <div className="flex-grow bg-[hsl(var(--muted))] rounded-xl overflow-hidden border border-[hsl(var(--muted))] relative">
                <object
                    data={resumePath}
                    type="application/pdf"
                    className="w-full h-full"
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center bg-[hsl(var(--background))]">
                        <FileText className="h-16 w-16 text-[hsl(var(--muted-foreground))]" />
                        <p className="text-xl font-medium">Unable to display PDF directly.</p>
                        <a
                            href={resumePath}
                            className="text-[hsl(var(--primary))] hover:underline font-medium"
                        >
                            Download it instead.
                        </a>
                    </div>
                </object>
            </div>
        </div>
    );
}
