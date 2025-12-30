
import { skills } from "@/lib/data";

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Skills & Toolkit
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Technical proficiency across the robotics stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="group p-6 rounded-2xl border border-white/[0.1] bg-neutral-950 hover:bg-neutral-900 transition-colors">
                            <h2 className="text-lg font-bold mb-6 capitalize text-white flex items-center">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-shadow" />
                                {category.replace('_', ' / ')}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <div key={skill} className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.05] text-gray-300 rounded-md font-mono text-sm hover:bg-white/[0.1] transition-colors cursor-default">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
