
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // In a real implementation, you would send the form data to johnmaitai10@gmail.com
      // For now, we'll simulate form submission
      setTimeout(() => {
        toast.success('Message sent successfully!', {
          description: 'Thank you for reaching out. I will get back to you soon.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-primary" />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={cn("pl-10 border-2 focus:border-primary transition-all", 
              errors.name ? 'border-destructive' : 'border-input')}
            disabled={isSubmitting}
          />
        </div>
        {errors.name && <p className="text-sm text-destructive font-medium">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-primary" />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={cn("pl-10 border-2 focus:border-primary transition-all", 
              errors.email ? 'border-destructive' : 'border-input')}
            disabled={isSubmitting}
          />
        </div>
        {errors.email && <p className="text-sm text-destructive font-medium">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-primary" />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={cn("pl-10 border-2 focus:border-primary transition-all resize-none", 
              errors.message ? 'border-destructive' : 'border-input')}
            disabled={isSubmitting}
          />
        </div>
        {errors.message && <p className="text-sm text-destructive font-medium">{errors.message}</p>}
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full transition-all hover:translate-y-[-2px] hover:shadow-lg rounded-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></span>
            Processing...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Send Message
            <Send className="ml-1 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
