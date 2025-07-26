import { Github, Linkedin, MailIcon, MapPin, PhoneIcon } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-52 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking for a reliable web developer? Let’s connect and talk about how
          I can help your business grow online
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex items-start space-x-4 pb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MailIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium flex items-start">Email</h4>
                <span className="text-muted-foreground">
                  Leomasis95@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-4 pb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <PhoneIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium flex items-start">Phone</h4>
                <span className="text-muted-foreground">+506 6448 3985</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium flex items-start">Location</h4>
                <span className="text-muted-foreground">
                  Cartago, Costa Rica
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/leonardo-masis-59166719b/"
                target="_blank"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href="https://github.com/LeonM95"
                target="_blank"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
