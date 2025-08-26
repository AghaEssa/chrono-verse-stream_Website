import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contact@chronoverse.anime",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-ANIME",
      description: "24/7 support hotline"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Neo Tokyo, Sector 7",
      description: "Visit our headquarters"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-glow animate-float">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on your anime journey? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-hero border-border glow-primary">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-glow">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-border focus:border-primary resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 glow-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-glow">
                Get in <span className="text-accent">Touch</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions, feedback, or just want to chat about anime, 
                we're here to help. Choose your preferred way to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="anime-card bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary animate-glow">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold mb-1 text-glow">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-secondary border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold mb-2 text-glow">
                  Response Time
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 hours. 
                  For urgent matters, please call our support hotline.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;