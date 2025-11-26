import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";


export const ContactSection = () => {
    const{toast} = useToast();

    const handleSubmit = (e) => {
        e.preventDefault()



        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "thank you for you message"
            });

        }, 1500)
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="conatainer mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary ">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? feel free to reach out.
                    I'm always open to discussing new <span className="text-primary" >opportunities</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-12">

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:ekunwedestiny42@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        ekunwedestiny42@gmail.com
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+2348112711466"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +234 811 271 1466
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a

                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Lagos Nigeria
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="" target="_blank">
                                    <Twitch />
                                </a>
                                <a href="" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs " onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send me a <span className="text-primary/45 ">Message</span></h3>

                        <form action="" className="space-y-6" >
                            <div>
                                <label htmlFor="name"
                                    className=" block text-sm font-medium mb-2">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="destiny Ekunwe"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focu:ring-primary" />

                            </div>


                            <div>
                                <label htmlFor="email"
                                    className=" block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="destinyEkunwe@gmail.com"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focu:ring-primary" />

                            </div>



                            <div>
                                <label htmlFor="message"
                                    className=" block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    type="text"
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="hello......"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focu:ring-primary resize-none" />

                            </div>


                            <button
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                )}
                            >
                                Send Message
                                <Send size={15} />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}