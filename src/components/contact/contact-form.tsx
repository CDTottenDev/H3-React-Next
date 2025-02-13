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
        >
          ×
        </button>
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          Contact Us
        </h2>
        <form
          className="flex h-[calc(100%-4rem)] flex-col gap-6 md:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-1 md:order-1">
            <Textarea
              placeholder="Your message"
              name="message"
              className="h-full min-h-[200px] border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50 md:min-h-[300px]"
              required
            />
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-4 md:order-2">
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  className="border-2 border-green-800/40 bg-background text-foreground focus:border-primary/50"
                  required
                />
              </div>
              <ContactFormClient />
            </div>
            <span className="text-sm text-center text-foreground/80">
              We will get back to you as soon as possible.
            </span>
            <span className="text-sm text-center font-semibold bg-green-800/10 px-2 py-1 rounded-md text-green-800 dark:text-green-400 dark:bg-green-800/20">
              541-419-8077
              <br />Chance Hyser
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
