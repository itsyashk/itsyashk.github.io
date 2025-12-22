
import { skills } from "@/lib/data";

export default function SkillsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-4">Skills</h1>
            <p className="text-[hsl(var(--muted-foreground))] text-lg mb-12">
                Technical toolkit for building autonomous systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bg-[hsl(var(--card))] border border-[hsl(var(--muted))] rounded-xl p-6">
                        <h2 className="text-xl font-bold mb-6 capitalize border-b border-[hsl(var(--muted))] pb-2">
                            {category.replace('_', ' / ')}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {items.map(skill => (
                                <div key={skill} className="px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-md font-medium">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
