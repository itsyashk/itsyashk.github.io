
import { hobbies } from "@/lib/data";

export default function HobbiesPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    Outside Engineering
                </h1>

                <div className="prose prose-invert prose-lg max-w-none text-gray-400 mb-12">
                    <p>
                        While I spend a lot of time in the lab or in simulation, I believe in maintaining a balanced life.
                        Physical training and creative outlets keep my mind sharp.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {hobbies.map((hobby) => (
                        <div key={hobby} className="flex items-center p-6 rounded-xl border border-white/[0.1] bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mr-4" />
                            <span className="font-medium text-lg text-white">{hobby}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 border border-white/[0.1] rounded-xl bg-neutral-900/30 text-center">
                    <p className="text-2xl font-serif italic text-gray-500">
                        "Mens sana in corpore sano."
                    </p>
                </div>
            </div>
        </div>
    );
}
