import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github, Tags } from "lucide-react"

const projects = [

    {
        id: 1,
        tittle: "Landing Page",
        Description: "A clean and responsive landing page for startups.",
        Image: "/projects/project1.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        tittle: "E-Commerce Store",
        Description: "Full e-commerce website with cart, checkout, and product filtering.",
        Image: "/projects/project2.png",
        tags: ["Next.js", "Stripe", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        tittle: "Portfolio Website",
        Description: "Modern personal portfolio with dark mode and animations.",
        Image: "/projects/project3.png",
        tags: ["React", "Framer Motion", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        tittle: "Blog Platform",
        Description: "A markdown-powered blog system with admin dashboard.",
        Image: "/projects/project4.png",
        tags: ["Next.js", "Supabase", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 5,
        tittle: "Chat Application",
        Description: "Real-time chat app with user authentication and typing indicators.",
        Image: "/projects/project5.png",
        tags: ["React", "Firebase", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 6,
        tittle: "Crypto Dashboard",
        Description: "Live market data dashboard with charts and watchlist.",
        Image: "/projects/project6.png",
        tags: ["React", "Chart.js", "API"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 7,
        tittle: "Restaurant Menu App",
        Description: "Menu browsing app with food categories and ordering flow.",
        Image: "/projects/project7.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 8,
        tittle: "Real Estate Listings",
        Description: "Property listing platform with search and map integration.",
        Image: "/projects/project8.png",
        tags: ["Next.js", "Leaflet", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 9,
        tittle: "AI Image Generator",
        Description: "Web app that lets users generate AI images using an API.",
        Image: "/projects/project9.png",
        tags: ["Next.js", "OpenAI API", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Creating your own website is an exciting and rewarding endeavor
                    that allows you to establish a digital presence and share your ideas with the world.
                </p>


                <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">

                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.Image}
                                    alt={project.tittle}
                                    className="w-ful h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6 ">
                                <div className="flex fle-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary-foreground ">{tag}</span>
                                    ))}
                                </div>


                                <h3 className="font-semibold text-xl mb-1">{project.tittle} </h3>
                                <p className="text-muted-foregroud text-sm mb-4  "> {project.Description}</p>

                                <div className="flex justify-between items-center">

                                    <div className="flex space-x-3 ">
                                        <a href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hove:tex-primary transistion-colors duration-300" >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hove:tex-primary transistion-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>



                        </div> 
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/destine2"
                    target="_blank" 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                    </a>
                </div>

            </div>

        </section>
    );
};