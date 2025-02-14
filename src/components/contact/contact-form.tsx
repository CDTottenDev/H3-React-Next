import { ContactFormClient } from './contact-form-client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background/20 backdrop-blur">
      <div className="mx-auto size-full max-w-4xl p-4 md:p-24">
        <button
          onClick={onClose}
          className="float-right text-2xl text-foreground/80 hover:text-foreground hover:opacity-70"
          aria-label="Close contact form"
        >
          ×
        </button>
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          Get in Touch
        </h2>
        <form 
          action="https://formspree.io/f/xnnqyngz" 
          method="POST"
          className="flex h-[calc(100%-4rem)] flex-col gap-6 md:flex-row"
        >
          <div className="flex-1 md:order-1">
            <Textarea
              placeholder="Your message..."
              name="message"
              className="h-full min-h-[200px] border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50 md:min-h-[300px]"
              required
              aria-label="Your message"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-4 md:order-2">
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50"
                  required
                  aria-label="Your name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50"
                  required
                  aria-label="Your email"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone number (optional)"
                  name="phone"
                  className="border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50"
                  aria-label="Your phone number"
                />
              </div>
              <ContactFormClient />
            </div>
            <div className="space-y-2">
              <p className="text-center text-sm text-muted-foreground">
                We will respond as soon as possible.
              </p>
              <div className="text-center text-sm font-medium text-green-800 dark:text-green-200">
                <p>Or call directly:</p>
                <p className="mt-1">541-419-8077</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
