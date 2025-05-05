import { AlertCircle, Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto animated-element">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <MessageSquare className="h-6 w-6 text-primary mr-2" />
              <span className="font-medium text-primary">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Let's Start a Conversation</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or want to discuss opportunities? I'm here to help turn your ideas into reality.
            </p>
            <div className="pt-4">
              <Button size="lg" className="rounded-full" asChild>
                <a href="#contact-form">
                  Contact Me <Send className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" id="contact-form">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animated-element">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Fill out the form and I'll get back to you as soon as possible. You can also reach me directly using the contact information below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <a href="mailto:johnmaitai10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      johnmaitai10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <a href="tel:+254769773915" className="text-muted-foreground hover:text-primary transition-colors">
                      +254 769 773 915
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-muted-foreground">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex gap-3 items-start">
                  <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Project Inquiry?</h3>
                    <p className="text-sm text-muted-foreground">
                      Please provide details about your project, timeline, and budget to help me understand your needs better.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border h-[250px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d36.70730798656889!3d-1.3031933981209557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1673623573540!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Nairobi Map"
                ></iframe>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-all animated-element delay-200">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical project process?",
                answer: "My process typically includes discovery, planning, design, development, testing, and deployment phases. I emphasize clear communication throughout the entire process."
              },
              {
                question: "What are your payment terms?",
                answer: "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I can arrange milestone-based payments."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while complex web applications can take several months."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, I offer ongoing support and maintenance packages to keep your website secure, updated, and performing optimally."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all hover:border-primary/30"
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
