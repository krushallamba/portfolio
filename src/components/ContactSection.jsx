
import { Mail, Phone, MapPin } from "lucide-react"
import Card from "./ui/Card"


const ContactSection = () => {


  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </div>

      <div className=" w-full gap-8">
        <div className="flex items-center justify-center w-full">
          <Card className="">
            <div className=" p-6 space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:krushallamba@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    krushallamba5096@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+918780052561" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8780052561
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Jamnagar, Gujarat, India</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium mb-3">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/krushallamba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/krushal-lamba-8a9ab925a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactSection

