
import { AlertCircle, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto animated-element">
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Fill out the form and I'll get back to you as soon as possible. You can also reach me directly using the contact information below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">example@mail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA, United States</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary rounded-lg border border-border">
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
            </div>

            <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
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
                className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all"
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
