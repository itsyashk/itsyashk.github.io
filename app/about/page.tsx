
import { profile } from "@/lib/data";
import AboutSlideshow from "@/components/AboutSlideshow";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    About
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                        <p className="text-xl text-white font-medium mb-6 leading-relaxed">
                            {profile.about.short}
                        </p>
                        <p className="leading-relaxed">{profile.about.long}</p>
                        <p className="leading-relaxed">
                            I believe that the most interesting problems lie at the intersection of hardware and algorithms.
                            Whether it's building a motion capture system with micron-level accuracy or training humanoids to walk over rough terrain,
                            I enjoy the challenge of making math work in the physical world.
                        </p>
                        <p className="leading-relaxed">
                            Beyond the lab, I compete in (NCAA) Track & Field at Caltech. In my free time, I also love listening to music, making complex origami tessellations, and setting new times on my racing sim.
                        </p>
                    </div>

                    <div>
                        <AboutSlideshow images={[
                            { src: "/images/about/andrew_ng.jpg", alt: "With Andrew Ng" },
                            { src: "/images/about/friends.jpg", alt: "With friends" },
                            { src: "/images/about/group.jpg", alt: "Group photo" }
                        ]} />
                    </div>
                </div>
            </div>
        </div >
    );
}
