'use client';

import Link from "next/link";
import { projects, profile } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white selection:bg-neutral-200 dark:selection:bg-neutral-800 pb-20">
            <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">

                {/* Header / Intro Section */}
                <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 mb-20 items-start">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            {profile.name}
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 font-medium">
                            Engineering Applied Science Junior at <a href="https://www.eas.caltech.edu/" target="_blank" className="text-black dark:text-white hover:underline transition-all">Caltech</a>
                        </p>

                        <div className="prose prose-neutral dark:prose-invert max-w-none mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-[1.05rem]">
                            <p className="mb-4">
                                Hey! I’m Yash, a third-year undergrad at <a href="https://www.caltech.edu/" target="_blank" className="underline decoration-neutral-300 hover:decoration-black dark:decoration-neutral-700 dark:hover:decoration-white transition-all">Caltech</a> studying Electrical Engineering with a focus on Intelligent Systems. I’m advised by <a href="https://www.cms.caltech.edu/people/hassibi" target="_blank" className="underline decoration-neutral-300 hover:decoration-black dark:decoration-neutral-700 dark:hover:decoration-white transition-all">Prof. Babak Hassibi</a>.
                            </p>
                            <p className="mb-4">
                                Broadly, I’m interested in embodied intelligence at the intersection of hardware, perception, and learning-based control. My work spans robotics, computer vision, motion capture, and reinforcement learning, with a strong emphasis on real-world deployment. At Caltech, I work on humanoid locomotion using reinforcement learning in the <a href="http://www.bipedalrobotics.com/" target="_blank" className="underline decoration-neutral-300 hover:decoration-black dark:decoration-neutral-700 dark:hover:decoration-white transition-all">AMBER Lab</a>. In parallel, I conduct perception and robotics research with <a href="https://www.relativityspace.com/" target="_blank" className="underline decoration-neutral-300 hover:decoration-black dark:decoration-neutral-700 dark:hover:decoration-white transition-all">Relativity Space</a>, focusing on high-precision sensing, motion capture, and digital twin systems for aerospace applications.
                            </p>
                            <p>
                                I’ve previously worked as a robotics and computer vision intern at AFRL developing ROS2-enabled digital twins and perception systems for autonomous robots, as well as a Robotics Software Engineering Intern at Relativity Space, and briefly conducted machine learning research in the Wierman Group at Caltech on adversarial robustness in CNN-based perception.
                            </p>
                        </div>

                        <div className="flex gap-5">
                            <a href={profile.socials.email} className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href={profile.socials.github} target="_blank" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href={profile.socials.linkedin} target="_blank" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-72 flex-shrink-0">
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                            <img
                                src="/images/about/headshot.jpg"
                                alt="Yash Kakade"
                                className="object-cover w-full h-full transition-all duration-500"
                            />
                        </div>
                        <p className="text-xs text-neutral-400 mt-2 text-center font-mono">
                            ykakade [at] caltech.edu
                        </p>
                    </div>
                </section>

                {/* Selected Projects / Publications Style */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">Selected Projects</h2>
                    <div className="space-y-12">
                        {projects.map((project) => (
                            <div key={project.slug} className="flex flex-col md:flex-row gap-6 group">
                                <div className="w-full md:w-48 flex-shrink-0 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 relative bg-neutral-100 dark:bg-neutral-900 self-start">
                                    {(project.image || (project.images && project.images[0])) ? (
                                        <img
                                            src={project.image || (project.images && project.images[0])}
                                            alt={project.title}
                                            className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-neutral-400 text-xs">No Image</div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        <Link href={`/projects/${project.slug}`}>
                                            {project.title}
                                        </Link>
                                    </h3>
                                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 font-mono">
                                        {project.metrics && project.metrics[0]} • {project.date}
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-3 max-w-2xl">
                                        {project.summary}
                                    </p>
                                    <div className="flex gap-3 flex-wrap">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-xs border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded text-neutral-500">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.github && (
                                            <a href={project.github} target="_blank" className="text-xs border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors uppercase font-medium">
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* Current Focus Section - Restored and Adapted */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 mb-10">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
                        Current Focus
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                        Balancing engineering, research, and studies at Caltech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-1">Relativity Space</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 text-sm">Robotics Software Engineering Intern</p>
                            </div>
                            <div className="mt-1">
                                <img src="/relativity-logo.png" alt="Relativity Space" className="h-14 w-auto object-contain dark:invert" />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-300">Perception</span>
                            <span className="px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-300">Motion Capture</span>
                            <span className="px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-300">Structure from Motion</span>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-1">Caltech</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 text-sm">Undergraduate Researcher</p>
                            </div>
                            <div>
                                <img src="/amber-lab-logo.png" alt="AMBER Lab" className="h-8 w-auto object-contain dark:invert" />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-300">Control</span>
                            <span className="px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-300">Reinforcement Learning</span>
                            <span className="px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-300">Humanoid Locomotion</span>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex flex-col justify-center items-center text-center">
                        <span className="text-3xl font-bold text-black dark:text-white mb-1">June 2027</span>
                        <span className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-widest">Graduation</span>
                    </div>
                    <div className="col-span-1 md:col-span-3 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white">
                                <img
                                    src="/caltech-logo.png"
                                    alt="Caltech"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-black dark:text-white text-sm md:text-base truncate">California Institute of Technology</h4>
                                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-700">GPA: 3.7/4.0</span>
                                </div>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 md:line-clamp-none">
                                    B.S. Electrical Engineering (Intelligent Systems) and Business, Economics & Management (BEM)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
