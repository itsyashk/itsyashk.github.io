
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { notFound } from "next/navigation";

// Required for static export to know which pages to build
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/projects" className="inline-flex items-center text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
            </Link>

            <header className="mb-12">
                <div className="flex flex-wrap gap-3 mb-6">
                    <span className="text-[hsl(var(--primary))] font-mono text-sm border border-[hsl(var(--primary))/20] px-3 py-1 rounded-full bg-[hsl(var(--primary))/10]">
                        {project.category}
                    </span>
                    <span className="text-[hsl(var(--muted-foreground))] font-mono text-sm px-3 py-1">
                        {project.date}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed max-w-3xl">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity font-medium">
                            <Github className="mr-2 h-4 w-4" /> View Source
                        </a>
                    )}
                </div>
            </header>

            {/* Main Content Area - In a real app, this could be Markdown content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                        <div className="prose dark:prose-invert max-w-none text-[hsl(var(--muted-foreground))]">
                            <p>{project.description}</p>
                            {/* This is a placeholder for where full markdown would go */}
                            <p>
                                Building robust robotics systems requires handling uncertainty and real-world noise.
                                This project addresses specific challenges in {project.category.toLowerCase()} by leveraging {project.stack[0]}.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Approach & Implementation</h2>
                        <div className="prose dark:prose-invert max-w-none text-[hsl(var(--muted-foreground))]">
                            <p>
                                The core of the solution involves a custom pipeline built with {project.stack.join(" and ")}.
                                We prioritized modularity and performance, ensuring the system can run in real-time constraints.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Results</h2>
                        <ul className="space-y-3">
                            {project.metrics?.map((metric, i) => (
                                <li key={i} className="flex items-center text-lg">
                                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))] mr-4" />
                                    {metric}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="space-y-8">
                    <div className="rounded-xl border border-[hsl(var(--muted))] p-6 bg-[hsl(var(--muted))/20]">
                        <h3 className="font-bold mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-md text-sm bg-[hsl(var(--background))] border border-[hsl(var(--muted))] font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border border-[hsl(var(--muted))] p-6 bg-[hsl(var(--muted))/20]">
                        <h3 className="font-bold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
