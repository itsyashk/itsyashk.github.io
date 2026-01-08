
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Github, Calendar, Tag, Cpu } from "lucide-react";
import { notFound } from "next/navigation";

// Required for static export to know which pages to build
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

interface Project {
    slug: string;
    title: string;
    categories: string[];
    tags: string[];
    stack: string[];
    date: string;
    summary: string;
    description: string;
    approach?: string;
    metrics?: string[];
    github?: string;
    image?: string;
    images?: string[];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug) as Project | undefined;

    if (!project) {
        notFound();
    }

    // Combine single image and image array into one list for unified rendering
    const displayImages = project.images || (project.image ? [project.image] : []);

    return (
        <article className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/projects" className="inline-flex items-center text-sm text-gray-500 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to projects
                </Link>

                <header className="mb-12 border-b border-white/[0.1] pb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex gap-2">
                            {project.categories.map(cat => (
                                <span key={cat} className="text-blue-400 font-mono text-xs border border-blue-400/20 px-3 py-1 rounded-full bg-blue-400/10">
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm font-mono">
                            <Calendar className="h-3 w-3 mr-2" />
                            {project.date}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                        {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium">
                                <Github className="mr-2 h-4 w-4" /> View Source
                            </a>
                        )}
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Left Column: Text Content */}
                    <div className="space-y-12 lg:col-span-2">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">The Problem</h2>
                            <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                                <p>{project.description}</p>

                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Approach</h2>
                            <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                                {project.approach ? (
                                    <p>{project.approach}</p>
                                ) : (
                                    <p>
                                        The core of the solution involves a custom pipeline built with {project.stack.join(", ")}.
                                        I prioritized modularity and performance, ensuring the system can run in real-time constraints.
                                    </p>
                                )}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Results</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.metrics?.map((metric, i) => {
                                    const [value, label] = metric.includes('|')
                                        ? metric.split('|').map(s => s.trim())
                                        : [metric.split(' ')[0], metric.split(' ').slice(1).join(' ')];

                                    return (
                                        <div key={i} className="flex flex-col p-4 rounded-xl bg-neutral-900/50 border border-white/[0.1]">
                                            <span className="text-3xl font-bold text-white mb-1">{value}</span>
                                            <span className="text-sm text-gray-500">{label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Image & Details */}
                    <div className="space-y-8">
                        {displayImages.map((img, idx) => (
                            <div key={idx} className="rounded-xl overflow-hidden border border-white/[0.1] bg-neutral-900">
                                <img
                                    src={img}
                                    alt={`${project.title} ${idx + 1}`}
                                    className="w-full h-auto block"
                                />
                            </div>
                        ))}

                        <div className="p-6 rounded-2xl bg-neutral-900/30 border border-white/[0.1]">
                            <h3 className="font-bold mb-4 text-white flex items-center">
                                <Cpu className="h-4 w-4 mr-2 text-blue-400" />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-3 py-1 rounded-md text-sm bg-black border border-white/[0.1] text-gray-300 font-mono hover:border-white/[0.3] transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-neutral-900/30 border border-white/[0.1]">
                            <h3 className="font-bold mb-4 text-white flex items-center">
                                <Tag className="h-4 w-4 mr-2 text-blue-400" />
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/[0.05] text-gray-400">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
