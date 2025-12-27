'use client';

import { projects } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const allCategories = Array.from(new Set(projects.flatMap(p => p.categories)));

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredProjects = projects.filter(project => {
        const matchesFilter = filter === "All" || project.categories.includes(filter);
        const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-black pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Project Archive
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of implementations, experiments, and systems.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-40 bg-black/80 backdrop-blur-md py-4 border-b border-white/[0.1]">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                        <button
                            onClick={() => setFilter("All")}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                                filter === "All"
                                    ? "bg-white text-black"
                                    : "text-gray-400 hover:text-white hover:bg-white/[0.1]"
                            )}
                        >
                            All
                        </button>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                                    filter === cat
                                        ? "bg-white text-black"
                                        : "text-gray-400 hover:text-white hover:bg-white/[0.1]"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-white/[0.1] bg-neutral-900/50 focus:outline-none focus:ring-1 focus:ring-white/20 text-white placeholder-gray-600 transition-colors hover:bg-neutral-900"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* List View */}
                <div className="space-y-4">
                    {filteredProjects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group block rounded-xl p-6 border border-white/[0.1] bg-neutral-950 hover:bg-neutral-900 transition-all hover:border-white/[0.2] relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2">
                                            {project.categories.map(cat => (
                                                <span key={cat} className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs text-gray-400 font-mono">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm max-w-3xl">
                                        {project.summary}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        {project.stack.slice(0, 4).map((tech, i) => (
                                            <div key={tech} className="h-8 w-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-gray-300 font-mono" title={tech}>
                                                {tech.charAt(0)}
                                            </div>
                                        ))}
                                    </div>
                                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
