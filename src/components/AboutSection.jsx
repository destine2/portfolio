import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-6 text-center mx-auto max-w-md">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer
                        </h3>

                        <p className="text-muted-foreground">
                            I’ve built websites and web applications using React,
                            TypeScript, HTML, CSS, and MySQL. My experience covers
                            everything from landing pages to interactive dashboards.
                        </p>

                        <p className="text-muted-foreground">
                            My passion lies at the intersection of technology and strategy.
                            I love building digital experiences that feel simple, fast,
                            and intuitive. Coding gives me the freedom to turn ideas into
                            real, functional products.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a
                                href="#Contact"
                                className="cosmic-button flex justify-center items-center"
                            >
                                Get In Touch
                            </a>

                            <a
                                href="#"
                                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="grid grid-cols-1 gap-6 max-w-md w-full ml-auto">

                        {/* CARD 1 */}
                        <div className="gradient-border p-6 card-hover rounded-xl">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        I build responsive, modern interfaces optimized for speed,
                                        accessibility, and user experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="gradient-border p-6 card-hover rounded-xl">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Client Collaboration</h4>
                                    <p className="text-muted-foreground">
                                        I work closely with clients to transform ideas into smooth,
                                        user-friendly digital products.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="gradient-border p-6 card-hover rounded-xl">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Problem Solving</h4>
                                    <p className="text-muted-foreground">
                                        I enjoy breaking complex problems into simple, maintainable,
                                        and scalable solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};
