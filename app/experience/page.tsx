'use client';

import { experience } from "@/lib/data";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    Experience
                </h1>
                <p className="text-gray-400 mb-16 max-w-2xl">
                    My professional journey in robotics and research.
                </p>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <div key={index} className="group relative border border-white/[0.1] bg-neutral-950/50 rounded-2xl p-6 md:p-8 hover:bg-neutral-900/50 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {job.company}
                                    </h3>
                                    <div className="flex items-center text-blue-300/80 font-medium mt-1">
                                        <Briefcase className="h-4 w-4 mr-2" />
                                        {job.role}
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-500 font-mono">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {job.date}
                                    </div>
                                    {/* Only render location if it exists, to avoid errors if type is inconsistent, though we just added it. */}
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        {(job as any).location || "Remote"}
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3 text-gray-400">
                                {job.description.map((item, i) => (
                                    <li key={i} className="flex items-start leading-relaxed">
                                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700 group-hover:bg-blue-400/50 transition-colors" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
