
import { profile } from "@/lib/data";

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>

            <div className="prose dark:prose-invert max-w-none text-lg text-[hsl(var(--muted-foreground))] mb-12">
                <p className="text-xl text-[hsl(var(--foreground))] font-medium mb-6">
                    {profile.about.short}
                </p>
                <p className="mb-6">{profile.about.long}</p>
                <p>
                    I believe that the most interesting problems lie at the intersection of hardware and algorithms.
                    Whether it's calibrating a camera array to sub-millimeter precision or training a quadruped to walk over rough terrain,
                    I enjoy the challenge of making math work in the physical world.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b border-[hsl(var(--muted))] pb-2">Focus Areas</h2>
                    <ul className="space-y-4">
                        {profile.about.focus.map((item) => (
                            <li key={item} className="flex items-start">
                                <span className="text-[hsl(var(--primary))] mr-2">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b border-[hsl(var(--muted))] pb-2">Current Interests</h2>
                    <ul className="space-y-4">
                        {profile.about.interests.map((item) => (
                            <li key={item} className="flex items-start">
                                <span className="text-[hsl(var(--primary))] mr-2">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-16 bg-[hsl(var(--secondary))] p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Engineering Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {profile.about.values.map((val) => (
                        <div key={val} className="flex items-center">
                            <div className="h-2 w-2 bg-[hsl(var(--primary))] rounded-full mr-3" />
                            <span className="font-medium">{val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
