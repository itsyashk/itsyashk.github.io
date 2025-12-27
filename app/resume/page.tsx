'use client';

import { Download, FileText } from "lucide-react";

export default function ResumePage() {
    const resumePath = "/resume.pdf";

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 selection:bg-white/20 flex flex-col">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">Resume</h1>
                    </div>

                    <a
                        href={resumePath}
                        download
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                    >
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                    </a>
                </div>

                <div className="flex-grow rounded-xl overflow-hidden border border-white/[0.1] bg-neutral-900 relative shadow-2xl">
                    <object
                        data={resumePath}
                        type="application/pdf"
                        className="w-full h-full min-h-[800px]"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center bg-black text-white">
                            <FileText className="h-16 w-16 text-gray-600" />
                            <p className="text-xl font-medium text-gray-400">Unable to display PDF directly.</p>
                            <a
                                href={resumePath}
                                className="text-white underline hover:text-gray-300 font-medium"
                            >
                                Download it instead.
                            </a>
                        </div>
                    </object>
                </div>
            </div>
        </div>
    );
}
