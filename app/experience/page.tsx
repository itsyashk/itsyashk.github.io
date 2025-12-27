
import { experience } from "@/lib/data";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white/20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    Experience
                </h1>

                <div className="relative border-l border-white/[0.1] ml-3 md:ml-6 space-y-16 pb-12">
                    {experience.map((job, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-800 border border-white/[0.2] group-hover:bg-white group-hover:border-white transition-colors" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {job.company}
                                </h3>
                                <span className="text-sm font-mono text-gray-500 mt-1 sm:mt-0">
                                    {job.date}
                                </span>
                            </div>

                            <p className="text-lg font-medium text-gray-300 mb-4">
                                {job.role}
                            </p>

                            <ul className="list-disc ml-4 space-y-2 text-gray-400 marker:text-gray-600">
                                {job.description.map((item, i) => (
                                    <li key={i} className="leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
