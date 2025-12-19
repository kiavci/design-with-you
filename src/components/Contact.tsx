import { useState } from "react";
import { Mail, MapPin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll respond within 48 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground font-sans font-light max-w-lg mx-auto">
            Interested in a piece or have a custom commission in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif font-light text-foreground mb-6">
                  Studio Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-light text-foreground">Studio Location</p>
                      <p className="text-sm font-sans text-muted-foreground">
                        Available for studio visits by appointment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-light text-foreground">Email</p>
                      <a
                        href="mailto:hello@studioclay.com"
                        className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hello@studioclay.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Instagram size={20} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-light text-foreground">Instagram</p>
                      <a
                        href="https://instagram.com/studioclay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
                      >
                        @studioclay
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-xl font-serif font-light text-foreground mb-4">
                  Commission Work
                </h3>
                <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">
                  Custom pieces are available upon request. Please allow 6-8 weeks for 
                  commissioned work. Each piece is handcrafted and unique—slight variations 
                  are part of the beauty of handmade ceramics.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground font-sans font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground font-sans font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground font-sans font-light focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="purchase">Purchase Inquiry</option>
                  <option value="commission">Custom Commission</option>
                  <option value="studio-visit">Studio Visit</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground font-sans font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-foreground text-primary-foreground font-sans text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
