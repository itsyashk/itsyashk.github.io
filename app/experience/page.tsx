
import { experience } from "@/lib/data";

export default function ExperiencePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-12">Experience</h1>

            <div className="relative border-l border-[hsl(var(--muted))] ml-3 md:ml-6 space-y-12 pb-12">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 md:pl-12 group">
                        {/* Dot */}
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[hsl(var(--primary))] ring-4 ring-[hsl(var(--background))]" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold group-hover:text-[hsl(var(--primary))] transition-colors">
                                    {job.company}
                                </h3>
                                <p className="text-lg font-medium text-[hsl(var(--muted-foreground))]">
                                    {job.role}
                                </p>
                            </div>
                            <span className="text-sm font-mono text-[hsl(var(--muted-foreground))] mt-2 sm:mt-0 bg-[hsl(var(--secondary))] px-3 py-1 rounded-full w-fit">
                                {job.date}
                            </span>
                        </div>

                        <ul className="list-disc ml-5 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--muted-foreground))]">
                            {job.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
