
import { profile } from "@/lib/data";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white/20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    About
                </h1>

                <div className="prose prose-invert prose-lg max-w-none text-gray-400 mb-16">
                    <p className="text-xl text-white font-medium mb-6 leading-relaxed">
                        {profile.about.short}
                    </p>
                    <p className="leading-relaxed">{profile.about.long}</p>
                    <p className="leading-relaxed">
                        I believe that the most interesting problems lie at the intersection of hardware and algorithms.
                        Whether it's calibrating a camera array to sub-millimeter precision or training a quadruped to walk over rough terrain,
                        I enjoy the challenge of making math work in the physical world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-lg font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-white/[0.1] pb-2">Focus Areas</h2>
                        <ul className="space-y-4">
                            {profile.about.focus.map((item) => (
                                <li key={item} className="flex items-center text-gray-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-white/[0.1] pb-2">Interests</h2>
                        <ul className="space-y-4">
                            {profile.about.interests.map((item) => (
                                <li key={item} className="flex items-center text-gray-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-neutral-900/30 border border-white/[0.1] p-8 rounded-2xl">
                    <h2 className="text-xl font-bold mb-6 text-white">Engineering Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {profile.about.values.map((val) => (
                            <div key={val} className="flex items-center text-gray-400">
                                <div className="h-1 w-1 bg-gray-500 rounded-full mr-3" />
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
