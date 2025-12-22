
import { hobbies } from "@/lib/data";

export default function HobbiesPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">Outside of Engineering</h1>

            <div className="prose dark:prose-invert max-w-none text-lg text-[hsl(var(--muted-foreground))] mb-12">
                <p>
                    While I spend a lot of time in the lab or in simulation, I believe in maintaining a balanced life.
                    Physical training and creative outlets keep my mind sharp.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {hobbies.map((hobby) => (
                    <div key={hobby} className="flex items-center p-6 bg-[hsl(var(--secondary))] rounded-xl">
                        <div className="h-2 w-2 bg-[hsl(var(--primary))] rounded-full mr-4" />
                        <span className="font-medium text-lg text-[hsl(var(--secondary-foreground))]">{hobby}</span>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 border border-[hsl(var(--muted))] rounded-xl bg-[hsl(var(--muted))/10] text-center">
                <p className="text-2xl font-serif italic text-[hsl(var(--muted-foreground))]">
                    "Mens sana in corpore sano."
                </p>
            </div>
        </div>
    );
}
